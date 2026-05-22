import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Calendar } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ncwala-black text-ncwala-white ngoni-pattern">
      {/* Gold top border */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-ncwala-gold to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-cinzel-decorative text-2xl text-ncwala-gold block mb-4">Ncwala</span>
            <p className="font-garamond text-gray-400 leading-relaxed text-sm mb-6">
              Preserving and celebrating the sacred First Fruits Ceremony and the living heritage of the Ngoni people of Eastern Province, Zambia.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-raleway">
                <MapPin size={12} className="text-ncwala-gold flex-shrink-0" />
                Chipata, Eastern Province, Zambia
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs font-raleway">
                <Calendar size={12} className="text-ncwala-gold flex-shrink-0" />
                Annually every August
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs font-raleway">
                <Mail size={12} className="text-ncwala-gold flex-shrink-0" />
                info@ncwala.vercel.app
              </div>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-cinzel text-xs uppercase tracking-widest text-ncwala-gold mb-5 pb-2 border-b border-ncwala-gold/20">Discover</h3>
            <ul className="space-y-3">
              {[
                { href: '/history', label: 'History' },
                { href: '/ngoni', label: 'Ngoni People' },
                { href: '/ceremony', label: 'The Ceremony' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/news', label: 'News & Articles' },
              ].map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="font-raleway text-xs text-gray-400 hover:text-ncwala-gold transition-colors uppercase tracking-widest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="font-cinzel text-xs uppercase tracking-widest text-ncwala-gold mb-5 pb-2 border-b border-ncwala-gold/20">Visit</h3>
            <ul className="space-y-3">
              {[
                { href: '/travel', label: 'Getting There' },
                { href: '/accommodation', label: 'Accommodation' },
                { href: '/transport', label: 'Transport' },
                { href: '/directory', label: 'Directory' },
                { href: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="font-raleway text-xs text-gray-400 hover:text-ncwala-gold transition-colors uppercase tracking-widest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ncwala 2026 */}
          <div>
            <h3 className="font-cinzel text-xs uppercase tracking-widest text-ncwala-gold mb-5 pb-2 border-b border-ncwala-gold/20">Ncwala 2026</h3>
            <p className="font-garamond text-gray-400 text-sm leading-relaxed mb-4">
              Preparations are underway for Ncwala 2026. Join thousands of visitors in Chipata this August.
            </p>
            <Link to="/blog/ncwala-2026-preparations-underway" className="btn-secondary text-xs py-2 px-4">
              Learn More
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ncwala-gold/20 pt-8 flex flex-col items-center gap-3 text-center">
          <p className="font-raleway text-xs text-gray-600 uppercase tracking-widest">
            &copy; {currentYear} Ncwala Ceremony. All rights reserved.
          </p>
          <p className="font-raleway text-xs text-gray-600 uppercase tracking-widest">
            Photography by Andy Luki Jr.
          </p>
          <p className="font-raleway text-xs text-gray-600">
            Chipata, Eastern Province, Zambia
          </p>
        </div>
      </div>
    </footer>
  )
}
