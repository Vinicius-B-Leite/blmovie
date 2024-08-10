import { FlatList, Image, Pressable, TouchableOpacity, View } from "react-native"

import { createStyle } from "./styles"
import { useAppTheme } from "@/hooks"
import { Text } from "@/components"

type MovieSectionProps = {
	title: string
}
export function MovieSection({ title }: MovieSectionProps) {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)

	return (
		<View>
			<View style={styles.moviesTitleContainer}>
				<Text variant="titleSmall">{title}</Text>
				<TouchableOpacity>
					<Text variant="paragraphSmall" color="blue">
						Ver todos
					</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={[
					{ banner: require("../../../../assets/avatar.png"), id: 1 },
					{ banner: require("../../../../assets/avatar.png"), id: 2 },
					{ banner: require("../../../../assets/avatar.png"), id: 3 },
				]}
				horizontal
				renderItem={({ item }) => (
					<Pressable style={undefined}>
						<Image source={item.banner} style={styles.movieItemBanner} />
					</Pressable>
				)}
				ItemSeparatorComponent={() => (
					<View style={{ width: theme.spacings.s5x }} />
				)}
			/>
		</View>
	)
}
