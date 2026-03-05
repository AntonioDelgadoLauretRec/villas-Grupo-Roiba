'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { dictionaries, type Locale, type Dictionary } from './dictionaries'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'es',
  setLocale: () => {},
  t: dictionaries.es,
})

const STORAGE_KEY = 'roiba_lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')

  useEffect(() => {
    // Only restore saved preference; default is always Spanish
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (saved && (saved === 'es' || saved === 'en')) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem(STORAGE_KEY, l)
    document.documentElement.lang = l
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
