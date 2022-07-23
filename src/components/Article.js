import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Markdown from './Markdown';
import { content } from '../modules/content';

import { VIOLET, GREYVIOLET, VOID, WHITE } from '../colors';

export default function Article() {
	const { id } = useParams();
	return (
		<div>
			<Navbar />
			<StyledMain className="font-white">
				<StyledBody>
					<StyledHeader>
						<StyledH1 className="page-header">{ content[id].title }</StyledH1>
						<StyledH2 className="page-subheader">{ content[id].subtitle }</StyledH2>
					</StyledHeader>
					<Markdown content={content[id].content} />
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
