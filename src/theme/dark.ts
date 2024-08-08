import { theme } from "./theme"

export const dark = {
	...theme,
	colors: {
		...theme.colors,
		background: theme.colors.black,
		text: theme.colors.white,
		darkText: theme.colors.grey,
	},
}

export type Theme = typeof dark
