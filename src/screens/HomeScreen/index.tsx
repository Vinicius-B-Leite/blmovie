import {
	FlatList,
	Image,
	ImageBackground,
	Platform,
	Pressable,
	ScrollView,
	StatusBar,
	TouchableOpacity,
	View,
} from "react-native"
import { createStyle } from "./styles"

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { tabBarPaddingTop, tabBarSize } from "../../components/TabBar/styles"

import { MovieSection } from "./components/MovieSection"
import { MovieBanner } from "../../components/MovieBanner"
import { useAppTheme } from "../../hooks/useAppTheme"

export function HomeScreen() {
	const { bottom } = useSafeAreaInsets()
	const { theme } = useAppTheme()

	const styles = createStyle(theme)
	return (
		<ScrollView style={[styles.container]}>
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor="transparent"
			/>
			<MovieBanner />
			<View
				style={[
					styles.moviesContainer,
					{
						paddingBottom:
							tabBarSize +
							Math.max(bottom, tabBarPaddingTop) +
							theme.spacings.s13x,
					},
				]}>
				<MovieSection title="Melhor Avaliados" />
				<MovieSection title="Ação" />
			</View>
		</ScrollView>
	)
}
