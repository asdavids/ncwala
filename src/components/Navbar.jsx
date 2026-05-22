import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Globe, Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()
  const moreRef = useRef(null)
  const langRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setMoreOpen(false)
    setLangOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false)
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Aggressively remove Google Translate bar
  useEffect(() => {
    const removeBar = () => {
      // Remove iframe
      const frame = document.querySelector('iframe.skiptranslate')
      if (frame) frame.remove()
      // Reset body position
      document.body.style.top = '0px'
      document.body.setAttribute('style', 'top: 0px !important')
      // Remove the banner
      const banner = document.querySelector('.goog-te-banner-frame')
      if (banner) banner.remove()
    }
    // Run immediately and on interval to catch late injection
    removeBar()
    const interval = setInterval(removeBar, 500)
    return () => clearInterval(interval)
  }, [])

  // Load Google Translate script once
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'fr,es,pt,de,zh-CN,ar,hi,sw,ny', layout: 0, autoDisplay: false },
        'google_translate_element'
      )
    }
    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    document.body.appendChild(script)
  }, [])

  const translateTo = (langCode) => {
    const select = document.querySelector('.goog-te-combo')
    if (select) {
      select.value = langCode
      select.dispatchEvent(new Event('change'))
    }
    setLangOpen(false)
  }

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'pt', label: 'Português' },
    { code: 'de', label: 'Deutsch' },
    { code: 'zh-CN', label: '中文' },
    { code: 'ar', label: 'العربية' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'sw', label: 'Kiswahili' },
    { code: 'ny', label: 'Chichewa' },
  ]

  const primaryLinks = [
    { href: '/', label: 'Home' },
    { href: '/history', label: 'History' },
    { href: '/ngoni', label: 'Ngoni' },
    { href: '/ceremony', label: 'Ceremony' },
    { href: '/news', label: 'News' },
    { href: '/gallery', label: 'Gallery' },
  ]

  const secondaryLinks = [
    { href: '/travel', label: 'Travel' },
    { href: '/accommodation', label: 'Accommodation' },
    { href: '/transport', label: 'Transport' },
    { href: '/shop', label: 'Shop' },
    { href: '/directory', label: 'Directory' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href) => location.pathname === href

  const dropdownClass = "absolute right-0 top-8 mt-2 w-44 bg-ncwala-black border border-ncwala-gold/20 shadow-2xl z-[9999]"
  const dropdownItemClass = "block w-full text-left px-5 py-3 font-raleway text-xs uppercase tracking-widest border-b border-white/5 transition-colors text-gray-300 hover:text-ncwala-gold hover:bg-white/5"

  return (
    <>
      {/* Hidden Google Translate widget */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-ncwala-black shadow-lg' : 'bg-ncwala-black/90'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-14">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className="font-cinzel-decorative text-base text-ncwala-gold">Ncwala</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-5">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-raleway text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${
                    isActive(link.href) ? 'text-ncwala-gold' : 'text-gray-300 hover:text-ncwala-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => { setMoreOpen(!moreOpen); setLangOpen(false) }}
                  className="flex items-center gap-1 font-raleway text-xs uppercase tracking-widest text-gray-300 hover:text-ncwala-gold transition-colors"
                >
                  More
                  <ChevronDown size={11} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                </button>
                {moreOpen && (
                  <div className={dropdownClass}>
                    {secondaryLinks.map((link) => (
                      <Link key={link.href} to={link.href} className={`${dropdownItemClass} ${isActive(link.href) ? 'text-ncwala-gold' : ''}`}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Language dropdown */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => { setLangOpen(!langOpen); setMoreOpen(false) }}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-ncwala-gold transition-colors"
                >
                  <Globe size={14} />
                  <span className="font-raleway text-xs uppercase tracking-widest">Translate</span>
                  <ChevronDown size={11} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                {langOpen && (
                  <div className={dropdownClass}>
                    {languages.map((lang) => (
                      <button key={lang.code} onClick={() => translateTo(lang.code)} className={dropdownItemClass}>
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-ncwala-gold">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-ncwala-black border-t border-ncwala-gold/20">
            {[...primaryLinks, ...secondaryLinks].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-6 py-3 font-raleway text-xs uppercase tracking-widest border-b border-white/5 transition-colors ${
                  isActive(link.href) ? 'text-ncwala-gold' : 'text-gray-300 hover:text-ncwala-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
