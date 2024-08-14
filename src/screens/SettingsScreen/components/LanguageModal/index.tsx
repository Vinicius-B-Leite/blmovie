import { useAppTheme } from "@/hooks"
import { Modal, Pressable, TouchableOpacity, View } from "react-native"
import { createStyle } from "./styles"
import { Text } from "@/components"
import { Theme } from "@/theme"
import { BlurView } from "expo-blur"

type LanguageModalProps = {
	isVisible: boolean
	onRequestClose: () => void
	selectedLanguage: string
}
export function LanguageModal({
	isVisible,
	onRequestClose,
	selectedLanguage,
}: LanguageModalProps) {
	const { theme } = useAppTheme()
	const style = createStyle(theme)

	const Option = (props: { isSelected?: boolean; language: string }) => {
		const color: keyof Theme["colors"] = props.isSelected ? "contrast" : "text"
		return (
			<TouchableOpacity style={style.option}>
				<Text variant="paragraphSmall" color={color}>
					{props.language}
				</Text>

				<View style={[style.circle, { borderColor: theme.colors[color] }]}>
					<View
						style={[style.subCirle, { backgroundColor: theme.colors[color] }]}
					/>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<Modal
			transparent
			visible={isVisible}
			onRequestClose={onRequestClose}
			animationType="slide">
			<BlurView intensity={20} style={style.blurredBackground}>
				<Pressable onPress={onRequestClose} style={style.closeModal} />
				<View style={style.container}>
					<Text variant="titleMedium" style={style.title}>
						Escolha o idioma
					</Text>

					<Option
						isSelected={selectedLanguage === "pt-br"}
						language="Português"
					/>
					<Option isSelected={selectedLanguage === "es"} language="Espanhol" />
					<Option isSelected={selectedLanguage === "en"} language="Inglês" />
				</View>
			</BlurView>
		</Modal>
	)
}
