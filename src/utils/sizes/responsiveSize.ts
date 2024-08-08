import { Dimensions } from "react-native"

const SCREEN_WIDTH = Dimensions.get("screen").width
const SCREEN_HEIGHT = Dimensions.get("screen").height

export const responsiveSize = (size: number): number => {
	const multiplier = 2.2
	return ((SCREEN_HEIGHT / SCREEN_WIDTH) * size) / multiplier
}
