import { Text } from "@/components/Text"
import { useAppTheme } from "@/hooks"
import { View } from "react-native"
import { createStyle } from "./styles"
import { Icon } from "@/components/Icon"

type AverageProps = {
	average: number
}
export function Average({ average }: AverageProps) {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)
	return (
		<View style={styles.averageContainer}>
			<Icon name="star" size={20} color="orange" />
			<Text variant="paragraphSmall" color="orange">
				{average}
			</Text>
		</View>
	)
}
