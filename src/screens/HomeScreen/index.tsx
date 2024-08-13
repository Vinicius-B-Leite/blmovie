import { StatusBar } from "react-native"
import { createStyle } from "./styles"

import { useAppTheme } from "@/hooks"
import { Container, MovieBanner, Screen } from "@/components"
import { MovieSection } from "./components/MovieSection"
import { useHome } from "./useHome"

export function HomeScreen() {
	const { handleNavigateToMovieDetails } = useHome()
	const { theme } = useAppTheme()
	const styles = createStyle(theme)

	return (
		<Screen scrollable>
			<MovieBanner.ImageContainer>
				<MovieBanner.GradientContainer>
					<MovieBanner.Content>
						<MovieBanner.MovieName name="Avatar: O Caminho da Água" />
						<MovieBanner.Average average={4.5} />
						<MovieBanner.Button onPress={() => {}}>
							Saiba mais
						</MovieBanner.Button>
					</MovieBanner.Content>
				</MovieBanner.GradientContainer>
			</MovieBanner.ImageContainer>
			<Container style={styles.moviesContainer}>
				<MovieSection
					title="Melhor Avaliados"
					onMoviePress={handleNavigateToMovieDetails}
				/>
				<MovieSection title="Ação" onMoviePress={handleNavigateToMovieDetails} />
			</Container>
		</Screen>
	)
}
