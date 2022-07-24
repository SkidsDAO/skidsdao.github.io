import styled from 'styled-components';

export default function ScanLines() {
	return (
		<StyledScanLines/>
	);
}

const StyledScanLines = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 300;
  opacity: .6;
  will-change: opacity;
  animation: opacity 3s linear infinite;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, .5) 51%);
    background-size: 100% 4px;
    will-change: background, background-size;
    animation: scanlines .2s linear infinite;
`;
