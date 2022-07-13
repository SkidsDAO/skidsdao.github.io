import { VOID, VIOLET, WHITE } from '../colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*
 * @desc Skids-styled reusable and hover-responsive button
 */
const DEFAULT_BUTTON_TEXT = "Change my button text";
const DEFAULT_URL = "/";

export default function Button({ text, url }) {
	return (
		<Link to={url ? url : DEFAULT_URL}>
			<StyledButton className="nav-link">
				{ text ? text : DEFAULT_BUTTON_TEXT }
			</StyledButton>
		</Link>
	);
}

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

