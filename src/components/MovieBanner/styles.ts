import { Theme } from "@/theme"
import { responsiveFontSize, responsiveSize } from "@/utils"
import { Dimensions, StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		image: {
			width: "100%",
			height: Dimensions.get("screen").height * 0.5,
			justifyContent: "flex-end",
		},
		gradientContainer: {
			justifyContent: "flex-end",
			height: responsiveSize(300),
		},
		bannerInfo: {
			paddingHorizontal: theme.spacings.s6x,
		},
		movieName: {
			fontSize: responsiveFontSize(21),
			color: theme.colors.text,
		},
		averageContainer: {
			flexDirection: "row",
			alignItems: "center",
			gap: theme.spacings.s2x,
			marginBottom: theme.spacings.s4x,
		},
		average: {
			fontSize: responsiveFontSize(14),
			color: theme.colors.orange,
		},
		seeMoreBtn: {
			backgroundColor: theme.colors.contrast,
			paddingHorizontal: theme.spacings.s5x,
			paddingVertical: theme.spacings.s2x,
			borderRadius: theme.borderRadius.full,
			alignSelf: "flex-start",
			alignItems: "center",
		},
	})
