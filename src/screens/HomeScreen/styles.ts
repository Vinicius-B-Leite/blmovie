import { Theme } from "@/theme"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		moviesContainer: {
			marginTop: theme.spacings.s13x,
			gap: theme.spacings.s8x,
		},
	})
