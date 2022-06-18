import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { WHITE, VIOLET, GREY, GREYVIOLET } from '../colors';

export default function Markdown({ content }) {
	return (
		<StyledMarkdownWrapper>
			<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{ content }
			</ReactMarkdown>
		</StyledMarkdownWrapper>
	);
}

const StyledMarkdownWrapper = styled.main`
  img {
    overflow: hidden;
    max-height: 800px;
    width: auto;
    max-width: 100%;
  }
  
  h1, h2, h3, h3, h4, h5, h6 {
    color: ${VIOLET};
    font-family: Inconsolata Black;
  }

	h1 {
		font-size: 7em;
	}

	h2 {
		font-size: 6em;
	}

	h3 {
		font-size: 5em;
	}

	h4 {
		font-size: 4em;
	}

	h5 {
		font-size: 3em;
	}

	h6 {
		font-size: 2em;
	}

  p {
    margin: 2vh 0 5vh 0;
    font-family: Inconsolata Regular;
		color: ${WHITE};
		font-size: 1.2em;
		line-height: 1.3em;
  }

  blockquote {
    margin: 0 2vw;
    padding: 0 1vw;
    border-left: 5px solid ${VIOLET};

    p {
			font-size: 1.2em;
			color: ${GREYVIOLET};
      padding: 1vh 0;
      margin: 0;
    }
  }

  ol, ul {
    font-family: Inconsolata Regular;
    font-size: 20px;
    margin: 2vh 0 5vh 0;

    li {
      margin: 1vh 0;
    }
  }

  strong {
    color: ${VIOLET};
    font-family: Inconsolata Regular;
  }

  em, i {
    color: ${VIOLET};
    font-family: Inconsolata Regular;
  }

  a {
    text-decoration: none;
    color: ${VIOLET};
    font-family: Inconsolata Regular;
  }

  a:hover {
    text-decoration: underline;
  }

  code {
    max-height: 100vh;
    overflow: auto;
    box-sizing: border-box;
    border: 1px solid ${VIOLET};
    border-left: 2vw solid ${VIOLET};
    display: block;
    padding: 3vh 1vw;
    margin: 2vh 0 5vh 0;
    font-family: Courier New;
    font-size: 1.2em;
    color: ${WHITE};
  }

	table {
		font-family: Inconsolata Regular;
		border: 2px solid ${VIOLET};
		color: ${WHITE};
		padding: 1vh 1vw;

		thead {
			color: ${VIOLET};
			font-family: Inconsolata Black;
		}

		td {
			padding: 1vh;
		}
	}
`;
