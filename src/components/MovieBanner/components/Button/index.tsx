import { Text } from "@/components/Text"
import { useAppTheme } from "@/hooks"
import { TouchableOpacity } from "react-native"
import { createStyle } from "./styles"
import { PropsWithChildren } from "react"

type ButtonProps = PropsWithChildren & {
	onPress: () => void
}
export function Button({ onPress, children }: ButtonProps) {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text variant="paragraphSmall">{children}</Text>
		</TouchableOpacity>
	)
}
