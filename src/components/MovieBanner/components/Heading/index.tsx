import { Icon } from "@/components/Icon"
import { useAppTheme } from "@/hooks"
import { TouchableOpacity, View } from "react-native"
import { createStyle } from "./styles"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export function Heading() {
	const { theme } = useAppTheme()
	const { top } = useSafeAreaInsets()
	const styles = createStyle(theme)

	return (
		<View
			style={[styles.container, { paddingTop: Math.max(top, theme.spacings.s6x) }]}>
			<TouchableOpacity
				style={[
					styles.genericButton,
					{ borderColor: "transparent", backgroundColor: theme.colors.white50 },
				]}>
				<Icon name="left" size={14} color="white" />
			</TouchableOpacity>

			<TouchableOpacity
				style={[
					styles.genericButton,
					{ borderColor: "contrast", backgroundColor: theme.colors.black60 },
				]}>
				<Icon name="favorite" size={24} color="contrast" />
			</TouchableOpacity>
		</View>
	)
}
