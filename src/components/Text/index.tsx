import { Text as RNText } from "react-native"
import { textVariant, TextVariant } from "./variant"
import { dark, Theme } from "../../theme/dark"

type TextProps = React.PropsWithChildren & {
	variant: TextVariant
	color?: keyof Theme["colors"]
}
export function Text({ variant, children, color = "text" }: TextProps) {
	return (
		<RNText style={[textVariant[variant], { color: dark.colors[color] }]}>
			{children}
		</RNText>
	)
}
