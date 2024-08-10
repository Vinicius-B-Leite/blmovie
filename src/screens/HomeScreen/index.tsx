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
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor="transparent"
			/>
			<MovieBanner />
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
