const TRANSLATE_ENDPOINT = '/functions/v1/translate'

export const LANGUAGES = {
  EN: { name: 'English', code: 'en' },
  FR: { name: 'Français', code: 'fr' },
  ES: { name: 'Español', code: 'es' },
  PT: { name: 'Português', code: 'pt' },
  DE: { name: 'Deutsch', code: 'de' },
  ZH: { name: '中文', code: 'zh' },
  AR: { name: 'العربية', code: 'ar' },
  HI: { name: 'हिन्दी', code: 'hi' },
  SW: { name: 'Kiswahili', code: 'sw' },
  NY: { name: 'Chichewa', code: 'ny' },
}

export const getStoredLanguage = () => {
  if (typeof window === 'undefined') return 'EN'
  return localStorage.getItem('ncwala_language') || 'EN'
}

export const setStoredLanguage = (lang) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ncwala_language', lang)
  }
}

export const translatePage = async (text, targetLanguage) => {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

    const response = await fetch(`${supabaseUrl}${TRANSLATE_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({
        text,
        targetLanguage: LANGUAGES[targetLanguage]?.code || 'en',
      }),
    })

    if (!response.ok) {
      throw new Error('Translation failed')
    }

    const data = await response.json()
    return data.translatedText || text
  } catch (error) {
    console.error('Translation error:', error)
    return text
  }
}
