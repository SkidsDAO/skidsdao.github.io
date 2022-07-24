import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import RgbText from './RgbText';

import { VIOLET, PURPLE, VOID, BLUE, PINK, WHITE } from '../colors';

const DEFAULT_FOOTER_LINK_TEXT = "Default Footer Link";
const DEFAULT_FOOTER_URL = "/";
function FooterLink({ text, url }) {
	return (
		<RgbText>
			<StyledFooterLink className="footer-link" to={url ? url : DEFAULT_FOOTER_URL}>
				{ text ? text : DEFAULT_FOOTER_LINK_TEXT }
			</StyledFooterLink>
		</RgbText>
	);
}

const StyledFooterLink = styled(Link)`
	color: ${VIOLET};
	font-family: Inconsolata Bold;
	text-decoration: none;
	margin: 0.2em 0;

	&:hover {
		text-decoration: underline;
	}
`;

export default function Footer() {
	return (
		<RgbText>
			<StyledFooter>
				<StyledGrid>
					<aside id="left">
						<SectionHeader text="SkidsDAO" />
					</aside>
					<aside id="right">
						<FooterLink text="Home" url="/" />
						<FooterLink text="About" url="/about" />
						<FooterLink text="Blog" url="/blog" />
					</aside>
				</StyledGrid>
				<StyledCopyright className="body-text">&copy; <StyledLink to="/">SkidsDAO</StyledLink>. All Rights Reserved</StyledCopyright>
			</StyledFooter>
		</RgbText>
	);
}

const StyledFooter = styled.footer`
	border-top: 1px solid ${VIOLET};
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	margin-top: 3em;
	padding: 3em;
	font-family: Inconsolata Regular;
	color: ${VIOLET};
`;

const StyledGrid = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;

	#left {
	}

	#right {
		display: flex;
		flex-direction: column;
		text-align: right;
	}
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


