import { Theme } from "@/theme"
import { StyleSheet } from "react-native"

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
