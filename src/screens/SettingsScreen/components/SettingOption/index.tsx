import { Pressable, View } from "react-native"
import { useAppTheme } from "../../../../hooks/useAppTheme"
import { createStyle } from "./styles"
import { IconProps } from "../../../../components/Icon/type"
import { Icon } from "../../../../components/Icon"
import { Text } from "../../../../components/Text"

type SettingOptionProps = {
	title: string
	onPress: () => void
	leftIcon: IconProps
	rightComponent: React.JSX.Element
}

export function SettingOption({
	title,
	onPress,
	leftIcon,
	rightComponent,
}: SettingOptionProps) {
	const { theme } = useAppTheme()
	const style = createStyle(theme)
	return (
		<Pressable style={style.container}>
			<View style={style.left}>
				<Icon {...leftIcon} />
				<Text variant="paragraphMedium">{title}</Text>
			</View>
			{rightComponent}
		</Pressable>
	)
}
