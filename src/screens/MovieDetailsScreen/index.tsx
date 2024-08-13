import { MovieBanner, Screen } from "@/components"
import { useAppTheme } from "@/hooks"

export function MovieDetailsScreen() {
	const { theme } = useAppTheme()
	// const styles = createStyle(theme)

	return (
		<Screen>
			<MovieBanner.ImageContainer>
				<MovieBanner.Heading />
				<MovieBanner.GradientContainer>
					<MovieBanner.Content>
						<MovieBanner.Average average={8.3} />
						<MovieBanner.MovieName name="Elemental" />
						<MovieBanner.Genders />
						<MovieBanner.Button onPress={() => {}}>Baixar</MovieBanner.Button>
					</MovieBanner.Content>
				</MovieBanner.GradientContainer>
			</MovieBanner.ImageContainer>
		</Screen>
	)
}
