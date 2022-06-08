import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { VIOLET, PURPLE, VOID, BLUE, PINK, WHITE } from '../colors';

export default function Footer() {
	return (
		<StyledFooter>
      <StyledCopyright>&copy; <StyledLink to="/">SkidsDAO</StyledLink>. All Rights Reserved</StyledCopyright>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	font-family: Inconsolata Regular;
	color: ${VIOLET};
`;

const StyledCopyright = styled.div`
	padding: 5vh 1vw;
	text-align: center;

`;

const StyledLink = styled(Link)`
	color: ${VIOLET};
	font-family: Inconsolata Black;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;


