import { useEffect } from "react"
import { Link } from "react-router-dom"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { Separator } from "@/components/ui/separator"
import { supportConfig } from "@/config/support"
import { useI18n } from "@/i18n"
import type { LegalSection } from "@/i18n/types"
import { interpolate } from "@/lib/interpolate"

export function LegalPage() {
  const { t } = useI18n()
  const vars = {
    email: supportConfig.email,
    brand: supportConfig.brandName,
  }

  useEffect(() => {
    document.title = t.legal.metaTitle
  }, [t.legal.metaTitle])

  return (
    <div id="top" className="flex min-h-svh flex-col bg-background">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14">
        <header className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {t.legal.lastUpdatedLabel}: {t.legal.lastUpdated}
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.legal.title}
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            {t.legal.intro}
          </p>

          <nav
            aria-label={t.legal.title}
            className="flex flex-wrap gap-2 pt-1"
          >
            <a
              href="#privacidade"
              className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              {t.legal.navPrivacy}
            </a>
            <a
              href="#termos"
              className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              {t.legal.navTerms}
            </a>
            <Link
              to="/"
              className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {t.footer.supportLink}
            </Link>
          </nav>
        </header>

        <LegalDocument
          id="privacidade"
          title={t.legal.privacy.title}
          sections={t.legal.privacy.sections}
          vars={vars}
        />

        <Separator />

        <LegalDocument
          id="termos"
          title={t.legal.terms.title}
          sections={t.legal.terms.sections}
          vars={vars}
        />
      </main>

      <SiteFooter />
    </div>
  )
}

function LegalDocument({
  id,
  title,
  sections,
  vars,
}: {
  id: string
  title: string
  sections: LegalSection[]
  vars: Record<string, string>
}) {
  return (
    <section id={id} className="scroll-mt-20 flex flex-col gap-8">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <article key={section.title} className="flex flex-col gap-3">
            <h3 className="text-base font-medium tracking-tight">
              {section.title}
            </h3>
            {section.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]"
              >
                {interpolate(paragraph, vars)}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}
