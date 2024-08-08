import { Path, Svg } from "react-native-svg"
import { IconBaseProps } from "../../components/Icon/type"
import { dark } from "../../theme/dark"

export function HomeIcon({ size = 20, color }: IconBaseProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 26 26" fill="none">
			<Path
				d="M25.6083 12.2969L13.6558 0.353134C13.5697 0.266905 13.4675 0.198494 13.355 0.151818C13.2425 0.105142 13.1218 0.0811157 13 0.0811157C12.8782 0.0811157 12.7575 0.105142 12.645 0.151818C12.5325 0.198494 12.4303 0.266905 12.3442 0.353134L0.391742 12.2969C0.043528 12.6451 -0.153793 13.1181 -0.153793 13.6114C-0.153793 14.6357 0.679019 15.4685 1.70335 15.4685H2.96272V23.9911C2.96272 24.5047 3.37768 24.9197 3.8913 24.9197H11.1429V18.4197H14.3929V24.9197H22.1087C22.6223 24.9197 23.0373 24.5047 23.0373 23.9911V15.4685H24.2966C24.79 15.4685 25.2629 15.2741 25.6112 14.923C26.3337 14.1976 26.3337 13.0223 25.6083 12.2969Z"
				fill={color}
			/>
		</Svg>
	)
}
