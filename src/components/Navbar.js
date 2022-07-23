import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { VOID, VIOLET, WHITE } from '../colors';

const openHeightInPx = 100;

export default function Navbar() {
	const [height, setHeight] = useState(0);

	const toggle = () => {
		if (height === 0) {
			setHeight(openHeightInPx);
		} else {
			setHeight(0);
		}
	};

	return (
		<StyledNav>
			<StyledVisibleNav>
				<StyledLeft>
					<StyledLogo to="/"><span>Skids</span>DAO</StyledLogo>
					<a className="nav-social-btn" href="https://twitter.com/SkidsDAO" target="_blank" rel="noreferrer noopener">
						<img src="assets/icons/twitter.svg" alt="Twitter Logo"/>
					</a>
					<a className="nav-social-btn" href="https://discord.com/invite/NHNRUKMCz2" target="_blank" rel="noreferrer noopener">
						<img src="assets/icons/discord.svg" alt="Discord Logo"/>
					</a>
				</StyledLeft>
				<span className="material-icons nav-link" onClick={toggle}>menu</span>
			</StyledVisibleNav>
			<StyledHiddenNav height={height}>
				<StyledLink className="nav-link" to="/">Home</StyledLink>
				<StyledLink className="nav-link" to="/about">About</StyledLink>
				<StyledLink className="nav-link" to="/blog">Blog</StyledLink>
			</StyledHiddenNav>
		</StyledNav>
	);
}

const StyledLeft = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	.nav-social-btn {
		margin-left: 1vw;
		img {
			height: 25px;
			transition: transform 0.1s ease-in-out;

			&:hover {
				transform: scale(1.2);
			}
		}
	}
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	box-sizing: border-box;
	padding: 0 5vw;

	@media (min-width: 768px) {
		padding: 0 2vw;
	}
`;

const StyledVisibleNav = styled.div`
	font-family: Inconsolata Regular;

	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.nav-link {
		color: ${VIOLET};
		transition: color;
		transition-duration: 0.1s;
		transition-timing-fucntion: ease-out;

		&:hover {
			color: ${WHITE};
		}
	}
`;

const StyledHiddenNav = styled.div`
	font-family: Inconsolata Regular;

	background-color: ${VIOLET};
	width: 100vw;
	display: flex;
	justify-content: center; align-items: center;
	overflow: hidden;
	height: ${props => props.height}px;
	transition: height;
	transition-duration 0.2s;
	transition-timing-function: ease-in-out;
`;

const StyledLogo = styled(Link)`
	font-family: Inconsolata Black;
	margin: 2vh 0;
	color: ${VIOLET};
	text-decoration: none;
	box-sizing: border-box;
	font-size: 2em;
	font-weight: bold;
	
	span {
		font-size: 1em;
		color: ${VIOLET};
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	margin: 0 2vw;
	color: ${VOID};

	&:hover {
		text-decoration: underline;
	}
`;

    // @media (max-width: 768px) {
    //   font-size: 50px;
    // }
    //
    // @media (max-width: 411px) {
    //   font-size: 34px;
    // }
