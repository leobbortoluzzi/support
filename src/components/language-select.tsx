import { LanguagesIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LOCALES, useI18n, type Locale } from "@/i18n"

export function LanguageSelect() {
  const { locale, setLocale, t } = useI18n()

  return (
    <Select
      value={locale}
      onValueChange={(value) => {
        if (value && LOCALES.includes(value as Locale)) {
          setLocale(value as Locale)
        }
      }}
    >
      <SelectTrigger
        size="default"
        aria-label={t.header.languageLabel}
        className="min-w-[9.5rem] gap-2"
      >
        <LanguagesIcon className="size-4 text-muted-foreground" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" alignItemWithTrigger={false}>
        {LOCALES.map((code) => (
          <SelectItem key={code} value={code}>
            {t.languages[code]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
