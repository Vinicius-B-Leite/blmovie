import { Path, Rect, Svg } from "react-native-svg"
import { IconBaseProps } from "../../components/Icon/type"

export function GoBackIcon({ size = 20, color }: IconBaseProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 36 36" fill="none">
			<Rect
				x="0.5"
				y="0.5"
				width="35"
				height="35"
				rx="17.5"
				stroke={color}
				strokeWidth={2}
			/>
			<Path
				d="M21.9313 12.3151V11.0011C21.9313 10.8872 21.7885 10.8243 21.6921 10.894L13.3325 16.8793C13.2615 16.9299 13.204 16.9947 13.1645 17.0688C13.1249 17.1429 13.1044 17.2243 13.1044 17.3068C13.1044 17.3892 13.1249 17.4706 13.1645 17.5447C13.204 17.6188 13.2615 17.6837 13.3325 17.7343L21.6921 23.7195C21.7904 23.7892 21.9313 23.7263 21.9313 23.6124V22.2984C21.9313 22.2151 21.8887 22.1352 21.8182 22.0842L15.1424 17.3076L21.8182 12.5293C21.8887 12.4783 21.9313 12.3984 21.9313 12.3151Z"
				fill={color}
			/>
		</Svg>
	)
}