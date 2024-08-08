import { StyleSheet } from "react-native"
import { theme } from "../../../../theme/theme"
import { responsiveFontSize } from "../../../../utils/sizes/responsiveFontSize"
import { responsiveSize } from "../../../../utils/sizes/responsiveSize"
import { Theme } from "../../../../theme/dark"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		moviesTitleContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginBottom: theme.spacings.s3x,
		},

		moviesSectionRedirect: {
			color: theme.colors.blue,
			fontSize: responsiveFontSize(14),
		},
		movieItemBanner: {
			borderRadius: theme.borderRadius["b1.5x"],
			width: responsiveSize(150),
			height: responsiveSize(250),
		},
	})
