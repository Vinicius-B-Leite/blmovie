import { ImageBackground, TouchableOpacity, View } from "react-native"

import { Text } from "../Text"
import { Icon } from "../Icon"
import { LinearGradient } from "expo-linear-gradient"

import { createStyle } from "./styles"
import { useAppTheme } from "@/hooks"
import React from "react"
import { getColors } from "react-native-image-colors"

export function MovieBanner() {
	const { toggle, theme, updateContrastColor } = useAppTheme()
	const styles = createStyle(theme)

	React.useEffect(() => {
		const url = require("../../assets/avatar.png")

		getColors(url, {
			fallback: "#228B22",
			cache: true,
			key: url,
		}).then((colors) => {
			updateContrastColor(
				colors.platform === "ios" ? colors.primary : colors.vibrant
			)
		})
	}, [])

	return (
		<ImageBackground source={require("../../assets/avatar.png")} style={styles.image}>
			<LinearGradient
				colors={[
					"rgba(0, 0, 0, 0)",
					theme.colors.black60,
					theme.colors.background,
				]}
				style={styles.gradientContainer}>
				<View style={styles.bannerInfo}>
					<Text variant="paragraphLarge">Avatar: O Caminho da Água</Text>
					<View style={styles.averageContainer}>
						<Icon name="star" size={20} color="orange" />
						<Text variant="paragraphSmall" color="orange">
							7
						</Text>
					</View>
					<TouchableOpacity onPress={toggle} style={styles.seeMoreBtn}>
						<Text variant="paragraphSmall">Saiba mais</Text>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</ImageBackground>
	)
}
