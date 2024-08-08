import { Path, Svg } from "react-native-svg"
import { IconBaseProps } from "../../components/Icon/type"
import { dark } from "../../theme/dark"

export function FavoriteIcon({ size = 20, color }: IconBaseProps) {
	const height = (size * 21) / 17
	return (
		<Svg width={size} height={height} viewBox="0 0 17 21" fill="none">
			<Path
				d="M12.8333 2H4.16667C3.59203 2 3.04093 2.20666 2.6346 2.57452C2.22827 2.94238 2 3.44131 2 3.96154V19L8.5 13.7692L15 19V3.96154C15 3.44131 14.7717 2.94238 14.3654 2.57452C13.9591 2.20666 13.408 2 12.8333 2Z"
				stroke={color}
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	)
}
