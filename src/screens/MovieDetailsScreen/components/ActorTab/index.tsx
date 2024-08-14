import { Text } from "@/components"
import { useAppTheme } from "@/hooks"
import { Image, View } from "react-native"
import { createStyle } from "./styles"

type ActorItem = {
	actorAvatar: string
	actorName: string
	caracterName: string
}

const data: ActorItem[] = [
	{
		actorAvatar: "https://github.com/Vinicius-B-Leite.png",
		actorName: "Chris Hemsworth",
		caracterName: "Thor",
	},
	{
		actorAvatar: "https://github.com/Vinicius-B-Leite.png",
		actorName: "Chris Hemsworth",
		caracterName: "Thor",
	},
	{
		actorAvatar: "https://github.com/Vinicius-B-Leite.png",
		actorName: "Chris Hemsworth",
		caracterName: "Thor",
	},
	{
		actorAvatar: "https://github.com/Vinicius-B-Leite.png",
		actorName: "Chris Hemsworth",
		caracterName: "Thor",
	},
]
export function ActorTab() {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)

	const ActorItem = ({ item }: { item: ActorItem }) => {
		return (
			<View style={styles.container}>
				<Image
					style={styles.actorAvatar}
					source={{
						uri: item.actorAvatar,
					}}
				/>
				<View style={styles.textContainer}>
					<Text variant="paragraphMedium">{item.caracterName}</Text>
					<Text variant="paragraphSmall">{item.actorName}</Text>
				</View>
			</View>
		)
	}

	return (
		<View>
			{data.map((item, index) => (
				<ActorItem key={index} item={item} />
			))}
		</View>
	)
}
