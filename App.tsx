import { NavigationContainer } from "@react-navigation/native"
import { Routes } from "./src/routes/routes"
import { HomeScreen } from "./src/screens"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ThemeProvider } from "./src/contexts/theme/ThemeContext"

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<NavigationContainer>
					<Routes />
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaProvider>
	)
}
