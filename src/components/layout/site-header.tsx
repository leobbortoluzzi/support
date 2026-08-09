import { LifeBuoyIcon } from "lucide-react"
import { Link } from "react-router-dom"

import { LanguageSelect } from "@/components/language-select"
import { ThemeToggle } from "@/components/theme-toggle"
import { supportConfig } from "@/config/support"
import { useI18n } from "@/i18n"

export function SiteHeader() {
  const { t } = useI18n()

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label={t.header.brandAria}
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LifeBuoyIcon className="size-4" />
          </span>
          <span className="text-sm font-medium tracking-tight">
            {supportConfig.brandName}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <LanguageSelect />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
