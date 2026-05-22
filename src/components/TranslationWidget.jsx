import React from 'react'
import { Globe } from 'lucide-react'
import { getStoredLanguage, setStoredLanguage, LANGUAGES } from '../lib/translations'

export default function TranslationWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [language, setLanguage] = React.useState(getStoredLanguage())

  const changeLanguage = (lang) => {
    setLanguage(lang)
    setStoredLanguage(lang)
    setIsOpen(false)
    // In a real app, would trigger translation of page
    window.location.reload()
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-ncwala-gold text-ncwala-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-raleway"
      >
        <Globe size={18} />
        <span>{language}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-ncwala-black border border-ncwala-gold rounded-lg shadow-lg w-48 z-50">
          {Object.entries(LANGUAGES).map(([key, lang]) => (
            <button
              key={key}
              onClick={() => changeLanguage(key)}
              className={`w-full text-left px-4 py-2 transition-colors font-raleway ${
                language === key
                  ? 'bg-ncwala-gold text-ncwala-black'
                  : 'text-ncwala-white hover:bg-ncwala-gold/20'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
