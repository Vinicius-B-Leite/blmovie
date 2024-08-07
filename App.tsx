import { NavigationContainer } from "@react-navigation/native"
import { Routes } from "./src/routes/routes"
import { HomeScreen } from "./src/screens"

export default function App() {
	return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
	)
}
