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
import { styles } from "./styles"
import { LinearGradient } from "expo-linear-gradient"
import { StarIcon } from "../../assets/icons/StarIcon"
import { theme } from "../../theme/theme"
import { Icon } from "../../components/Icon"

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { tabBarPaddingTop, tabBarSize } from "../../components/TabBar/styles"

import { MovieSection } from "./components/MovieSection"
import { MovieBanner } from "../../components/MovieBanner"

export function HomeScreen() {
	const { bottom } = useSafeAreaInsets()
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
