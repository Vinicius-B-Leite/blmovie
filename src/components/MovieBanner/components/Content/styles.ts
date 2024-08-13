import { Theme } from "@/theme"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			paddingHorizontal: theme.spacings.s6x,
		},
	})
