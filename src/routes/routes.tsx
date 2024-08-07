import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen, SettingsScreen } from "../screens"

import { TabBar } from "../components/TabBar"

import { Icon } from "../components/Icon"
import { dark } from "../theme/dark"

const Tab = createBottomTabNavigator()

export function Routes() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			tabBar={TabBar}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, focused, size }) => (
						<Icon
							name="home"
							size={24}
							color={focused ? "text" : "darkText"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={SettingsScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, focused, size }) => (
						<Icon
							name="search"
							size={24}
							color={focused ? "text" : "darkText"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Favorite"
				component={SettingsScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({ color, focused, size }) => (
						<Icon
							name="favorite"
							size={24}
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
							size={24}
							color={focused ? "text" : "darkText"}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}
