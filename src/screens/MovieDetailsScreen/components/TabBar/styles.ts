import { Theme } from "@/theme"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		heading: {
			marginBottom: theme.spacings.s4x,
			flexDirection: "row",
			justifyContent: "space-around",
			alignItems: "center",
			position: "relative",
			paddingBottom: theme.spacings.s2x,
		},
		indicator: {
			backgroundColor: theme.colors.darkText,
			height: 2,
			width: "100%",
			position: "absolute",
			bottom: 0,
			left: 0,
		},
		animatedIndicator: {
			backgroundColor: theme.colors.contrast,
			height: 2,
			width: "50%",
			position: "absolute",
			bottom: 0,
		},
	})
