import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

import { VIOLET, GREYVIOLET, VOID, WHITE } from '../colors';
import RgbText from './RgbText';

export default function NotFound() {
	return (
		<div>
			<Navbar />
			<RgbText />
			<StyledMain className="font-white">
				<StyledBody>
					<StyledHeader>
						<StyledH1 className="page-header">Not Found</StyledH1>
						<StyledH2 className="page-subheader">Breaking 404 messages since 2022</StyledH2>
					</StyledHeader>
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
