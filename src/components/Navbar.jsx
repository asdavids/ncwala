import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Globe, Menu, X } from 'lucide-react'
import { getStoredLanguage, setStoredLanguage, LANGUAGES } from '../lib/translations'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState(getStoredLanguage())
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    setStoredLanguage(lang)
    setIsOpen(false)
    // Reload page to apply translations
    window.location.reload()
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/history', label: 'History' },
    { href: '/ngoni', label: 'Ngoni People' },
    { href: '/ceremony', label: 'Ceremony' },
    { href: '/travel', label: 'Travel' },
    { href: '/accommodation', label: 'Accommodation' },
    { href: '/transport', label: 'Transport' },
    { href: '/shop', label: 'Shop' },
    { href: '/news', label: 'News' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/directory', label: 'Directory' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href) => location.pathname === href

  return (
    <nav className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-ncwala-black shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="text-2xl font-cinzel-decorative text-ncwala-gold">
              ✦ Ncwala ✦
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="mobile-hidden flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-cinzel text-sm transition-colors ${
                  isActive(link.href)
                    ? 'nav-link-active'
                    : 'text-ncwala-white hover:text-ncwala-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-ncwala-gold hover:text-ncwala-white transition-colors">
                <Globe size={20} />
                <span className="text-xs font-raleway hidden sm:inline">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-ncwala-black border border-ncwala-gold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                {Object.entries(LANGUAGES).map(([key, lang]) => (
                  <button
                    key={key}
                    onClick={() => changeLanguage(key)}
                    className="w-full text-left px-4 py-2 text-ncwala-white hover:bg-ncwala-gold hover:text-ncwala-black transition-colors text-sm font-raleway"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-ncwala-gold"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-ncwala-black border-t border-ncwala-gold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 font-cinzel text-sm border-b border-ncwala-gold/20 transition-colors ${
                  isActive(link.href)
                    ? 'bg-ncwala-gold text-ncwala-black'
                    : 'text-ncwala-white hover:bg-ncwala-gold/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
