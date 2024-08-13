import { Theme } from "@/theme"
import { responsiveFontSize, responsiveSize } from "@/utils"
import { Dimensions, StyleSheet, ViewStyle } from "react-native"

export const createStyle = (theme: Theme, justifyContent: ViewStyle["justifyContent"]) =>
	StyleSheet.create({
		image: {
			width: "100%",
			height: Dimensions.get("screen").height * 0.5,
			justifyContent: justifyContent,
		},
	})
