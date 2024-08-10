import { PropsWithChildren } from "react"
import { ScrollView, View } from "react-native"

import { createStyle } from "./styles"
import { useAppTheme } from "@/hooks"

type ScreenProps = PropsWithChildren & {
	scrollable?: boolean
}
export function Screen({ children, scrollable }: ScreenProps) {
	const { theme } = useAppTheme()
	const style = createStyle(theme)

	const Wrapper = scrollable ? ScrollView : View

	return <Wrapper style={style.container}>{children}</Wrapper>
}
