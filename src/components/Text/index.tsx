import { Text as RNText, TextProps as RNTextProps } from "react-native"
import { textVariant, TextVariant } from "./variant"
import { Theme } from "@/theme"
import { useAppTheme } from "@/hooks"

type TextProps = React.PropsWithChildren & {
	variant: TextVariant
	color?: keyof Theme["colors"]
	textProps?: RNTextProps
}
export function Text({ variant, children, color = "text", textProps }: TextProps) {
	const { theme } = useAppTheme()
	return (
		<RNText
			style={[textVariant[variant], { color: theme.colors[color] }]}
			{...textProps}>
			{children}
		</RNText>
	)
}
