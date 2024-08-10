import { StyleSheet } from "react-native"
import { Theme } from "../../theme/dark"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			paddingTop: theme.spacings.s6x,
		},
		movieListContianer: {
			flex: 1,
		},
	})
