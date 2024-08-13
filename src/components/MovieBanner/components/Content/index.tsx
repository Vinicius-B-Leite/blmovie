import { useAppTheme } from "@/hooks"
import { View } from "react-native"
import { createStyle } from "./styles"
import { PropsWithChildren } from "react"

type AverageProps = PropsWithChildren
export function Content({ children }: AverageProps) {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)
	return <View style={styles.container}>{children}</View>
}
