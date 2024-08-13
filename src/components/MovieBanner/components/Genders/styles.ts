import { Theme } from "@/theme"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		genderListContainer: {
			marginTop: theme.spacings.s2x,
		},
		itemContainer: {
			borderWidth: 1,
			borderColor: theme.colors.contrast,
			paddingHorizontal: theme.spacings.s4x,
			paddingVertical: theme.spacings.s1x,
			borderRadius: theme.borderRadius.full,
		},
	})
