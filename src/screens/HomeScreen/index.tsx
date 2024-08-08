import {
	FlatList,
	Image,
	ImageBackground,
	Platform,
	Pressable,
	ScrollView,
	StatusBar,
	Text,
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

export function HomeScreen() {
	const { bottom } = useSafeAreaInsets()
	return (
		<ScrollView style={[styles.container]}>
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor="transparent"
			/>
			<ImageBackground
				source={require("../../assets/avatar.png")}
				style={styles.image}>
				<LinearGradient
					colors={[
						"rgba(0, 0, 0, 0)",
						theme.colors.black60,
						theme.colors.black,
					]}
					style={styles.gradientContainer}>
					<View style={styles.bannerInfo}>
						<Text style={styles.movieName}>Avatar: O Caminho da Água</Text>
						<View style={styles.averageContainer}>
							<Icon name="star" size={20} color="orange" />
							<Text style={styles.average}>7</Text>
						</View>
						<TouchableOpacity style={styles.seeMoreBtn}>
							<Text style={styles.seeMoreLabel}>Saiba mais</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</ImageBackground>
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
				<View>
					<View style={styles.moviesTitleContainer}>
						<Text style={styles.moviesSectionTitle}>Mais Populares</Text>
						<TouchableOpacity>
							<Text style={styles.moviesSectionRedirect}>Ver todos</Text>
						</TouchableOpacity>
					</View>
					<FlatList
						data={[
							{ banner: require("../../assets/avatar.png"), id: 1 },
							{ banner: require("../../assets/avatar.png"), id: 2 },
							{ banner: require("../../assets/avatar.png"), id: 3 },
						]}
						horizontal
						renderItem={({ item }) => (
							<Pressable style={undefined}>
								<Image
									source={item.banner}
									style={styles.movieItemBanner}
								/>
							</Pressable>
						)}
						ItemSeparatorComponent={() => (
							<View style={{ width: theme.spacings.s5x }} />
						)}
					/>
				</View>

				<View>
					<View style={styles.moviesTitleContainer}>
						<Text style={styles.moviesSectionTitle}>Melhor Avaliados</Text>
						<TouchableOpacity>
							<Text style={styles.moviesSectionRedirect}>Ver todos</Text>
						</TouchableOpacity>
					</View>
					<FlatList
						data={[
							{ banner: require("../../assets/avatar.png"), id: 1 },
							{ banner: require("../../assets/avatar.png"), id: 2 },
							{ banner: require("../../assets/avatar.png"), id: 3 },
						]}
						horizontal
						renderItem={({ item }) => (
							<Pressable style={undefined}>
								<Image
									source={item.banner}
									style={styles.movieItemBanner}
								/>
							</Pressable>
						)}
						ItemSeparatorComponent={() => (
							<View style={{ width: theme.spacings.s5x }} />
						)}
					/>
				</View>
			</View>
		</ScrollView>
	)
}
