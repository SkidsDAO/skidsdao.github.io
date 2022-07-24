import styled from 'styled-components';
import { VIOLET, WHITE } from '../colors';
import RgbText from './RgbText';

/*
 * @desc Skids-styled reusable header with optional subtext
 */

const DEFAULT_HEADER_TEXT = "Default Header";
export default function Header({ text, subtext }) {
	return (
		<StyledHeader>
			<RgbText>
				<h1 className="page-header">{ text ? text : DEFAULT_HEADER_TEXT }</h1>
				<h6 className="page-subheader">{ subtext }</h6>
			</RgbText>
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
