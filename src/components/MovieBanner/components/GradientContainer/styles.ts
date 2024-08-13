import { Theme } from "@/theme"
import { responsiveFontSize, responsiveSize } from "@/utils"
import { Dimensions, StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		gradientContainer: {
			justifyContent: "flex-end",
			height: responsiveSize(300),
		},
	})
