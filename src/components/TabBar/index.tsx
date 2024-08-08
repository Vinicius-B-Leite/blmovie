import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { Platform, Text, TouchableOpacity, View } from "react-native"
import { BlurView } from "expo-blur"

import { dark } from "../../theme/dark"
import { createStyle, tabBarPaddingTop } from "./styles"
import { responsiveSize } from "../../utils/sizes/responsiveSize"
import { useAppTheme } from "../../hooks/useAppTheme"

type Props = BottomTabBarProps & { bottom: number }
export function TabBar({ state, descriptors, navigation, bottom }: Props) {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)
	return (
		<BlurView
			intensity={8}
			experimentalBlurMethod="dimezisBlurView"
			style={[
				styles.tabBarContainer,
				{ paddingBottom: Math.max(bottom, tabBarPaddingTop) },
			]}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]

				const icon = options.tabBarIcon
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name

				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params)
					}
				}

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					})
				}

				const defaultIconProps = {
					size: responsiveSize(24),
					focused: isFocused,
					color: isFocused ? theme.colors.text : theme.colors.darkText,
				}

				return (
					<TouchableOpacity
						key={index}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}>
						{icon && icon(defaultIconProps)}
					</TouchableOpacity>
				)
			})}
		</BlurView>
	)
}
