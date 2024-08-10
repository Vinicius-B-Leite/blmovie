import { FlatList, Image, View } from "react-native"
import { createStyle } from "./styles"
import { useAppTheme } from "@/hooks"
import { Container, GradientHeader, Screen, Text } from "@/components"
import { responsiveSize } from "@/utils"

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
export function SearchScreen() {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)

	return (
		<Screen>
			<GradientHeader
				goBack={() => {}}
				input={{
					placeholder: "Search",
					value: "",
					onChangeText: () => {},
					leftIcon: {
						color: "text",
						name: "search",
						size: 24,
					},
				}}
			/>
			<Container style={styles.main}>
				<Text variant="titleMedium">Search Screen</Text>
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
