import { StyleSheet } from "react-native"
import { theme } from "../../theme/theme"
import { responsiveSize } from "../../utils/sizes/responsiveSize"

export const tabBarPaddingTop = theme.spacings.s3x

export const tabBarIconSize = 24
export const tabBarSize = tabBarPaddingTop + tabBarIconSize

export const styles = StyleSheet.create({
	tabBarContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		backgroundColor: theme.colors.black85,
		borderTopWidth: 0,
		elevation: 0,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		paddingTop: tabBarPaddingTop,
	},
})
