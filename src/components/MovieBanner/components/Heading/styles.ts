import { Theme } from "@/theme"
import { responsiveSize } from "@/utils"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			flexDirection: "row",
			justifyContent: "space-between",
			paddingHorizontal: theme.spacings.s6x,
		},
		genericButton: {
			borderRadius: theme.borderRadius.full,
			justifyContent: "center",
			alignItems: "center",
			width: responsiveSize(40),
			height: responsiveSize(40),
			borderWidth: 2,
		},
	})
