import { FavoriteIcon } from "../../assets/icons/FavoriteIcon"
import { HomeIcon } from "../../assets/icons/HomeIcon"
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
}
