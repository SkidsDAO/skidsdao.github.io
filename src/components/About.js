import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

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

					<StyledGrid>
						<StyledSection>
							<h3 className="section-header">~$ Hacker and Cypherpunk</h3>
							<p className="body-text">SkidsDAO is a hacker and cypherpunk collective with the objective of securing and improving the decentralised web. We achieve this through our work and contributions to public goods, inspiring, onboarding and mentoring security engineers and occassionally smart contract security reviews to projects we feel will have a positive effect on the ecosystem.</p>
							<p className="body-text">We love to have fun and prefer to keep things light hearted while perpetuating perfection in all that we do. Don’t want to end up stuffy and miserable after all. ;)</p>
							<p className="body-text">Though we cultivate a light hearted environment, it is a meritocracy nonetheless as noted by the progressions systems we have in place. As a result of these efforts, we hope to churn out some of the greatest hackers the blockchain world will ever see.</p>
							<p className="body-text">As always, <b>we welcome all but only the 1337 have our respect</b>. We’ll be waiting until you’re ready, anon.</p>
						</StyledSection>
					</StyledGrid>
				</StyledBody>
			</StyledMain>
			<Footer />
		</div>
	);
}

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

