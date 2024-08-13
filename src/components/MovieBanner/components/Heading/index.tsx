import { Icon } from "@/components/Icon"
import { useAppTheme } from "@/hooks"
import { TouchableOpacity, View } from "react-native"
import { createStyle } from "./styles"
import { useSafeAreaInsets } from "react-native-safe-area-context"

type HeadingProps = {
	onPressBack: () => void
	onPressFavorite: () => void
}
export function Heading({ onPressBack, onPressFavorite }: HeadingProps) {
	const { theme } = useAppTheme()
	const { top } = useSafeAreaInsets()
	const styles = createStyle(theme)

	return (
		<View
			style={[styles.container, { paddingTop: Math.max(top, theme.spacings.s6x) }]}>
			<TouchableOpacity
				onPress={onPressBack}
				style={[
					styles.genericButton,
					{ borderColor: "transparent", backgroundColor: theme.colors.white50 },
				]}>
				<Icon name="left" size={14} color="white" />
			</TouchableOpacity>

			<TouchableOpacity
				onPress={onPressFavorite}
				style={[
					styles.genericButton,
					{
						borderColor: theme.colors.contrast,
						backgroundColor: theme.colors.background,
					},
				]}>
				<Icon name="favorite" size={20} color="contrast" />
			</TouchableOpacity>
		</View>
	)
}
