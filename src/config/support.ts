/**
 * Edit these values for your brand and contact channels.
 * All UI copy lives in src/i18n/locales — only hard data here.
 */
export const supportConfig = {
  brandName: "Suporte",
  email: "suporte@groupcold.com",
  whatsapp: {
    /** E.164 digits only, no + (e.g. 5511999999999) */
    number: "5548936184067",
  },
} as const

export type SupportConfig = typeof supportConfig
