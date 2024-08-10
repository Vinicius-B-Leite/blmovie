import { borderRadius } from "./borderRadius"
import { colors } from "./colors"
import { spacings } from "./spacings"

export const dark = {
	borderRadius,
	spacings,
	colors: {
		...colors,
		background: colors.black,
		secondBg: colors.secondBlack,
		text: colors.white,
		darkText: colors.grey,
		tabBarBg: colors.black85,
		contrast: colors.blue,
	},
	themeName: "dark",
}

export type Theme = typeof dark
