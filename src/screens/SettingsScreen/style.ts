import { StyleSheet } from "react-native"
import { Theme } from "../../theme/dark"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			paddingTop: theme.spacings.s5x,
			gap: theme.spacings.s11x,
		},
	})
