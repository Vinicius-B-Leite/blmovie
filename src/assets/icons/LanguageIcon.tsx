import { Path, Svg } from "react-native-svg"
import { IconBaseProps } from "../../components/Icon/type"

export function LanguageIcon({ size = 20, color }: IconBaseProps) {
	const height = (size * 26) / 28

	return (
		<Svg width={size} height={height} viewBox="0 0 28 26" fill="none">
			<Path
				d="M27.0271 23.4063L21.7537 10.6328C21.6563 10.3969 21.4911 10.1953 21.279 10.0533C21.0669 9.91144 20.8174 9.83569 20.5622 9.83569C20.307 9.83569 20.0575 9.91144 19.8454 10.0533C19.6333 10.1953 19.4681 10.3969 19.3707 10.6328L14.0973 23.4063C14.0317 23.5629 13.9977 23.731 13.9973 23.9008C13.9969 24.0706 14.03 24.2388 14.0948 24.3958C14.1596 24.5528 14.2547 24.6954 14.3748 24.8155C14.4949 24.9356 14.6375 25.0307 14.7944 25.0955C14.9514 25.1603 15.1196 25.1935 15.2894 25.1931C15.4593 25.1927 15.6273 25.1587 15.784 25.0932C15.9406 25.0276 16.0828 24.9317 16.2023 24.8111C16.3218 24.6904 16.4162 24.5473 16.4803 24.39L17.5543 21.7891H23.5701L24.6441 24.39C24.7415 24.626 24.9067 24.8278 25.1189 24.9698C25.3311 25.1118 25.5806 25.1875 25.8359 25.1875C26.0478 25.1874 26.2563 25.1351 26.4431 25.0352C26.6299 24.9353 26.7891 24.7909 26.9069 24.6148C27.0246 24.4387 27.0971 24.2363 27.1179 24.0255C27.1388 23.8147 27.1074 23.602 27.0266 23.4063H27.0271ZM18.6189 19.2109L20.5625 14.5029L22.5061 19.2109H18.6189ZM14.6937 18.093C14.894 17.8163 14.9763 17.4715 14.9226 17.1343C14.8689 16.797 14.6835 16.4949 14.4072 16.2941C14.3955 16.2854 13.5283 15.642 12.2691 14.2592C14.5924 11.1139 15.9084 7.53555 16.4451 5.85156H18.3359C18.6778 5.85156 19.0057 5.71575 19.2474 5.47401C19.4892 5.23226 19.625 4.90438 19.625 4.5625C19.625 4.22062 19.4892 3.89274 19.2474 3.651C19.0057 3.40925 18.6778 3.27344 18.3359 3.27344H11.5391V2.10156C11.5391 1.75968 11.4032 1.4318 11.1615 1.19006C10.9198 0.948312 10.5919 0.8125 10.25 0.8125C9.90812 0.8125 9.58024 0.948312 9.33849 1.19006C9.09675 1.4318 8.96094 1.75968 8.96094 2.10156V3.27344H2.16406C1.82218 3.27344 1.4943 3.40925 1.25256 3.651C1.01081 3.89274 0.875 4.22062 0.875 4.5625C0.875 4.90438 1.01081 5.23226 1.25256 5.47401C1.4943 5.71575 1.82218 5.85156 2.16406 5.85156H13.7217C13.1639 7.43067 12.1367 9.92383 10.5699 12.2008C8.72949 9.7586 8.0457 8.17832 8.04043 8.16543C7.90569 7.85406 7.65364 7.60835 7.33892 7.48161C7.02421 7.35487 6.67222 7.35731 6.35929 7.4884C6.04637 7.6195 5.79774 7.86867 5.66734 8.18188C5.53693 8.4951 5.53526 8.84709 5.66269 9.16153C5.69668 9.24239 6.51523 11.1672 8.75996 14.0793C8.81387 14.149 8.86719 14.217 8.92051 14.285C6.62129 16.8836 4.36543 18.4955 3.42148 19.0158C3.12133 19.1795 2.8985 19.4558 2.80202 19.7838C2.70554 20.1118 2.74332 20.4647 2.90703 20.7648C3.07075 21.065 3.34699 21.2878 3.675 21.3843C4.003 21.4808 4.3559 21.443 4.65605 21.2793C4.78262 21.2102 7.50371 19.7037 10.6109 16.2643C11.9305 17.6752 12.8375 18.3408 12.892 18.3795C13.0291 18.4791 13.1845 18.5507 13.3493 18.5901C13.5141 18.6296 13.6851 18.6362 13.8524 18.6095C14.0197 18.5829 14.1802 18.5235 14.3246 18.4347C14.4689 18.346 14.5944 18.2297 14.6937 18.0924V18.093Z"
				fill={color}
			/>
		</Svg>
	)
}