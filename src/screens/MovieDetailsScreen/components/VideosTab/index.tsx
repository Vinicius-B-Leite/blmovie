import * as WebBrowser from "expo-web-browser"
import { useAppTheme } from "@/hooks"
import {
	Image,
	ImageBackground,
	Linking,
	Pressable,
	TouchableOpacity,
	View,
} from "react-native"
import { createStyle } from "./style"
import { Icon, Text } from "@/components"
import { responsiveSize } from "@/utils"

type VideosItemProps = {
	index: number
	item: {
		banner: string
		link: string
		type: string
		title: string
		plataform: string
	}
}

const data = [
	{
		banner: "www.github.com/Vinicius-B-Leite.png",
		link: "www.youtube.com/watch?v=cAkf0KwyFxs",
		type: "Trailer",
		title: "Avatar sei la oq",
		plataform: "Youtube",
	},
	{
		banner: "www.github.com/Vinicius-B-Leite.png",
		link: "www.youtube.com/watch?v=cAkf0KwyFxs",
		type: "Trailer",
		title: "Avatar sei la oq",
		plataform: "Youtube",
	},
	{
		banner: "www.github.com/Vinicius-B-Leite.png",
		link: "www.youtube.com/watch?v=cAkf0KwyFxs",
		type: "Trailer",
		title: "Avatar sei la oq",
		plataform: "Youtube",
	},
	{
		banner: "www.github.com/Vinicius-B-Leite.png",
		link: "www.youtube.com/watch?v=cAkf0KwyFxs",
		type: "Trailer",
		title: "Avatar sei la oq",
		plataform: "Youtube",
	},
	{
		banner: "www.github.com/Vinicius-B-Leite.png",
		link: "www.youtube.com/watch?v=cAkf0KwyFxs",
		type: "Trailer",
		title: "Avatar sei la oq",
		plataform: "Youtube",
	},
]
export function VideosTab() {
	const { theme } = useAppTheme()
	const styles = createStyle(theme)

	const VideosItem = ({ index, item }: VideosItemProps) => {
		const handlePress = async () => {
			await WebBrowser.openBrowserAsync(item.link)
		}

		return (
			<TouchableOpacity onPress={handlePress} style={styles.videoContainer}>
				<View style={styles.bannerContainer}>
					<Image
						style={styles.imageBanner}
						source={require("../../../../assets/avatar.png")}></Image>
					<View style={styles.playContainer}>
						<Icon color="text" name="home" size={18} />
					</View>
				</View>

				<View style={styles.videoInfoContainer}>
					<Text variant="paragraphSmall">{item.type}</Text>
					<Text variant="paragraphSmall" textProps={{ numberOfLines: 2 }}>
						{item.title}
					</Text>
					<Text variant="paragraphSmall" color="grey">
						{item.plataform}
					</Text>
				</View>
			</TouchableOpacity>
		)
	}
	return (
		<View style={styles.container}>
			{data.map((item, index) => (
				<VideosItem item={item} index={index} />
			))}
		</View>
	)
}
