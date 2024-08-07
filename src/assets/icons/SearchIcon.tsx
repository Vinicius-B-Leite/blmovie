import { Path, Svg } from "react-native-svg"
import { IconBaseProps } from "../../components/Icon/type"
import { dark } from "../../theme/dark"

export function SearchIcon({ size = 20, color = "text" }: IconBaseProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
			<Path
				d="M23.5375 22.4386L16.0016 14.9027C17.171 13.3909 17.8036 11.5424 17.8036 9.59824C17.8036 7.27101 16.8953 5.08887 15.2529 3.44355C13.6105 1.79824 11.4225 0.892883 9.09821 0.892883C6.77388 0.892883 4.58593 1.80114 2.94352 3.44355C1.29821 5.08596 0.392853 7.27101 0.392853 9.59824C0.392853 11.9226 1.30111 14.1105 2.94352 15.7529C4.58593 17.3982 6.77098 18.3036 9.09821 18.3036C11.0424 18.3036 12.8879 17.671 14.3998 16.5045L21.9357 24.0375C21.9578 24.0596 21.984 24.0772 22.0129 24.0891C22.0418 24.1011 22.0728 24.1073 22.104 24.1073C22.1353 24.1073 22.1662 24.1011 22.1951 24.0891C22.224 24.0772 22.2502 24.0596 22.2723 24.0375L23.5375 22.7753C23.5596 22.7532 23.5772 22.7269 23.5891 22.698C23.6011 22.6692 23.6072 22.6382 23.6072 22.607C23.6072 22.5757 23.6011 22.5447 23.5891 22.5159C23.5772 22.487 23.5596 22.4607 23.5375 22.4386ZM13.6946 14.1947C12.4643 15.4221 10.8335 16.0982 9.09821 16.0982C7.36294 16.0982 5.73214 15.4221 4.50178 14.1947C3.27433 12.9643 2.59821 11.3335 2.59821 9.59824C2.59821 7.86297 3.27433 6.22927 4.50178 5.00181C5.73214 3.77436 7.36294 3.09824 9.09821 3.09824C10.8335 3.09824 12.4672 3.77146 13.6946 5.00181C14.9221 6.23217 15.5982 7.86297 15.5982 9.59824C15.5982 11.3335 14.9221 12.9672 13.6946 14.1947Z"
				fill={dark.colors[color]}
			/>
		</Svg>
	)
}
