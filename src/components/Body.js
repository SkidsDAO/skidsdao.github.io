
import styled from 'styled-components';

/*
 * @desc Skids-styled reusable body (for holding all content responsively)
 */

export default function Body({ children }) {
	return(
			<StyledMain>
				<StyledBody>
					{ children }
				</StyledBody>
			</StyledMain>
	);
}

const StyledMain = styled.main`
	display: flex;
	justify-content: center;
`;

const StyledBody = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;

	@media (max-width: 768px) {
		width: 80%;
	}
`;
