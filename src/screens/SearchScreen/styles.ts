import { StyleSheet } from "react-native"
import { Theme } from "../../theme/dark"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		main: {
			paddingTop: theme.spacings.s6x,
			gap: theme.spacings.s7x,
		},
		movieListContianer: {
			flex: 1,
		},
	})
