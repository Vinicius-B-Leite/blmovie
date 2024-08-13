import { useAppTheme } from "@/hooks"

import { responsiveSize } from "../../utils/sizes/responsiveSize"
import { IconProps } from "./type"
import {
	FavoriteIcon,
	GoBackIcon,
	HomeIcon,
	LanguageIcon,
	MoonIcon,
	SearchIcon,
	SettingsIcon,
	StarIcon,
} from "@/assets/icons"
import { LeftIcon } from "@/assets/icons/LeftIcon"

export function Icon({ name, size, color }: IconProps) {
	const IconWrapper = allIcons[name]
	const { theme } = useAppTheme()

	return <IconWrapper size={responsiveSize(size)} color={theme.colors[color]} />
}

export const allIcons = {
	star: StarIcon,
	home: HomeIcon,
	search: SearchIcon,
	settings: SettingsIcon,
	favorite: FavoriteIcon,
	goBack: GoBackIcon,
	moon: MoonIcon,
	language: LanguageIcon,
	left: LeftIcon,
}
