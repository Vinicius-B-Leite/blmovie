import { ImageBackground, TouchableOpacity, View } from "react-native"

import { createStyle } from "./styles"
import { useAppTheme } from "@/hooks"
import React, { PropsWithChildren } from "react"
import { getColors } from "react-native-image-colors"

type ImageContainerProps = PropsWithChildren
export function ImageContainer({ children }: ImageContainerProps) {
	const { theme, updateContrastColor } = useAppTheme()

	const hasMoreThanOneChild = Array.isArray(children) && children.length > 1
	const styles = createStyle(theme, hasMoreThanOneChild ? "space-between" : "flex-end")

	const url = require("../../../../assets/avatar.png")
	React.useEffect(() => {
		getColors(url, {
			fallback: "#228B22",
			cache: true,
			key: url,
		}).then((colors) => {
			updateContrastColor(
				colors.platform === "ios" ? colors.primary : colors.vibrant
			)
		})
	}, [])

	return (
		<ImageBackground source={url} style={styles.image}>
			{children}
		</ImageBackground>
	)
}
