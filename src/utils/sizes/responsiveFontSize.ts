import { Dimensions, Platform, StatusBar } from "react-native"

export const SCREEN_WIDTH = Dimensions.get("screen").width
export const SCREEN_HEIGHT = Dimensions.get("screen").height

export const responsiveFontSize = (fontSize: number) => {
	const multiplier = 680
	const standardLength = SCREEN_WIDTH > SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT
	const offset =
		SCREEN_WIDTH > SCREEN_HEIGHT
			? 0
			: Platform.OS === "ios"
			? 78
			: StatusBar.currentHeight ?? 0
	const deviceHeight =
		Platform.OS === "android" ? standardLength - offset : standardLength
	const heightPercent = (fontSize * deviceHeight) / multiplier
	return Math.round(heightPercent)
}
