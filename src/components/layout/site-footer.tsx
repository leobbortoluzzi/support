import { Link } from "react-router-dom"

import { supportConfig } from "@/config/support"
import { useI18n } from "@/i18n"

export function SiteFooter() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-4 text-center text-xs text-muted-foreground sm:px-6">
        <p className="font-medium text-foreground/80">
          {supportConfig.brandName}
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Link
            to="/"
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {t.footer.supportLink}
          </Link>
          <Link
            to="/legal"
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {t.footer.legalLink}
          </Link>
        </nav>
        <p>
          © {year} {supportConfig.brandName}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
