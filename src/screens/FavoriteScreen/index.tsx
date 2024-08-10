import { FlatList, Image, View } from "react-native"
import { Screen } from "../../components/Screen"
import { GradientHeader } from "../../components/GradientHeader"
import { useAppTheme } from "../../hooks/useAppTheme"
import { responsiveSize } from "../../utils/sizes/responsiveSize"
import { Container } from "../../components/Container"
import { createStyle } from "./styles"

const data = [
	{ banner: require("../../assets/avatar.png") },
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
	{
		banner: require("../../assets/avatar.png"),
	},
]

export function FavoriteScreen() {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)
	return (
		<Screen>
			<GradientHeader goBack={() => {}} title="Filmes Favoritos" />

			<Container style={styles.container}>
				<View style={styles.movieListContianer}>
					<FlatList
						data={data}
						numColumns={2}
						renderItem={({ item }) => (
							<Image
								source={item.banner}
								style={{
									height: responsiveSize(220),
									width: responsiveSize(160),
									borderRadius: theme.borderRadius.b1x,
								}}
							/>
						)}
						columnWrapperStyle={{
							gap: theme.spacings.s8x,
							justifyContent: "center",
						}}
						ItemSeparatorComponent={() => (
							<View style={{ height: theme.spacings.s8x }} />
						)}
					/>
				</View>
			</Container>
		</Screen>
	)
}
