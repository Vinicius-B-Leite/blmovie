import { Theme } from "@/theme"
import { responsiveSize } from "@/utils"
import { Dimensions, StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		closeModal: {
			position: "absolute",
			right: 0,
			top: 0,
			bottom: 0,
			left: 0,
			width: Dimensions.get("window").width,
			height: Dimensions.get("window").height,
			zIndex: 1,
		},
		blurredBackground: {
			flex: 1,
			backgroundColor: theme.colors.black85,
		},
		container: {
			backgroundColor: theme.colors.secondBg,
			height: "50%",
			width: "100%",
			position: "absolute",
			zIndex: 2,
			bottom: 0,
			left: 0,
			right: 0,
			borderTopLeftRadius: theme.borderRadius["b1.5x"],
			borderTopRightRadius: theme.borderRadius["b1.5x"],
			paddingTop: theme.spacings.s6x,
			paddingHorizontal: theme.spacings.s6x,
		},

		title: {
			textAlign: "center",
			marginBottom: theme.spacings.s5x,
		},

		option: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: theme.spacings.s4x,
		},

		circle: {
			width: responsiveSize(35),
			height: responsiveSize(35),
			borderRadius: theme.borderRadius.full,
			borderWidth: responsiveSize(3),
			justifyContent: "center",
			alignItems: "center",
		},

		subCirle: {
			width: responsiveSize(18),
			height: responsiveSize(18),
			borderRadius: theme.borderRadius.full,
		},
	})
