import { StyleSheet } from "react-native"

import { Theme } from "@/theme"

export const createStyle = (theme: Theme, tabBarPaddingTop: number) =>
	StyleSheet.create({
		tabBarContainer: {
			flexDirection: "row",
			justifyContent: "space-evenly",
			alignItems: "center",
			backgroundColor: theme.colors.tabBarBg,
			borderTopWidth: 0,
			elevation: 0,
			position: "absolute",
			left: 0,
			right: 0,
			bottom: 0,
			paddingTop: tabBarPaddingTop,
		},
	})
