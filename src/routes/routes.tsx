import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, TabBar, tabBarIconSize } from "@/components"
import {
	FavoriteScreen,
	HomeScreen,
	MovieDetailsScreen,
	SearchScreen,
	SettingsScreen,
} from "@/screens"
import { RoutesTypes } from "./types"

const Tab = createBottomTabNavigator<RoutesTypes>()

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
			<Tab.Screen
				name="MovieDetails"
				component={MovieDetailsScreen}
				options={{
					tabBarShowLabel: false,
					tabBarButton: () => null,
				}}
			/>
		</Tab.Navigator>
	)
}
