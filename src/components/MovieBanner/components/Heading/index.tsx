import { Icon } from "@/components/Icon"
import { useAppTheme } from "@/hooks"
import { TouchableOpacity, View } from "react-native"
import { createStyle } from "./styles"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Theme } from "@/theme"

type HeadingProps = {
	onPressBack: () => void
	onPressFavorite: () => void
	isFavorite?: boolean
}
export function Heading({
	onPressBack,
	onPressFavorite,
	isFavorite = false,
}: HeadingProps) {
	const { theme } = useAppTheme()
	const { top } = useSafeAreaInsets()
	const styles = createStyle(theme)

	const handleColorFavorite = () => {
		let backgroundColor: keyof Theme["colors"] = "black85"
		let borderColor: keyof Theme["colors"] = "contrast"
		let iconColor: keyof Theme["colors"] = "contrast"

		if (isFavorite) {
			backgroundColor = "contrast"
			borderColor = "text"
			iconColor = "text"
		}

		return { backgroundColor, borderColor, iconColor }
	}

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
						borderColor: theme.colors[handleColorFavorite().borderColor],
						backgroundColor:
							theme.colors[handleColorFavorite().backgroundColor],
					},
				]}>
				<Icon name="favorite" size={20} color={handleColorFavorite().iconColor} />
			</TouchableOpacity>
		</View>
	)
}
