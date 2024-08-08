import { ImageBackground, TouchableOpacity, View } from "react-native"
import { theme } from "../../theme/theme"
import { Text } from "../Text"
import { Icon } from "../Icon"
import { styles } from "./styles"
import { LinearGradient } from "expo-linear-gradient"

export function MovieBanner() {
	return (
		<ImageBackground source={require("../../assets/avatar.png")} style={styles.image}>
			<LinearGradient
				colors={["rgba(0, 0, 0, 0)", theme.colors.black60, theme.colors.black]}
				style={styles.gradientContainer}>
				<View style={styles.bannerInfo}>
					<Text variant="paragraphLarge">Avatar: O Caminho da Água</Text>
					<View style={styles.averageContainer}>
						<Icon name="star" size={20} color="orange" />
						<Text variant="paragraphSmall" color="orange">
							7
						</Text>
					</View>
					<TouchableOpacity style={styles.seeMoreBtn}>
						<Text variant="paragraphSmall">Saiba mais</Text>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</ImageBackground>
	)
}
