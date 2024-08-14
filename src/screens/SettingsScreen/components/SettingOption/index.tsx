import { Pressable, View } from "react-native"

import { createStyle } from "./styles"
import { Icon, IconProps, Text } from "@/components"
import { useAppTheme } from "@/hooks"

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
		<Pressable onPress={onPress} style={style.container}>
			<View style={style.left}>
				<Icon {...leftIcon} />
				<Text variant="paragraphMedium">{title}</Text>
			</View>
			{rightComponent}
		</Pressable>
	)
}
