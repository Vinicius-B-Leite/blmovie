import { Theme } from "@/theme"
import { responsiveFontSize, responsiveSize } from "@/utils"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
		},

		videoContainer: {
			flexDirection: "row",
			gap: theme.spacings.s4x,
			marginBottom: theme.spacings.s4x,
		},

		bannerContainer: {
			flex: 0.8,
			height: responsiveSize(100),
		},

		imageBanner: {
			width: "100%",
			height: "100%",
			borderRadius: theme.borderRadius.b1x,
			position: "relative",
		},

		playContainer: {
			backgroundColor: theme.colors.black60,
			width: responsiveSize(35),
			height: responsiveSize(35),
			borderRadius: theme.borderRadius.full,
			justifyContent: "center",
			alignItems: "center",
			position: "absolute",
			alignSelf: "center",
			top: "50%",
			transform: [{ translateY: -responsiveSize(35) / 2 }],
		},

		videoInfoContainer: {
			flex: 1.2,
		},
	})
