import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FavoriteScreen, HomeScreen, SearchScreen, SettingsScreen } from "../screens"

import { TabBar } from "../components/TabBar"

import { Icon } from "../components/Icon"
import { dark } from "../theme/dark"
import { tabBarIconSize } from "../components/TabBar/styles"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const Tab = createBottomTabNavigator()

export function Routes() {
	const { bottom } = useSafeAreaInsets()
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			tabBar={(props) => <TabBar bottom={bottom} {...props} />}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, focused, size }) => (
						<Icon
							name="home"
							size={tabBarIconSize}
							color={focused ? "text" : "darkText"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, focused, size }) => (
						<Icon
							name="search"
							size={tabBarIconSize}
							color={focused ? "text" : "darkText"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Favorite"
				component={FavoriteScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, focused, size }) => (
						<Icon
							name="favorite"
							size={tabBarIconSize}
							color={focused ? "text" : "darkText"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, focused, size }) => (
						<Icon
							name="settings"
							size={tabBarIconSize}
							color={focused ? "text" : "darkText"}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}
