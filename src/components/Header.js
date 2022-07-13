import styled from 'styled-components';
import { VIOLET, WHITE } from '../colors';

/*
 * @desc Skids-styled reusable header with optional subtext
 */

const DEFAULT_HEADER_TEXT = "Default Header";
export default function Header({ text, subtext }) {
	return (
		<StyledHeader>
			<h1 className="page-header">{ text ? text : DEFAULT_HEADER_TEXT }</h1>
			<h6 className="page-subheader">{ subtext }</h6>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	width: 100%;

	h1 {
		color: ${VIOLET};
		font-family: Inconsolata Black;
	}

	h6 {
		color: ${WHITE};
		font-family: Inconsolata Regular;
	}
`;
