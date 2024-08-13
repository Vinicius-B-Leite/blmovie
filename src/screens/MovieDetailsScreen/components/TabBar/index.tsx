import { useAppTheme } from "@/hooks"
import { createStyle } from "./styles"
import { Animated, Pressable, View } from "react-native"
import { Text } from "@/components"
import { useEffect, useRef, useState } from "react"

type TabBarProps = {
	activeIndex: number
	onChangeTab: (index: number) => void
	FirstRoute: () => JSX.Element
	SecondRoute: () => JSX.Element
}
export function TabBar({
	activeIndex,
	onChangeTab,
	FirstRoute,
	SecondRoute,
}: TabBarProps) {
	const { theme } = useAppTheme()
	const style = createStyle(theme)
	const [indicatorWidth, setIndicatorWidth] = useState(0)
	const animatedValue = useRef(new Animated.Value(0)).current

	const runAnimation = () => {
		Animated.timing(animatedValue, {
			toValue: activeIndex === 0 ? 0 : indicatorWidth,
			duration: 500,
			useNativeDriver: false,
		}).start()
	}

	useEffect(() => {
		runAnimation()
	}, [activeIndex])

	return (
		<View>
			<View style={style.heading}>
				<Pressable onPress={() => onChangeTab(0)}>
					<Text
						variant="paragraphMedium"
						color={activeIndex === 0 ? "contrast" : "darkText"}>
						Vídeos
					</Text>
				</Pressable>
				<Pressable onPress={() => onChangeTab(1)}>
					<Text
						variant="paragraphMedium"
						color={activeIndex === 1 ? "contrast" : "darkText"}>
						Elenco
					</Text>
				</Pressable>

				<View
					style={style.indicator}
					onLayout={(event) => {
						const { width } = event.nativeEvent.layout
						setIndicatorWidth(width / 2)
					}}
				/>

				<Animated.View
					style={[
						{
							left: animatedValue,
						},
						style.animatedIndicator,
					]}
				/>
			</View>

			<View>{activeIndex === 0 ? <FirstRoute /> : <SecondRoute />}</View>
		</View>
	)
}
