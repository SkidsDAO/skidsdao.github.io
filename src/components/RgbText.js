
import styled from 'styled-components';

import { VIOLET, WHITE } from '../colors';

import Markdown from './Markdown';

export default function RgbText({ children }) {
	return (
		<>
			<StyledText>
				{children}
			</StyledText>
		</>
	);
}

const StyledText = styled.span`
	animation: rgbText 2s steps(9) 0s infinite alternate;
`;
