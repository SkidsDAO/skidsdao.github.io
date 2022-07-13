import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';
import Section from './Section';
import Header from './Header';
import SectionHeader from './SectionHeader';
import Body from './Body';
import Markdown from './Markdown';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Body>
				<Header
					text="SkidsDAO"
					subtext="Breaking your things since 2022."
				/>
				<SectionHeader text="About Us" />
				<Section columns={1}>
					<Markdown content={aboutUsSectionContent} />
					<Button text="Read More" url="/about" />
				</Section>
			</Body>
			<Footer />
		</div>
	);
}


// ALL MARKDOWN GO HERE

const aboutUsSectionContent = `SkidsDAO is a hacker and cypherpunk collective with the objective of securing and improving the decentralised web. We achieve this through our work and contributions to public goods, inspiring, onboarding and mentoring security engineers and occassionally smart contract security reviews to projects we feel will have a positive effect on the ecosystem.`;


// ALL STYLING GO HERE

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
