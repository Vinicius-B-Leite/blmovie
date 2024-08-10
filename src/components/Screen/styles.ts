import { StyleSheet } from "react-native"
import { Theme } from "../../theme/dark"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.background,
		},
	})
