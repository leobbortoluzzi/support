/* eslint-disable react-refresh/only-export-components */
import * as React from "react"

import { en } from "./locales/en"
import { es } from "./locales/es"
import { pt } from "./locales/pt"
import type { Dictionary, Locale } from "./types"

const LOCALES: Locale[] = ["pt", "en", "es"]
const STORAGE_KEY = "locale"
const DEFAULT_LOCALE: Locale = "pt"

const dictionaries: Record<Locale, Dictionary> = {
  pt,
  en,
  es,
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LocaleContext = React.createContext<LocaleContextValue | undefined>(
  undefined
)

function isLocale(value: string | null): value is Locale {
  return value !== null && LOCALES.includes(value as Locale)
}

function readStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE
  }

  const stored = localStorage.getItem(STORAGE_KEY)
  if (isLocale(stored)) {
    return stored
  }

  return DEFAULT_LOCALE
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(() =>
    readStoredLocale()
  )

  const setLocale = React.useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next)
    setLocaleState(next)
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = locale
    document.title = dictionaries[locale].meta.title
  }, [locale])

  const value = React.useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale, setLocale]
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useI18n() {
  const context = React.useContext(LocaleContext)

  if (context === undefined) {
    throw new Error("useI18n must be used within a LocaleProvider")
  }

  return context
}

export { LOCALES }
export type { Dictionary, Locale }
