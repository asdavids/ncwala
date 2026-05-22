import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Globe, Menu, X, ChevronDown } from 'lucide-react'
import { getStoredLanguage, setStoredLanguage, LANGUAGES } from '../lib/translations'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState(getStoredLanguage())
  const [isScrolled, setIsScrolled] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setMoreOpen(false)
  }, [location])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    setStoredLanguage(lang)
    window.location.reload()
  }

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

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-ncwala-black shadow-lg' : 'bg-ncwala-black/75 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-14">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className="font-cinzel-decorative text-base text-ncwala-gold">
                Ncwala
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-5">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-raleway text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${
                    isActive(link.href)
                      ? 'text-ncwala-gold'
                      : 'text-gray-300 hover:text-ncwala-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="flex items-center gap-1 font-raleway text-xs uppercase tracking-widest text-gray-300 hover:text-ncwala-gold transition-colors"
                >
                  More
                  <ChevronDown size={11} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                </button>

                {moreOpen && (
                  <div className="absolute right-0 top-full mt-3 w-44 bg-ncwala-black border border-ncwala-gold/20 shadow-2xl">
                    {secondaryLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block px-5 py-3 font-raleway text-xs uppercase tracking-widest border-b border-white/5 transition-colors ${
                          isActive(link.href)
                            ? 'text-ncwala-gold'
                            : 'text-gray-300 hover:text-ncwala-gold hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Language */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-400 hover:text-ncwala-gold transition-colors">
                  <Globe size={14} />
                  <span className="font-raleway text-xs">{language}</span>
                </button>
                <div className="absolute right-0 top-full mt-3 w-44 bg-ncwala-black border border-ncwala-gold/20 shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                  {Object.entries(LANGUAGES).map(([key, lang]) => (
                    <button
                      key={key}
                      onClick={() => changeLanguage(key)}
                      className="w-full text-left px-5 py-3 font-raleway text-xs text-gray-300 hover:text-ncwala-black hover:bg-ncwala-gold transition-colors border-b border-white/5"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
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

      {/* Click outside to close More */}
      {moreOpen && <div className="fixed inset-0 z-40" onClick={() => setMoreOpen(false)} />}
    </>
  )
}
