import { Dimensions, StyleSheet } from "react-native"
import { theme } from "../../theme/theme"
import { responsiveSize } from "../../utils/sizes/responsiveSize"
import { responsiveFontSize } from "../../utils/sizes/responsiveFontSize"
import { Theme } from "../../theme/dark"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		moviesContainer: {
			marginTop: theme.spacings.s13x,
			gap: theme.spacings.s8x,
		},
	})
