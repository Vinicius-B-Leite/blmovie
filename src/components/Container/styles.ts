import { StyleSheet } from "react-native"
import { Theme } from "../../theme/dark"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			paddingHorizontal: theme.spacings.s6x,
			flex: 1,
		},
	})
