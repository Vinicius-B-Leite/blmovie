import { PropsWithChildren } from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { createStyle } from "./styles"
import { useAppTheme } from "../../hooks/useAppTheme"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { tabBarPaddingTop, tabBarSize } from "../TabBar/styles"

type ContainerProps = PropsWithChildren & {
	style?: Omit<ViewStyle, "marginTop" | "paddingTop"> & {
		paddingTop?: number
		marginTop?: number
	}
}
export function Container({ children, style: styleProp }: ContainerProps) {
	const { theme } = useAppTheme()
	const { bottom } = useSafeAreaInsets()
	const style = createStyle(theme)
	const stylePropsHasPaddingTop = styleProp?.paddingTop || styleProp?.marginTop || 0
	const paddingBottom =
		tabBarSize + Math.max(bottom, tabBarPaddingTop) + stylePropsHasPaddingTop

	return (
		<View
			style={[
				styleProp,
				style.container,
				{
					paddingBottom: paddingBottom,
				},
			]}>
			{children}
		</View>
	)
}
