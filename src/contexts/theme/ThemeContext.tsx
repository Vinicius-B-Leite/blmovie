import { createContext, useState } from "react"

import { dark, light, Theme } from "@/theme"

type ThemeContext = {
	theme: Theme
	toggle: () => void
	updateContrastColor: (color: string) => void
}
export const ThemeContext = createContext({} as ThemeContext)

type ThemeProviderProps = React.PropsWithChildren
export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(dark)
	const [contrastColor, setContrastColor] = useState(dark.colors.contrast)

	const toggle = () => {
		setTheme((oldTheme) => (oldTheme.themeName === "dark" ? light : dark))
	}
	const updateContrastColor = (color: string) => {
		setContrastColor(color)
	}
	return (
		<ThemeContext.Provider
			value={{
				theme: { ...theme, colors: { ...theme.colors, contrast: contrastColor } },
				toggle,
				updateContrastColor,
			}}>
			{children}
		</ThemeContext.Provider>
	)
}
