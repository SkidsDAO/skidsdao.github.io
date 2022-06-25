import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Markdown from './Markdown';

import { VIOLET, GREYVIOLET, VOID, WHITE } from '../colors';

export default function About() {
	return (
		<div>
			<Navbar />
			<StyledMain className="font-white">
				<StyledBody>
					<StyledHeader>
						<StyledH1 className="page-header">About Us</StyledH1>
						<StyledH2 className="page-subheader">Breaking your things since 2022.</StyledH2>
					</StyledHeader>
					<Markdown content={aboutContent}/>
				</StyledBody>
			</StyledMain>
			<Footer />
		</div>
	);
}

const aboutContent = `##### The SkidsDAO Mission

SkidsDAO is a [hacker](https://en.wikipedia.org/wiki/Security_hacker) and [cypherpunk](https://en.wikipedia.org/wiki/Cypherpunk) collective with the objective of securing and improving the decentralised web. Our philosophy involves active contribution to public goods, onboarding and collaborating with security engineers & enthusiasts. We're interested in taking on smart contract security auditing endeavors with projects we believe have a positive impact on the ecosystem whether at present or in the future.

We love to have fun and prefer to keep things light hearted while perpetuating perfection in all that we do. Don’t want to end up stuffy and miserable after all. ;)

Though we cultivate a light hearted environment, our community is a meritocracy nonetheless as noted by the progressions systems we have in place. As a result of these efforts, we hope to churn out only the most 1337 explorers of the cyber realm commanding a high degree of respect alongside their impeccable ethical code.

As always, we welcome all but only the 1337 have our respect. This is an open call to you, anon. Join us and be part of the cause. Whether it is a just one remains to be seen...

Viva la revolución!

`;

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledBody = styled.div`
	width: 80%;

	@media (min-width: 768px) {
		width: 60%;
	}
`;

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
`;

const StyledHeader = styled.header`
	margin: 15vh 0;
`;

const StyledH1 = styled.h1`
	word-wrap: break-word;
	font-family: Inconsolata Black;
	color: ${VIOLET};
`;

const StyledH2 = styled.h2`
	font-family: Inconsolata Regular;
	color: ${WHITE};
`;

const StyledButton = styled.button`
	margin: 1em 0;
	padding: 0.5em;
	border: 2px solid ${VIOLET};
	font-family: Inconsolata Regular;
	color: ${VIOLET};
	text-decoration: none;
	background: none;
	transition: color background-color;
	transition-duration: 0.1s, 0.1s;
	transition-timing-fucntion: ease-out;

	&:hover {
		color: ${VOID};
		background-color: ${WHITE};
		border: 2px solid ${WHITE};
		cursor: pointer;
	}
`;

const StyledSection = styled.section`
	h3 {
		color: ${VIOLET};
		word-wrap: break-word;
		font-family: Inconsolata Bold;
	}

	p {
		color: ${GREYVIOLET};
		font-family: Inconsolata Regular;
	}

	b {
		color: ${VIOLET};
		font-family: Inconsolata Bold;
	}
`;

