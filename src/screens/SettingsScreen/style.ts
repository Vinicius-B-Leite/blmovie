import { Theme } from "@/theme"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			paddingTop: theme.spacings.s5x,
			gap: theme.spacings.s11x,
		},
	})
