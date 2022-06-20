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

