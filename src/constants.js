import { createGlobalStyle } from 'styled-components';
import { VOID } from './colors';

export const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${VOID};
		// animation: noise 1s infinite alternate;
		// background-image: url("assets/images/glitch-effect-black-background.jpg");
		// background-image: url("assets/images/noise-background.jpg");
	}

	/* Animations */
	@keyframes noise {
		0%, 100% {background-position: 0 0;}
		10% {background-position: -5% -10%;}
		20% {background-position: -15% 5%;}
		30% {background-position: 7% -25%;}
		40% {background-position: 20% 25%;}
		50% {background-position: -25% 10%;}
		60% {background-position: 15% 5%;}
		70% {background-position: 0 15%;}
		80% {background-position: 25% 35%;}
		90% {background-position: -10% 10%;}
	}

	@keyframes opacity {
		0% {opacity: .6;}
		20% {opacity:.3;}
		35% {opacity:.5;}
		50% {opacity:.8;}
		60% {opacity:.4;}
		80% {opacity:.7;}
		100% {opacity:.6;}
	}

	@keyframes scanlines {
		from {
			background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, .5) 51%);
			background-size: 100% 4px;
		}
		to {
			background: linear-gradient(to bottom, rgba(0, 0, 0, .5) 50%, transparent 51%);
			background-size: 100% 4px;
		}
	}

	@keyframes rgbText {
		0% {
			text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 1px rgba(251, 0, 231, 0.8), 0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8), 0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
		}
		25% {
			text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 1px rgba(251, 0, 231, 0.8), 0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8), 0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
		}
		45% {
			text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 5px 0 1px rgba(251, 0, 231, 0.8), 0 5px 1px rgba(0, 233, 235, 0.8), -5px 0 1px rgba(0, 242, 14, 0.8), 0 -5px 1px rgba(244, 45, 0, 0.8), 5px 0 1px rgba(59, 0, 226, 0.8);
		}
		50% {
			text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), -5px 0 1px rgba(251, 0, 231, 0.8), 0 -5px 1px rgba(0, 233, 235, 0.8), 5px 0 1px rgba(0, 242, 14, 0.8), 0 5px 1px rgba(244, 45, 0, 0.8), -5px 0 1px rgba(59, 0, 226, 0.8);
		}
		55% {
			text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 0px 0 3px rgba(251, 0, 231, 0.8), 0 0px 3px rgba(0, 233, 235, 0.8), 0px 0 3px rgba(0, 242, 14, 0.8), 0 0px 3px rgba(244, 45, 0, 0.8), 0px 0 3px rgba(59, 0, 226, 0.8);
		}
		90% {
			text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), -5px 0 1px rgba(251, 0, 231, 0.8), 0 5px 1px rgba(0, 233, 235, 0.8), 5px 0 1px rgba(0, 242, 14, 0.8), 0 -5px 1px rgba(244, 45, 0, 0.8), 5px 0 1px rgba(59, 0, 226, 0.8);
		}
		100% {
			text-shadow: -1px 1px 8px rgba(255, 255, 255, 0.6), 1px -1px 8px rgba(255, 255, 235, 0.7), 5px 0 1px rgba(251, 0, 231, 0.8), 0 -5px 1px rgba(0, 233, 235, 0.8), -5px 0 1px rgba(0, 242, 14, 0.8), 0 5px 1px rgba(244, 45, 0, 0.8), -5px 0 1px rgba(59, 0, 226, 0.8);
		}
	}

	@keyframes type {
		0%, 19% {opacity:0;}
		20%, 100% {opacity:1;}
	}
`;
