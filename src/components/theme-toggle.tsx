import { MoonIcon, SunIcon } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/i18n"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useI18n()

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      return
    }
    if (theme === "dark") {
      setTheme("system")
      return
    }
    setTheme("light")
  }

  const label =
    theme === "light"
      ? t.header.themeLight
      : theme === "dark"
        ? t.header.themeDark
        : t.header.themeSystem

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      aria-label={`${t.header.themeLabel}: ${label}`}
      title={`${t.header.themeLabel}: ${label}`}
    >
      <SunIcon className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  )
}
