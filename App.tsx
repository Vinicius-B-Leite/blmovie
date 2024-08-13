import { NavigationContainer } from "@react-navigation/native"
import { Routes } from "./src/routes/routes"
import { HomeScreen } from "./src/screens"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ThemeProvider } from "./src/contexts/theme/ThemeContext"
import { StatusBar } from "react-native"

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<NavigationContainer>
					<StatusBar
						barStyle="light-content"
						translucent
						backgroundColor="transparent"
					/>
					<Routes />
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaProvider>
	)
}
