import { Theme } from "@/theme"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			width: "100%",
			paddingHorizontal: theme.spacings.s6x,
			paddingBottom: theme.spacings.s6x,
		},
		goBackBtn: {
			paddingBottom: theme.spacings.s4x,
		},
		inputContianer: {
			backgroundColor: theme.colors.secondBg,
			width: "100%",
			flexDirection: "row",
			paddingHorizontal: theme.spacings.s5x,
			paddingVertical: theme.spacings.s3x,
			borderRadius: theme.borderRadius.full,
			alignItems: "center",
			gap: theme.spacings.s2x,
		},
		input: {
			color: theme.colors.text,
		},
	})
