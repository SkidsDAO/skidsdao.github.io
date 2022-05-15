import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

import { BLUE, VOID, VIOLET, PINK, WHITE } from '../colors';

export default function Home() {
	return (
		<div>
			<Navbar />
			<StyledMain className="font-white">
				<StyledBody>
					<StyledHeader>
						<StyledH1 className="page-header">[ SkidsDAO ]</StyledH1>
						<StyledH2 className="page-subheader">Breaking your things since 2022.</StyledH2>
					</StyledHeader>
					<StyledSection>
						<h3 className="section-header">~$ Blockchain_Security</h3>
						<p className="body-text">Mauris iaculis tempor erat nec vestibulum. Aenean feugiat vitae ligula consequat consequat. Mauris gravida convallis mauris, sed placerat tortor condimentum ut. Pellentesque ipsum neque, maximus eu diam et, maximus vestibulum odio. Cras dapibus vitae justo eu sollicitudin. Donec id ipsum quis velit venenatis elementum. Fusce nisi felis, dignissim ut finibus sit amet, sollicitudin vel nibh. Vestibulum purus urna, sollicitudin ultricies vestibulum sed, lobortis in odio. </p>
						<StyledButton className="nav-link">Read More</StyledButton>
					</StyledSection>
					<StyledSection>
						<h3 className="section-header">~$ Smart_Contract_Auditing</h3>
						<p className="body-text">Mauris iaculis tempor erat nec vestibulum. Aenean feugiat vitae ligula consequat consequat. Mauris gravida convallis mauris, sed placerat tortor condimentum ut. Pellentesque ipsum neque, maximus eu diam et, maximus vestibulum odio. Cras dapibus vitae justo eu sollicitudin. Donec id ipsum quis velit venenatis elementum. Fusce nisi felis, dignissim ut finibus sit amet, sollicitudin vel nibh. Vestibulum purus urna, sollicitudin ultricies vestibulum sed, lobortis in odio. </p>
						<StyledButton className="nav-link">Read More</StyledButton>
					</StyledSection>
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
	width: 60%;
`;

const StyledHeader = styled.header`
`;

const StyledH1 = styled.h1`
	font-family: Inconsolata Black;
	color: ${BLUE};
`;

const StyledH2 = styled.h2`
	font-family: Inconsolata Regular;
	color: ${WHITE};
`;

const StyledButton = styled.button`
	margin: 1em 0;
	padding: 0.5em;
	border: 2px solid ${BLUE};
	font-family: Inconsolata Regular;
	color: ${BLUE};
	text-decoration: none;
	background: none;

	&:hover {
		color: ${VOID};
		background-color: ${VIOLET};
		border: 2px solid ${VIOLET};
		cursor: pointer;
	}
`;

const StyledSection = styled.section`
	h3 {
		color: ${VIOLET};
		font-family: Inconsolata Bold;
	}

	p {
		font-family: Inconsolata Regular;
	}
`;

