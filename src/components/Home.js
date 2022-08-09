import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';
import Section from './Section';
import Header from './Header';
import SectionHeader from './SectionHeader';
import Body from './Body';
import Markdown from './Markdown';
import RgbText from './RgbText';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Body>
				<Header
					text="SkidsDAO"
					subtext="Breaking your things since 2022."
				/>
				<RgbText text="hotdog">
					<SectionHeader text="About Us" />
				</RgbText>
				<Section columns={1}>
					<Markdown content={aboutUsSectionContent} />
					<Button text="Read More" url="/about" />
				</Section>
			</Body>
		</div>
	);
}


// ALL MARKDOWN GO HERE

const aboutUsSectionContent = `SkidsDAO is a hacker and cypherpunk collective with the objective of securing and improving the decentralised web. We achieve this through our work and contributions to public goods, inspiring, onboarding and mentoring security engineers and occassionally smart contract security reviews to projects we feel will have a positive effect on the ecosystem.`;
