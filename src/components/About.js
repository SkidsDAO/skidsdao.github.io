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

const aboutContent = `##### Add content with Markdown

Mauris iaculis tempor erat nec vestibulum. Aenean feugiat vitae ligula consequat consequat. Mauris gravida convallis mauris, sed placerat tortor condimentum ut. Pellentesque ipsum neque, maximus eu diam et, maximus vestibulum odio. Cras dapibus vitae justo eu sollicitudin. Donec id ipsum quis velit venenatis elementum. Fusce nisi felis, dignissim ut finibus sit amet, sollicitudin vel nibh. Vestibulum purus urna, sollicitudin ultricies vestibulum sed, lobortis in odio. 

### However you like it

Even with code like the one below

\`\`\`
use std::io::*;

fn main() {
	println!("Chicho the best");
}
\`\`\`

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

