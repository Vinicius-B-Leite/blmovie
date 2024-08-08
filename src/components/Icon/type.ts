import { allIcons } from "."
import { dark } from "../../theme/dark"

export type IconProps = IconBaseProps & {
	name: keyof typeof allIcons
	color: keyof typeof dark.colors
}

export type IconBaseProps = {
	size: number
	color: string
}
