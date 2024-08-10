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
import { Container } from "../../components/Container"

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
			<Container style={styles.moviesContainer}>
				<MovieSection title="Melhor Avaliados" />
				<MovieSection title="Ação" />
			</Container>
		</ScrollView>
	)
}
