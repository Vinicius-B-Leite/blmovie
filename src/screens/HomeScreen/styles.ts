import { Dimensions, StyleSheet } from "react-native"
import { theme } from "../../theme/theme"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.black,
	},
	image: {
		width: "100%",
		height: Dimensions.get("screen").height * 0.5,
		justifyContent: "flex-end",
	},
	gradientContainer: {
		justifyContent: "flex-end",
		height: 300,
	},
	bannerInfo: {
		paddingHorizontal: theme.spacings.s6x,
	},
	movieName: {
		fontSize: 21,
		color: theme.colors.white,
	},
	averageContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: theme.spacings.s2x,
		marginBottom: theme.spacings.s4x,
	},
	average: {
		fontSize: 14,
		color: theme.colors.orange,
	},
	seeMoreBtn: {
		backgroundColor: theme.colors.blue,
		paddingHorizontal: theme.spacings.s3x,
		paddingVertical: theme.spacings.s1x,
		borderRadius: theme.borderRadius.full,
		alignSelf: "flex-start",
		alignItems: "center",
	},
	seeMoreLabel: {
		color: theme.colors.white,
		fontSize: 14,
	},
	moviesContainer: {
		paddingHorizontal: theme.spacings.s6x,
		marginTop: theme.spacings.s13x,
		gap: theme.spacings.s8x,
	},
	moviesTitleContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: theme.spacings.s3x,
	},
	moviesSectionTitle: {
		fontSize: 18,
		color: theme.colors.white,
		fontWeight: "bold",
	},
	moviesSectionRedirect: {
		color: theme.colors.blue,
		fontSize: 14,
	},
	movieItemBanner: {
		borderRadius: theme.borderRadius["b1.5x"],
		width: 150,
		height: 250,
	},
})
