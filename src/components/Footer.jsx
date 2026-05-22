import React from 'react'
import { Link } from 'react-router-dom'
import { Share2, Heart, Music, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ncwala-black text-ncwala-white mt-20 border-t border-ncwala-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-cinzel text-ncwala-gold mb-4">About Ncwala</h3>
            <p className="text-sm text-gray-300">
              Preserving and celebrating the rich cultural heritage of the Ngoni people and their sacred First Fruits Ceremony.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-ncwala-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ceremony" className="text-gray-300 hover:text-ncwala-gold transition-colors">Ceremony Guide</Link></li>
              <li><Link to="/history" className="text-gray-300 hover:text-ncwala-gold transition-colors">History</Link></li>
              <li><Link to="/travel" className="text-gray-300 hover:text-ncwala-gold transition-colors">Travel</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-ncwala-gold transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cinzel text-ncwala-gold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Chipata, Eastern Province</li>
              <li>Zambia</li>
              <li><a href="mailto:info@ncwala.com" className="hover:text-ncwala-gold transition-colors">info@ncwala.com</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-cinzel text-ncwala-gold mb-4">Follow</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-ncwala-gold transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ncwala-gold transition-colors">
                <Music size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ncwala-gold transition-colors">
                <Heart size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ncwala-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ncwala-gold/30 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Ncwala Ceremony. All rights reserved. | <a href="/privacy" className="hover:text-ncwala-gold">Privacy Policy</a> | <a href="/terms" className="hover:text-ncwala-gold">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
