import { Theme } from "@/theme"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		textContainer: {
			marginTop: theme.spacings.s8x,
			gap: theme.spacings.s2x,
			marginBottom: theme.spacings.s10x,
		},
	})
