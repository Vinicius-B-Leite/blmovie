import { borderRadius } from "./borderRadius"
import { colors } from "./colors"
import { Theme } from "./dark"
import { spacings } from "./spacings"

export const light: Theme = {
	borderRadius,
	spacings,
	colors: {
		...colors,
		secondBg: colors.lightGrey,
		background: colors.white,
		text: colors.black,
		darkText: colors.grey,
		tabBarBg: colors.white85,
		contrast: colors.blue,
	},
	themeName: "light",
}
