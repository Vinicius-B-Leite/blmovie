import { Text as RNText } from "react-native"
import { textVariant, TextVariant } from "./variant"
import { Theme } from "@/theme"
import { useAppTheme } from "@/hooks"

type TextProps = React.PropsWithChildren & {
	variant: TextVariant
	color?: keyof Theme["colors"]
}
export function Text({ variant, children, color = "text" }: TextProps) {
	const { theme } = useAppTheme()
	return (
		<RNText style={[textVariant[variant], { color: theme.colors[color] }]}>
			{children}
		</RNText>
	)
}
