import { FavoriteIcon } from "../../assets/icons/FavoriteIcon"
import { GoBackIcon } from "../../assets/icons/GoBackIcon"
import { HomeIcon } from "../../assets/icons/HomeIcon"
import { LanguageIcon } from "../../assets/icons/LanguageIcon"
import { MoonIcon } from "../../assets/icons/MoonIcon"
import { SearchIcon } from "../../assets/icons/SearchIcon"
import { SettingsIcon } from "../../assets/icons/SettingsIcon"
import { StarIcon } from "../../assets/icons/StarIcon"
import { useAppTheme } from "../../hooks/useAppTheme"
import { responsiveSize } from "../../utils/sizes/responsiveSize"
import { IconProps } from "./type"

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
}
