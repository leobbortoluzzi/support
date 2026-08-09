export type Locale = "pt" | "en" | "es"

export type FaqItem = {
  question: string
  answer: string
}

export type LegalSection = {
  title: string
  paragraphs: string[]
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
    legalLink: string
    supportLink: string
  }
  legal: {
    metaTitle: string
    title: string
    intro: string
    lastUpdatedLabel: string
    lastUpdated: string
    navPrivacy: string
    navTerms: string
    privacy: {
      title: string
      sections: LegalSection[]
    }
    terms: {
      title: string
      sections: LegalSection[]
    }
  }
}
