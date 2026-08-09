export type Locale = "pt" | "en" | "es"

export type FaqItem = {
  question: string
  answer: string
}

export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  header: {
    brandAria: string
    languageLabel: string
    themeLabel: string
    themeLight: string
    themeDark: string
    themeSystem: string
  }
  languages: {
    pt: string
    en: string
    es: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
  }
  contact: {
    title: string
    subtitle: string
    email: string
    emailHint: string
    whatsapp: string
    whatsappHint: string
    emailSubject: string
    whatsappMessage: string
  }
  hours: {
    title: string
    description: string
    detail: string
  }
  faq: {
    title: string
    subtitle: string
    items: FaqItem[]
  }
  footer: {
    rights: string
  }
}
