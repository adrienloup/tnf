import { useContext } from "react";
import { ThemeContext } from "@/src/generic/theme/Theme.context";

export function useTheme() {
  return useContext(ThemeContext);
}
