import { Theme } from "@/theme"
import { responsiveSize } from "@/utils"
import { StyleSheet } from "react-native"

export const createStyle = (theme: Theme) =>
	StyleSheet.create({
		container: {
			flexDirection: "row",
			gap: theme.spacings.s4x,
		},
		actorAvatar: {
			height: responsiveSize(180),
			width: responsiveSize(140),
			borderRadius: theme.borderRadius.b1x,
			marginBottom: theme.spacings.s4x,
		},
		textContainer: {
			paddingTop: theme.spacings.s4x,
		},
	})
