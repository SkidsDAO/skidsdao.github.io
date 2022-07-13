import styled from 'styled-components';
import { WHITE } from '../colors';

/*
 * @desc Skids-styled reusable grid section
 */
const DEFAULT_COLUMNS = 1;
export default function Section({ children, columns }) {
	console.log('col', columns);
	return (
		<StyledSection className="body-text" cols={ columns ? columns : DEFAULT_COLUMNS }>	
			{ children }
		</StyledSection>
	);
}

const StyledSection = styled.section`
	color: ${WHITE};
	display: grid;
	grid-template-columns: repeat(${(props) => props.cols || DEFAULT_COLUMNS}, 1fr);
`;
