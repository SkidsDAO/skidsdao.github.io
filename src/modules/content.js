
export const content = [];


function resolveUri(title) {
	let uri = content[content.length - 1].title.toLowerCase().split(" ").join("_")
	return encodeURI(uri);
}

let markdown = '';

// ********** START CONTENT **********//
markdown = `**by [okko the jawa](https://twitter.com/okkothejawa/)**

This post was originally posted to our mirror blog [here](https://mirror.xyz/0xCf39521413F8De389771e35bB4C77b4bb827b7B3/HdSq7TVvk-s7DzQgN3u0pV8UFiVkaDft18HgmePTag4).

![](https://i.imgur.com/GzZQJia.png#center)
    

**Actually turned out to be:**

![](https://i.imgur.com/M7I5iva.png#center)
---

It all started when my friend Sai wrote,

```HTML
<style>
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 2em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
img[src*='#center'] { 
display: block;
margin: auto;
}

</style>
```

>***Anyone can call setToken to set a fake erc20 TAL token contract in staking.sol, which at very least does griefing as it can only be set just once.***
> ***But they probably know that so i submitted informational report just in case.***

The affected project was Talent Protocol, whose bounty program had recently launched on Immunefi. Sai thought they had a griefing attack at hand, an attack to disturb people, to force them to redeploy the contract. Sai reported it as an informational issue at first, and later resubmitted the issue as a medium. This was because Immunefi closed the initial report as griefing was listed as a medium severity impact in the bounty page and thus didn’t fit the informational classification.



```solidity
function setToken(address _token) public stablePhaseOnly {
        require(_token != address(0x0), "Address must be set");
        require(_token.supportsInterface(type(IERC20).interfaceId), "not a valid ERC20 token");
        // require(ERC165(_token).supportsInterface(type(IERC20).interfaceId), "not a valid ERC20 token");

        ERC20 erc20 = ERC20(_token);
        require(strcmp(erc20.symbol(), "TAL"), "token name is not TAL");

        token = _token;
}
```

### Anyone could have called the setter function

Sai was right, the function `setToken()` let anyone set the address of TAL token with arbitrary code as long as it was named “TAL” and followed the ERC20 standard. They were also correct about the fact that it can be used to grief the protocol. Who would want to reset the appropriate address for the token contract, spending extra gas, losing precious time and likely breaking accounting logic? 

Imagine an annoying scenario where a bad actor sets up a bot to monitor the chain and continuously update the contract with a malicious address after it’s set (or reset) by the protocol maintainers. Perhaps it would be the start of an endless battle with the attacker, you fix it, they break it, you fix it again, and they break it again; a lovely dance on chain.

Fortunately for the protocol, who used this as an interim mitigation until it could be fully patched by migrating the contracts, the function could be called only once. Yet, this is a double-edged sword, as an attacker could have utilized this very fact to set the token contract to a malicious address and force redeployment of the contract. 

In order to understand why the `setToken()` could be called once, we need to dive deeper into the specifics of how the Talent Protocol's contracts were designed.

### The biphasic contract design of Talent Protocol

Talent Protocol designed their contracts in a way that there are two phases to their protocol's operations: stable phase and token phase. As a requirement of this design, the staking contract had functions for staking stablecoins and staking their native token TAL which was planned to be used when the TAL token was ready and set. 

To make sure that the functions that should be used in specific phases couldn't be used in the wrong phase, Talent Protocol implemented modifiers `stablePhaseOnly` and `tokenPhaseOnly` in their logic so that certain functions could be only called in their respective phases. 

These modifiers checked if the address of TAL token was set by the `setToken()`, and expectedly, `setToken()` itself had a `stablePhaseOnly` modifier to ensure that the TAL address could be set only once. Once it was set, the `stablePhaseOnly` modifier would make the function revert. 
```solidity 
    /// Allows execution only while in stable phase
    modifier stablePhaseOnly() {
        require(!_isTokenSet(), "Stable coin disabled");
        _;
    }

    /// Allows execution only while in token phase
    modifier tokenPhaseOnly() {
        require(_isTokenSet(), "TAL token not yet set");
        _;
    }
```

As an effect of this scheme and the fact that `setToken()` lacked access control, anybody could set an arbitrary `ERC20` contract as the TAL token and trigger the token phase for the protocol which was in the stable phase at the time of our engagement.

### Staking contract had some stakes in it too

After getting a better understanding of the protocol's contracts, both Sai and I suspected that this vulnerability could be exploited further, and we looked for ways to upgrade the issue to critical severity. 

We initially searched for ways to steal the funds from the contract but the only way to get the stablecoin funds out of the contract was an admin controlled swap function, so no attacker could've stolen the funds even though they could set the TAL token address to a malicious contract and trigger the token phase prematurely. 

After rereading the contract many times hoping that I was missing a way to steal the funds, I couldn't find anything and I felt defeated. Yet, while I was hopelessly scrolling down the contract, I vaguely realized that I didn't need a way to steal the funds in order to have a critical issue. 

The contract already had 465k USD staked in it. Sure, I couldn't move the funds as the admin controlled swap function was the only way to transfer the funds out, but what if I could make the admin unable to transfer those funds too? 

In a semi-hopeful state, I checked the admin controlled swap function again, and I noticed that it was making a call to the attacker configurable TAL token address.

```solidity
    /// Deposits TAL in exchange for the equivalent amount of stable coin stored in the contract
    ///
    /// @notice Meant to be used by the contract owner to retrieve stable coin
    /// from phase 1, and provide the equivalent TAL amount expected from stakers
    ///
    /// @param _stableAmount amount of stable coin to be retrieved.
    ///
    /// @notice Corresponding TAL amount will be enforced based on the set price
    function swapStableForToken(uint256 _stableAmount) public onlyRole(DEFAULT_ADMIN_ROLE) tokenPhaseOnly {
        require(_stableAmount <= totalStableStored, "not enough stable coin left in the contract");
        uint256 tokenAmount = convertUsdToToken(_stableAmount);
        totalStableStored -= _stableAmount;
        IERC20(token).transferFrom(msg.sender, address(this), tokenAmount); // --> bingo, freeze time! zzzzz *freezing beam sounds*
        IERC20(stableCoin).transfer(msg.sender, _stableAmount);
    }
```

Finally, I was aware of the full impact, an attacker could have set the TAL token in a way that it would revert on transfers, so that the whole admin controlled swap function would revert and lock almost half a million dollars in the contract, forever. (As can be seen from the transaction of the whitehack conducted by the protocol, [465k USD to be exact](https://explorer.celo.org/tx/0x386e3baa6c2fe111002d5d84b5880c05ef1d5615770e70c38b824aeff63bb6b5/token-transfers)).

This would make a critical severity issue, as the "permanent freeze of funds" was listed as an impact of critical severity in the bug bounty page. I immediately crafted a report detailing the critical severity, and Sai appended it to the submission on Immunefi. 

In a hour or so, the team called `setToken()` with a temporary non-malicious TAL token to block any attack possibility before they drain the vulnerable contract for good. (They did this before they were aware of the critical impact.) Later, they reviewed the updated report, and after some discussions, they agreed with our assessed critical severity and upgraded the issue. 

This concludes the story of how an informational issue ended up being a critical issue that saved a lot of money, yet I want to talk about some additional exciting stuff.

### How did the team save the funds?

As mentioned above, the team created a fake non-malicious TAL token and set it as the TAL token of the staking contract to block any attack attempt utilizing this scenario. Then, they called `swapStableForToken()`, transferring their fake TAL token to the staking contract (without reverting) and got back the stablecoins, [effectively draining the contract](https://explorer.celo.org/tx/0x386e3baa6c2fe111002d5d84b5880c05ef1d5615770e70c38b824aeff63bb6b5/token-transfers). 

### Freezing funds not cool enough? Enter: Ransom contracts

After figuring out the full severity of the bug with Sai, I proceeded to have a late breakfast, and while meditating on the bug, an interesting thought popped in my mind. 

What if you didn't stop at just reverting on transfers and freezing the funds? After all, you decide what kind of maliciousness the attacker controlled TAL token going to have, why settle with a simple revert-on-transfer when you can have a ransom contract? 

(The code below may not be fit for production use. Using it in production may result in jail time or worse, waste of gas, looking at you, naughty blackhat.)

```solidity
/// @author Sai
    bool ransom_paid;
    address owner;
    function withdrawRansom() public {
         if (address(this).balance > 100 ether) {
             payable(owner).transfer(address(this).balance);
             ransom_paid = true;
         }
    }
    function transferFrom(address from, address to, uint256 amount) public override returns (bool) {
        if (!ransom_paid) {
            revert("Ransom is not paid!");
        }
        return true; // ransom paid, unlock funds
    }
```
The snippet above essentially operates the same with a revert-on-transfer malicious token until the ransom is paid. As (or Because) the admin swap function makes calls to TAL token's `transferFrom()` function, it stops the execution  by reverting. But after the symbolic ransom of >100 ether is paid to the contract, the victim (or anyone else) can call the function `withdrawRansom()`  which transfers the ransom to the attacker's address and toggles the `ransom_paid` boolean, which in turn lets calls through `transferFrom`, allowing the victim to withdraw their otherwise frozen stablecoin funds. 

While it does not change anything when it comes to the severity of the bug, I found this idea of ransom contracts pretty interesting as it highlights that the freeze of funds attacks are not necessarily without financial motive for the attacker. 

Another remarkable quality of ransom contracts is that they are verifiable: as the ransom contract is deployed on chain and possibly source code verified through a chain explorer, the victim knows that if they pay the ransom, they will certainly get their funds. Thus creates a much more effective and transparent ransom scheme than usual ransomware or meatspace ransoms in true crypto fashion. 

I haven't heard of such an attack happening in the wild yet. If you have, please come to SkidsDAO Discord server (link below) and let me know. I think I might be a ransom contract nerd.

***

### About us
We're kebabsec, a bug squashing trio. We're members of the on-chain whitehat collective [SkidsDAO](https://twitter.com/SkidsDAO) and provide security audit services along with the rest of the team, so if you are interested in securing your contracts, we can help.

#### Socials
The author of this text, myself, [okkothejawa]( https://twitter.com/okkothejawa)
Finder of this vulnerability, [Sai](https://twitter.com/sigh242)
Our lovely team, [kebabsec](https://twitter.com/kebabsec)
Greatest hacker space in crypto, [SkidsDAO](https://twitter.com/SkidsDAO), [skidsdao.xyz](https://skidsdao.xyz)
[SkidsDAO Discord server](https://discord.com/invite/NHNRUKMCz2)


### Special thanks
To my teammates [FlameHorizon](https://twitter.com/FlameHorizon1) and [Sai](https://twitter.com/sigh242), for reviewing this text countless times and progressing with me in our journey.

To my sensei [Sleepy](https://twitter.com/0xsomnus), for being the main editor of this text and guiding me in the art of securing this dark forest.

To the queen of CT, [Carnation](https://twitter.com/0xcarnation), for providing feedback with this text and being the patron of kebabsec, and answering my endless questions about DeFi.

To the assembly wizard of SkidsDAO and my mentor, [jtriley](https://twitter.com/jtriley_eth), for reviewing this text and motivating me to learn EVM and Foundry.

To great dev of ██████████, [kp](https://twitter.com/ppmoon69), for giving important suggestions to make this text more digestible and for being a good friend of kebabsec.

To [fleal](https://twitter.com/Francisco__Leal) from Talent Protocol, for reviewing this text, and to Talent Protocol for their exemplary care for security and security researchers.

Links to the snippets of code in the text for the curious readers

[First snippet, setToken function](https://github.com/talentprotocol/contracts/blob/67be03c3763e19fbb144b6afa61935956daca473/contracts/staking/StableThenToken.sol#L33-L42)

[Second snippet, stablePhaseOnly and tokenPhaseOnly modifiers](https://github.com/talentprotocol/contracts/blob/67be03c3763e19fbb144b6afa61935956daca473/contracts/staking/StableThenToken.sol#L44-L54)

[Third snippet, swapStableForToken function](https://github.com/talentprotocol/contracts/blob/67be03c3763e19fbb144b6afa61935956daca473/contracts/Staking.sol#L224-L240)
`;

content.push({
	title: "How an informational issue ended up securing (almost) half a million dollars",
	subtitle: "How a simple bug was initially reported as informational",
	content: markdown
});

// resolve uri
content[content.length - 1].uri = resolveUri(content[content.length - 1].title);
// ********** END CONTENT **********//






// ********** START CONTENT **********//
markdown = `#### Just some markdown for second content

Demo page.

`;

content.push({
	title: "This is the second title",
	subtitle: "Subtitle over here for second",
	content: markdown
});

// resolve uri
content[content.length - 1].uri = resolveUri(content[content.length - 1].title);
// ********** END CONTENT **********//
