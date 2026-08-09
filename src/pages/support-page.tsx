import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { ContactSection } from "@/components/support/contact-section"
import { FaqSection } from "@/components/support/faq-section"
import { HeroSection } from "@/components/support/hero-section"
import { HoursSection } from "@/components/support/hours-section"
import { Separator } from "@/components/ui/separator"
import { useI18n } from "@/i18n"
import { useEffect } from "react"

export function SupportPage() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = t.meta.title
  }, [t.meta.title])

  return (
    <div id="top" className="flex min-h-svh flex-col bg-background">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-4 py-10 sm:px-6 sm:py-14">
        <HeroSection />
        <ContactSection />
        <HoursSection />
        <Separator />
        <FaqSection />
      </main>

      <SiteFooter />
    </div>
  )
}
