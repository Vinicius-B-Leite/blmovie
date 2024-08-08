import { useContext } from "react"
import { ThemeContext } from "../contexts/theme/ThemeContext"

export const useAppTheme = () => useContext(ThemeContext)
