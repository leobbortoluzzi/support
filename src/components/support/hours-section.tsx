import { ClockIcon } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useI18n } from "@/i18n"

export function HoursSection() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="hours-heading">
      <Card className="bg-muted/30">
        <CardHeader className="sm:flex-row sm:items-start sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ClockIcon className="size-5" />
          </div>
          <div className="flex flex-col gap-1">
            <CardTitle id="hours-heading">{t.hours.title}</CardTitle>
            <p className="text-sm font-medium text-foreground">
              {t.hours.description}
            </p>
            <CardDescription>{t.hours.detail}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </section>
  )
}
