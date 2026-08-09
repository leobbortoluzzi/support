import { PartyPopperIcon } from "lucide-react"

import { useI18n } from "@/i18n"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
        <PartyPopperIcon className="size-3.5" />
        {t.hero.badge}
      </span>
      <h1 className="max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {t.hero.title}
      </h1>
      <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        {t.hero.subtitle}
      </p>
    </section>
  )
}
