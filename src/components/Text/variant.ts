import { responsiveFontSize } from "@/utils"
import { StyleProp, TextStyle } from "react-native"

const textsKeys = {
	titleLarge: "titleLarge",
	titleMedium: "titleMedium",
	titleSmall: "titleSmall",
	paragraphLarge: "paragraphLarge",
	paragraphMedium: "paragraphMedium",
	paragraphSmall: "paragraphSmall",
	paragraphExtraSmall: "paragraphExtraSmall",
}

export type TextVariant = keyof typeof textsKeys
export const textVariant: Record<TextVariant, StyleProp<TextStyle>> = {
	titleLarge: {
		fontSize: responsiveFontSize(26),
		fontWeight: "bold",
	},
	titleMedium: {
		fontSize: responsiveFontSize(22),
		fontWeight: "bold",
	},
	titleSmall: {
		fontSize: responsiveFontSize(18),
		fontWeight: "bold",
	},
	paragraphLarge: {
		fontSize: responsiveFontSize(21),
	},
	paragraphMedium: {
		fontSize: responsiveFontSize(18),
	},
	paragraphSmall: {
		fontSize: responsiveFontSize(14),
	},
	paragraphExtraSmall: {
		fontSize: responsiveFontSize(8),
	},
}
