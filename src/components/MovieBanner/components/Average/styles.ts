import { Theme } from "@/theme"
import { responsiveFontSize } from "@/utils"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		averageContainer: {
			flexDirection: "row",
			alignItems: "center",
			gap: theme.spacings.s2x,
		},
		average: {
			fontSize: responsiveFontSize(14),
			color: theme.colors.orange,
		},
	})
