import type { ReactNode } from "react"
import { MailIcon, MessageCircleIcon } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { supportConfig } from "@/config/support"
import { useI18n } from "@/i18n"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const { t } = useI18n()

  const mailtoHref = `mailto:${supportConfig.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`
  const whatsappHref = `https://wa.me/${supportConfig.whatsapp.number}?text=${encodeURIComponent(t.contact.whatsappMessage)}`

  return (
    <section className="flex flex-col gap-4" aria-labelledby="contact-heading">
      <div className="flex flex-col gap-1.5 text-center sm:text-left">
        <h2
          id="contact-heading"
          className="text-xl font-semibold tracking-tight"
        >
          {t.contact.title}
        </h2>
        <p className="text-sm text-muted-foreground">{t.contact.subtitle}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <ContactCard
          href={mailtoHref}
          icon={<MailIcon className="size-5" />}
          title={t.contact.email}
          description={t.contact.emailHint}
          detail={supportConfig.email}
        />
        <ContactCard
          href={whatsappHref}
          icon={<MessageCircleIcon className="size-5" />}
          title={t.contact.whatsapp}
          description={t.contact.whatsappHint}
          detail={`+${supportConfig.whatsapp.number}`}
          external
        />
      </div>
    </section>
  )
}

function ContactCard({
  href,
  icon,
  title,
  description,
  detail,
  external,
}: {
  href: string
  icon: ReactNode
  title: string
  description: string
  detail: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      )}
    >
      <Card className="h-full transition-colors group-hover:bg-muted/40 group-hover:ring-foreground/20">
        <CardHeader>
          <div className="mb-1 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <p className="mt-1 truncate text-xs font-medium text-foreground/80">
            {detail}
          </p>
        </CardHeader>
      </Card>
    </a>
  )
}
