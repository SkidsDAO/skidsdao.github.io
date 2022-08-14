import Navbar from './Navbar';
import Markdown from './Markdown';
import Header from './Header';
import Body from './Body';

export default function About() {
	return (
		<div>
			<Navbar />
			<Body>
				<Header text="About Us"></Header>
				<Markdown content={aboutContent}/>
			</Body>
		</div>
	);
}

const aboutContent = `##### The SkidsDAO Mission

SkidsDAO is a [hacker](https://en.wikipedia.org/wiki/Security_hacker) and [cypherpunk](https://en.wikipedia.org/wiki/Cypherpunk) collective with the objective of securing and improving the decentralised web. Our philosophy involves active contribution to public goods, onboarding and collaborating with security engineers & enthusiasts. We're interested in taking on smart contract security auditing endeavors with projects we believe have a positive impact on the ecosystem whether at present or in the future.

We love to have fun and prefer to keep things light hearted while perpetuating perfection in all that we do. Don’t want to end up stuffy and miserable after all. ;)

Though we cultivate a light hearted environment, our community is a meritocracy nonetheless as noted by the progressions systems we have in place. As a result of these efforts, we hope to churn out only the most 1337 explorers of the cyber realm commanding a high degree of respect alongside their impeccable ethical code.

As always, we welcome all but only the 1337 have our respect. This is an open call to you, anon. [Join us](https://discord.gg/RzVHVMRnRb) and be part of the cause. Whether it is a just one remains to be seen...

Viva la revolución!

`;
