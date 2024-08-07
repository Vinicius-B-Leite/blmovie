import { allIcons } from "."
import { dark } from "../../theme/dark"

export type IconProps = IconBaseProps & {
	name: keyof typeof allIcons
}

export type IconBaseProps = {
	size: number
	color?: keyof typeof dark.colors
}
