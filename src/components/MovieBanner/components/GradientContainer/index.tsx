import { Text } from "@/components/Text"
import { useAppTheme } from "@/hooks"
import { LinearGradient } from "expo-linear-gradient"
import { createStyle } from "./styles"
import { PropsWithChildren } from "react"

type GradientContainerProps = PropsWithChildren
export function GradientContainer({ children }: GradientContainerProps) {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)
	return (
		<LinearGradient
			colors={["rgba(0, 0, 0, 0)", theme.colors.black60, theme.colors.background]}
			style={styles.gradientContainer}>
			{children}
		</LinearGradient>
	)
}
