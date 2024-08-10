import { LinearGradient } from "expo-linear-gradient"

import { createStyle } from "./style"
import { Pressable, TextInput, TouchableOpacity, View } from "react-native"
import { Icon } from "../Icon"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Text } from "../Text"
import { IconProps } from "../Icon/type"
import { textVariant } from "../Text/variant"
import { useRef } from "react"
import { useAppTheme } from "@/hooks"

type GradientHeaderProps = {
	title?: string
	input?: {
		placeholder: string
		value: string
		onChangeText: (text: string) => void
		leftIcon: IconProps
	}
	goBack: () => void
}

export function GradientHeader({ title, input, goBack }: GradientHeaderProps) {
	const { theme } = useAppTheme()
	const { top } = useSafeAreaInsets()
	const style = createStyle(theme)
	const inputRef = useRef<TextInput>(null)

	return (
		<LinearGradient
			colors={[theme.colors.black, theme.colors.blue]}
			start={[0, 1]}
			end={[1, 0]}
			style={[style.container, { paddingTop: theme.spacings.s5x + top }]}>
			<TouchableOpacity onPress={goBack} style={style.goBackBtn}>
				<Icon color="text" size={40} name="goBack" />
			</TouchableOpacity>

			{title && !input && <Text variant="titleMedium">{title}</Text>}
			{!title && input && (
				<Pressable
					style={style.inputContianer}
					onPress={() => inputRef?.current?.focus()}>
					<Icon
						name={input.leftIcon.name}
						color={input.leftIcon.color}
						size={input.leftIcon.size}
					/>
					<TextInput
						ref={inputRef}
						placeholder={input.placeholder}
						value={input.value}
						onChangeText={input.onChangeText}
						placeholderTextColor={theme.colors.text}
						style={[style.input, textVariant["paragraphMedium"]]}
					/>
				</Pressable>
			)}
		</LinearGradient>
	)
}
