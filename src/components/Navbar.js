import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { VIOLET, PURPLE, VOID, BLUE, PINK, WHITE } from '../colors';

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
				<StyledLogo to="/"><span>Skids</span>DAO</StyledLogo>
				<span className="material-icons nav-link" onClick={toggle}>menu</span>
			</StyledVisibleNav>
			<StyledHiddenNav height={height}>
				<StyledLink className="nav-link" to="/">Home</StyledLink>
				<StyledLink className="nav-link" to="/">Whitepaper</StyledLink>
				<StyledLink className="nav-link" to="/">About</StyledLink>
				<StyledLink className="nav-link" to="/">Contact</StyledLink>
			</StyledHiddenNav>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	box-sizing: border-box;
	padding: 0 2vw;
`;

const StyledVisibleNav = styled.div`
	font-family: Inconsolata Regular;

	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.nav-link {
		color: ${VIOLET};
		&:hover {
			color: ${WHITE};
			cursor: pointer;
		}
	}
`;

const StyledHiddenNav = styled.div`
	font-family: Inconsolata Regular;

	background-color: ${BLUE};
	width: 100vw;
	display: flex;
	justify-content: center; align-items: center;
	overflow: hidden;
	height: ${props => props.height}px;
	transition: height;
	transition-duration 0.5s;
	transition-timing-fucntion: ease-in-out;
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
		color: ${BLUE};
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
