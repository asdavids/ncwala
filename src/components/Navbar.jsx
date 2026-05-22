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
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns on route change
  useEffect(() => {
    setIsOpen(false)
    setMoreOpen(false)
  }, [location])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    setStoredLanguage(lang)
    window.location.reload()
  }

  // Primary links — always visible in desktop nav
  const primaryLinks = [
    { href: '/', label: 'Home' },
    { href: '/history', label: 'History' },
    { href: '/ngoni', label: 'Ngoni People' },
    { href: '/ceremony', label: 'Ceremony' },
    { href: '/news', label: 'News' },
    { href: '/gallery', label: 'Gallery' },
  ]

  // Secondary links — in "More" dropdown
  const secondaryLinks = [
    { href: '/travel', label: 'Travel' },
    { href: '/accommodation', label: 'Accommodation' },
    { href: '/transport', label: 'Transport' },
    { href: '/shop', label: 'Shop' },
    { href: '/directory', label: 'Directory' },
    { href: '/contact', label: 'Contact' },
  ]

  const allLinks = [...primaryLinks, ...secondaryLinks]
  const isActive = (href) => location.pathname === href

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-ncwala-black shadow-lg'
        : 'bg-black/70 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="font-cinzel-decorative text-lg text-ncwala-gold tracking-wide">
              Ncwala
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-5">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-cinzel text-xs uppercase tracking-wide transition-colors ${
                  isActive(link.href)
                    ? 'text-ncwala-gold border-b border-ncwala-gold'
                    : 'text-ncwala-white hover:text-ncwala-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center gap-1 font-cinzel text-xs uppercase tracking-wide text-ncwala-white hover:text-ncwala-gold transition-colors"
              >
                More <ChevronDown size={12} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-ncwala-black border border-ncwala-gold/30 shadow-xl rounded">
                  {secondaryLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`block px-4 py-2.5 font-cinzel text-xs uppercase tracking-wide transition-colors ${
                        isActive(link.href)
                          ? 'text-ncwala-gold bg-white/5'
                          : 'text-ncwala-white hover:text-ncwala-gold hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side — Language + Mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Language */}
            <div className="relative group hidden sm:block">
              <button className="flex items-center gap-1.5 text-ncwala-gold hover:text-ncwala-white transition-colors">
                <Globe size={16} />
                <span className="font-raleway text-xs">{language}</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-44 bg-ncwala-black border border-ncwala-gold/30 rounded shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                {Object.entries(LANGUAGES).map(([key, lang]) => (
                  <button
                    key={key}
                    onClick={() => changeLanguage(key)}
                    className="w-full text-left px-4 py-2 font-raleway text-xs text-ncwala-white hover:bg-ncwala-gold hover:text-ncwala-black transition-colors"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-ncwala-gold"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-ncwala-black border-t border-ncwala-gold/30 pb-2">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-3 font-cinzel text-xs uppercase tracking-wide border-b border-ncwala-gold/10 transition-colors ${
                  isActive(link.href)
                    ? 'text-ncwala-gold'
                    : 'text-ncwala-white hover:text-ncwala-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Click outside to close More dropdown */}
      {moreOpen && (
        <div className="fixed inset-0 z-[-1]" onClick={() => setMoreOpen(false)} />
      )}
    </nav>
  )
}
