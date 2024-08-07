import { StyleSheet } from "react-native"
import { theme } from "../../theme/theme"

export const styles = StyleSheet.create({
	tabBarContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",

		backgroundColor: theme.colors.black85,
		borderTopWidth: 0,
		elevation: 0,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		paddingTop: theme.spacings.s7x,
		paddingBottom: theme.spacings.s8x + theme.spacings.s2x,
	},
})
