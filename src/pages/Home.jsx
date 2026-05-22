import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, X } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup'
import heroBg from '../assets/hero-bg.webp'
import gallery1 from '../assets/gallery-1.webp'
import gallery2 from '../assets/gallery-2.webp'
import gallery3 from '../assets/gallery-3.webp'
import gallery4 from '../assets/gallery-4.webp'
import gallery5 from '../assets/gallery-5.webp'
import gallery11 from '../assets/gallery-11.webp'

const galleryImages = [
  { src: gallery1, caption: 'Warriors in procession' },
  { src: gallery2, caption: 'The spirit of celebration' },
  { src: gallery3, caption: 'Royal regalia & tradition' },
  { src: gallery4, caption: 'The dance of the ancestors' },
  { src: gallery5, caption: "A warrior's gaze" },
  { src: gallery11, caption: 'Joy of Ncwala' },
]

export default function Home() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const ncwalaDate = new Date(2026, 7, 15)
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = ncwalaDate - now
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      <Helmet>
        <title>Ncwala Ceremony - First Fruits of the Ngoni People | Zambia</title>
        <meta name="description" content="Welcome to the Ncwala Ceremony, the First Fruits Festival of the Ngoni people in Eastern Province, Zambia." />
        <meta property="og:title" content="Ncwala Ceremony - First Fruits of the Ngoni People" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', 'name': 'Ncwala Ceremony', 'url': 'https://ncwala.vercel.app' })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="hero" style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: 'center right',
        backgroundSize: 'cover',
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-left text-ncwala-white py-32 w-full">
          <p className="font-raleway text-ncwala-gold text-sm uppercase tracking-[0.3em] mb-6">Honoring Our Heritage</p>
          <h1 className="font-cinzel-decorative text-6xl md:text-8xl mb-4 drop-shadow-lg leading-tight">N'cwala</h1>
          <div className="w-16 h-0.5 bg-ncwala-gold mb-8"></div>
          <p className="font-cinzel text-xl md:text-2xl text-ncwala-gold mb-4 drop-shadow-lg">The First Fruits Ceremony of the Ngoni People</p>
          <p className="text-base md:text-lg max-w-md drop-shadow-lg text-gray-200 mb-10">
            Celebrating the wisdom, strength, and spirit of our ancestors. Preserving culture. Inspiring generations.
          </p>
          <a href="/history" className="inline-block bg-ncwala-gold text-ncwala-black font-raleway font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-ncwala-white transition-colors duration-300">
            Discover Our Story
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="text-ncwala-white animate-bounce" size={32} />
        </div>
      </section>

      {/* 2026 Banner */}
      <section className="bg-ncwala-gold text-ncwala-black py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="font-raleway text-sm font-bold uppercase tracking-widest">
            Ncwala 2026 — Preparations Are Underway. Chipata, Eastern Province, Zambia.
          </p>
          <a href="/blog/ncwala-2026-preparations-underway" className="font-raleway text-xs uppercase tracking-widest underline hover:no-underline whitespace-nowrap">
            Read More
          </a>
        </div>
      </section>

      {/* Countdown */}
      <section className="bg-ncwala-red text-ncwala-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-raleway text-xs uppercase tracking-[0.3em] text-ncwala-gold mb-2">Chipata, Eastern Province, Zambia</p>
          <h2 className="font-cinzel text-2xl mb-8">Time Until Ncwala 2026</h2>
          <div className="grid grid-cols-4 gap-3 max-w-xl mx-auto">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds },
            ].map((item) => (
              <div key={item.label} className="relative group">
                <div className="bg-ncwala-black rounded-lg p-4 border border-ncwala-gold/20 group-hover:border-ncwala-gold transition-colors duration-300 shadow-lg"
                  style={{ transform: 'perspective(400px) rotateX(8deg)', transformStyle: 'preserve-3d' }}>
                  <div className="font-cinzel-decorative text-3xl md:text-4xl text-ncwala-gold mb-1 tabular-nums">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="font-raleway text-xs uppercase tracking-widest text-gray-400">{item.label}</div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                </div>
                {/* Shadow beneath for 3D depth */}
                <div className="h-1 mx-2 bg-black/40 rounded-b-lg blur-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="font-cinzel text-4xl text-ncwala-black mb-12 text-center">What is Ncwala?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Royal Heritage', description: 'Ncwala is deeply rooted in the royal traditions of the Ngoni kingdom, maintaining centuries of cultural practices and ceremonial protocols.' },
            { title: 'First Fruits Festival', description: "The ceremony celebrates the first harvest, giving thanks for the year's bounty and seeking blessings for future harvests." },
            { title: 'Cultural Celebration', description: 'Featuring traditional dances, music, royal regalia, and community gatherings that unite the Ngoni people and visitors from around the world.' },
          ].map((item, idx) => (
            <div key={idx} className="border-l-4 border-ncwala-gold pl-6">
              <h3 className="font-cinzel text-2xl text-ncwala-black mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Highlights */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-cinzel text-4xl text-ncwala-black mb-4 text-center">Photo Highlights</h2>
          <p className="font-raleway text-gray-500 text-center mb-12 text-sm uppercase tracking-widest">Photography by Andy Luki Jr.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative overflow-hidden cursor-pointer group aspect-[3/4]" onClick={() => setLightbox(idx)}>
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <p className="font-raleway text-white text-sm px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-ncwala-gold"><X size={32} /></button>
          <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].caption} className="max-h-[90vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-6 font-cinzel text-ncwala-gold text-sm tracking-widest">{galleryImages[lightbox].caption}</p>
        </div>
      )}

      {/* FAQ */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="font-cinzel text-4xl text-ncwala-black mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            { q: 'When is the Ncwala Ceremony held?', a: 'Ncwala 2026 takes place in August in Chipata, Eastern Province. Specific dates are announced by the Ngoni royal family.' },
            { q: 'Where does the ceremony take place?', a: 'The ceremony is held in Chipata, Eastern Province, Zambia, at the royal palace and surrounding areas.' },
            { q: 'Can visitors attend Ncwala?', a: 'Yes, visitors from around the world are welcome. Book accommodation and transport well in advance.' },
            { q: 'What should I bring?', a: 'Respectful attire, comfortable walking shoes, sun protection, and a camera. Arrive early to secure good viewing spots.' },
            { q: 'Is photography allowed?', a: 'Photography is generally permitted during public ceremonies. Always respect local customs and ask permission before photographing individuals.' },
          ].map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-6">
              <h3 className="font-cinzel text-lg text-ncwala-red mb-2">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-ncwala-red to-ncwala-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}
