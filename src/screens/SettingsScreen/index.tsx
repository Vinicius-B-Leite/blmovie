import { createStyle } from "./style"
import { SettingOption } from "./components/SettingOption"
import { Switch, View } from "react-native"
import { useAppTheme } from "@/hooks"
import { Container, GradientHeader, Screen, Text } from "@/components"

export function SettingsScreen() {
	const { theme, toggle } = useAppTheme()
	const style = createStyle(theme)

	return (
		<Screen scrollable>
			<GradientHeader goBack={() => {}} title="Configurações" />

			<Container style={style.container}>
				<Text variant="titleMedium">Geral</Text>

				<View>
					<SettingOption
						title="Tema escuro"
						leftIcon={{
							color: "text",
							size: 30,
							name: "moon",
						}}
						onPress={() => {}}
						rightComponent={
							<Switch
								onChange={toggle}
								value={theme.themeName === "dark"}
								thumbColor={theme.colors.blue}
								trackColor={{
									false: theme.colors.secondBg,
									true: theme.colors.secondBg,
								}}
							/>
						}
					/>
					<SettingOption
						title="Idioma"
						leftIcon={{
							color: "text",
							size: 30,
							name: "language",
						}}
						onPress={() => {}}
						rightComponent={
							<View>
								<Text variant="paragraphSmall">pt-br</Text>
							</View>
						}
					/>
				</View>
			</Container>
		</Screen>
	)
}
