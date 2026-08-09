import { supportConfig } from "@/config/support"
import { useI18n } from "@/i18n"

export function SiteFooter() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-1 px-4 text-center text-xs text-muted-foreground sm:px-6">
        <p className="font-medium text-foreground/80">
          {supportConfig.brandName}
        </p>
        <p>
          © {year} {supportConfig.brandName}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
