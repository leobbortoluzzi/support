import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useI18n } from "@/i18n"

export function FaqSection() {
  const { t } = useI18n()

  return (
    <section className="flex flex-col gap-4" aria-labelledby="faq-heading">
      <div className="flex flex-col gap-1.5 text-center sm:text-left">
        <h2 id="faq-heading" className="text-xl font-semibold tracking-tight">
          {t.faq.title}
        </h2>
        <p className="text-sm text-muted-foreground">{t.faq.subtitle}</p>
      </div>

      <Accordion multiple className="rounded-xl border border-border px-4">
        {t.faq.items.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="py-3.5 text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
