import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { Text, TouchableOpacity, View } from "react-native"
import { BlurView } from "expo-blur"
import { theme } from "../../theme/theme"
import { dark } from "../../theme/dark"
import { styles } from "./styles"

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	return (
		<BlurView intensity={8} style={styles.tabBarContainer}>
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
					size: 24,
					focused: isFocused,
					color: isFocused ? dark.colors.text : dark.colors.darkText,
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
