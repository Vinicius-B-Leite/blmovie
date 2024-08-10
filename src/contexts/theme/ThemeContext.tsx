import { createContext, useState } from "react"

import { dark, light, Theme } from "@/theme"

type ThemeContext = {
	theme: Theme
	toggle: () => void
}
export const ThemeContext = createContext({} as ThemeContext)

type ThemeProviderProps = React.PropsWithChildren
export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(dark)

	const toggle = () => {
		setTheme((oldTheme) => (oldTheme.themeName === "dark" ? light : dark))
	}
	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	)
}
