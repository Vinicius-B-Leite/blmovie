import { useNavigation } from "@react-navigation/native"

export function useMovieDetails() {
	const navigation = useNavigation()

	const handleGoBack = () => {
		navigation.goBack()
	}

	return {
		handleGoBack,
	}
}
