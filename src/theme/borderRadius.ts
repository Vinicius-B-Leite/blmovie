import { Dimensions } from "react-native"
import { responsiveSize } from "../utils/sizes/responsiveSize"

export const borderRadius = {
	b1x: responsiveSize(8),
	"b1.5x": responsiveSize(10),
	full: Dimensions.get("screen").height,
}
