import { Path, Svg } from "react-native-svg"
import { IconBaseProps } from "../../components/Icon/type"
import { dark } from "../../theme/dark"

export function MoonIcon({ size = 20, color }: IconBaseProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
			<Path
				d="M8.46154 7.07692C8.46154 5.31038 8.72173 3.5225 9.38462 2C4.97519 3.91942 2 8.42231 2 13.5385C2 20.4206 7.57942 26 14.4615 26C19.5777 26 24.0806 23.0248 26 18.6154C24.4775 19.2783 22.6896 19.5385 20.9231 19.5385C14.041 19.5385 8.46154 13.959 8.46154 7.07692Z"
				stroke={color}
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	)
}
