import { RoutesTypes } from "@/routes/types"
import { NavigationProp, useNavigation } from "@react-navigation/native"

type Nav = NavigationProp<RoutesTypes>
export function useHome() {
	const navigation = useNavigation<Nav>()

	const handleNavigateToMovieDetails = (props: { id: string }) => {
		navigation.navigate("MovieDetails", {
			id: props.id,
		})
	}

	return {
		handleNavigateToMovieDetails,
	}
}
