
export function glowText(color, intensity) {
	return `text-shadow: 0 0 ${intensity}px #FFFFFF, 0 0 ${intensity*2}px ${color}, 0 0 ${intensity*3}px ${color}, 0 0 ${intensity*10}px ${color};`;
}
