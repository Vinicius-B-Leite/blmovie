import { Dimensions, StyleSheet } from "react-native"
import { theme } from "../../theme/theme"
import { responsiveSize } from "../../utils/sizes/responsiveSize"
import { responsiveFontSize } from "../../utils/sizes/responsiveFontSize"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.black,
	},
	moviesContainer: {
		paddingHorizontal: theme.spacings.s6x,
		marginTop: theme.spacings.s13x,
		gap: theme.spacings.s8x,
	},
})
