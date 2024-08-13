import { useAppTheme } from "@/hooks"
import { createStyle } from "./styles"
import { FlatList, View } from "react-native"
import { Text } from "@/components/Text"
import { responsiveSize } from "@/utils"

export function Genders() {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)

	return (
		<View style={styles.genderListContainer}>
			<FlatList
				data={[
					"Ação",
					"Aventura",
					"Ficção Científica",
					"Fantasia",
					"Suspense",
					"Terror",
				]}
				keyExtractor={(item) => item}
				horizontal
				renderItem={({ item }) => (
					<View style={styles.itemContainer}>
						<Text variant="paragraphExtraSmall" color="contrast">
							{item}
						</Text>
					</View>
				)}
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => (
					<View style={{ width: responsiveSize(8) }} />
				)}
			/>
		</View>
	)
}
