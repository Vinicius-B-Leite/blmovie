import { NavigationContainer } from "@react-navigation/native"
import { Routes } from "./src/routes/routes"
import { HomeScreen } from "./src/screens"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Routes />
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
