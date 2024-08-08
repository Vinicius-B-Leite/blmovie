import { borderRadius } from "./borderRadius"
import { colors } from "./colors"
import { Theme } from "./dark"
import { spacings } from "./spacings"

export const light: Theme = {
	borderRadius,
	spacings,
	colors: {
		...colors,
		background: colors.white,
		text: colors.black,
		darkText: colors.grey,
		tabBarBg: colors.white85,
	},
	themeName: "light",
}
