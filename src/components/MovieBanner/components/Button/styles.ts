import { Theme } from "@/theme"
import { responsiveSize } from "@/utils"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			backgroundColor: theme.colors.contrast,
			width: responsiveSize(140),
			paddingVertical: theme.spacings.s2x,
			borderRadius: theme.borderRadius.full,
			alignSelf: "flex-start",
			alignItems: "center",
			marginTop: theme.spacings.s4x,
		},
	})
