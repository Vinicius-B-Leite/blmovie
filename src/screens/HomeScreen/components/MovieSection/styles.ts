import { Theme } from "@/theme"
import { responsiveFontSize, responsiveSize } from "@/utils"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		moviesTitleContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginBottom: theme.spacings.s3x,
		},

		moviesSectionRedirect: {
			color: theme.colors.contrast,
			fontSize: responsiveFontSize(14),
		},
		movieItemBanner: {
			borderRadius: theme.borderRadius["b1.5x"],
			width: responsiveSize(150),
			height: responsiveSize(250),
		},
	})
