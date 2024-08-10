import { StatusBar } from "react-native"
import { createStyle } from "./styles"

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useAppTheme } from "@/hooks"
import { Container, MovieBanner, Screen } from "@/components"
import { MovieSection } from "./components/MovieSection"

export function HomeScreen() {
	const { bottom } = useSafeAreaInsets()
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
				<MovieSection title="Melhor Avaliados" />
				<MovieSection title="Ação" />
			</Container>
		</Screen>
	)
}
