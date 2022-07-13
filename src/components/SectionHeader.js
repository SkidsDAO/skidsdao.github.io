
import styled from 'styled-components';

import { VIOLET } from '../colors';

const	DEFAULT_SECTION_HEADER_TEXT = "Default Section Header";
export default function SectionHeader({ text }) {
	return (
		<StyledHeader className="section-header">
			{ "~$ " + (text ? text : DEFAULT_SECTION_HEADER_TEXT) }
		</StyledHeader>
	);
}

const StyledHeader = styled.h1`
	color: ${VIOLET};
	font-family: Inconsolata Bold;
`;
