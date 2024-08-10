import { Theme } from "@/theme"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			borderBottomWidth: 1,
			borderBottomColor: theme.colors.secondBg,
			paddingBottom: theme.spacings.s4x,
			marginBottom: theme.spacings.s4x,
		},
		left: {
			flexDirection: "row",
			alignItems: "center",
			gap: theme.spacings.s3x,
		},
	})
