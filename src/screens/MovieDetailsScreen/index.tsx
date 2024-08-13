import { Container, MovieBanner, Screen, Text } from "@/components"
import { useAppTheme } from "@/hooks"
import { useMovieDetails } from "./useMovieDetails"
import { View } from "react-native"
import { createStyle } from "./styles"
import { useState } from "react"
import { VideosTab } from "./components/VideosTab"
import { TabBar } from "./components/TabBar"

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "#673ab7" }} />

export function MovieDetailsScreen() {
	const { handleGoBack } = useMovieDetails()
	const { theme } = useAppTheme()
	const styles = createStyle(theme)

	const [index, setIndex] = useState(0)

	return (
		<Screen scrollable>
			<MovieBanner.ImageContainer>
				<MovieBanner.Heading
					onPressBack={handleGoBack}
					onPressFavorite={() => {}}
				/>
				<MovieBanner.GradientContainer>
					<MovieBanner.Content>
						<MovieBanner.Average average={8.3} />
						<MovieBanner.MovieName name="Elemental" />
						<MovieBanner.Genders />
						<MovieBanner.Button onPress={() => {}}>Baixar</MovieBanner.Button>
					</MovieBanner.Content>
				</MovieBanner.GradientContainer>
			</MovieBanner.ImageContainer>

			<Container>
				<View style={styles.textContainer}>
					<Text variant="paragraphMedium">Movie Details Screen</Text>
					<Text variant="paragraphSmall">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
						facere facilis adipisci assumenda. Saepe minus, ex modi adipisci
						et similique possimus, officiis, sint dignissimos beatae dicta
						corrupti. Culpa, fuga quos.
					</Text>
				</View>

				<TabBar
					activeIndex={index}
					FirstRoute={VideosTab}
					onChangeTab={setIndex}
					SecondRoute={SecondRoute}
				/>
			</Container>
		</Screen>
	)
}
