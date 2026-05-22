import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import NewsletterSignup from '../components/NewsletterSignup'
import SkeletonLoader from '../components/SkeletonLoader'

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Calculate countdown to next Ncwala (typically August)
    const today = new Date()
    const currentYear = today.getFullYear()
    // Ncwala is typically in August
    let ncwalaDate = new Date(currentYear, 7, 15) // August 15

    if (today > ncwalaDate) {
      ncwalaDate = new Date(currentYear + 1, 7, 15)
    }

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

  return (
    <>
      <Helmet>
        <title>Ncwala Ceremony - First Fruits of the Ngoni People | Zambia</title>
        <meta name="description" content="Welcome to the Ncwala Ceremony, the First Fruits Festival of the Ngoni people in Eastern Province, Zambia. Explore royal traditions, culture, and ceremonial celebrations." />
        <meta name="keywords" content="Ncwala, Ngoni, First Fruits, Ceremony, Zambia, Eastern Province, Chipata, Cultural Heritage" />
        <meta property="og:title" content="Ncwala Ceremony - First Fruits of the Ngoni People" />
        <meta property="og:description" content="Discover the sacred Ncwala Ceremony, a celebration of the Ngoni people's royal heritage and agricultural traditions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'Ncwala Ceremony',
            'url': 'https://ncwala.vercel.app',
          })}
        </script>
      </Helmet>

      {/* Hero Section with Parallax */}
      <section className="hero bg-gradient-to-b from-ncwala-black to-gray-900" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=630&fit=crop")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-ncwala-white py-32">
          <h1 className="font-cinzel-decorative text-6xl md:text-7xl mb-4 drop-shadow-lg">
            Ncwala
          </h1>
          <p className="font-cinzel text-2xl md:text-3xl text-ncwala-gold mb-8 drop-shadow-lg">
            The First Fruits Ceremony of the Ngoni People
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
            A sacred celebration honoring the royal heritage, agricultural traditions, and cultural identity of the Ngoni kingdom in Eastern Province, Zambia
          </p>
          <div className="mt-12">
            <ChevronDown className="mx-auto animate-bounce" size={32} />
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-ncwala-red text-ncwala-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-cinzel text-4xl mb-12">Time Until Next Ncwala</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds },
            ].map((item) => (
              <div key={item.label} className="bg-ncwala-black rounded-lg p-6">
                <div className="font-cinzel-decorative text-4xl mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="font-raleway text-sm uppercase tracking-widest">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="font-cinzel text-4xl text-ncwala-black mb-12 text-center">
          What is Ncwala?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Royal Heritage',
              description: 'Ncwala is deeply rooted in the royal traditions of the Ngoni kingdom, maintaining centuries of cultural practices and ceremonial protocols.',
            },
            {
              title: 'First Fruits Festival',
              description: 'The ceremony celebrates the first harvest, giving thanks for the year\'s bounty and seeking blessings for future harvests.',
            },
            {
              title: 'Cultural Celebration',
              description: 'Featuring traditional dances, music, royal regalia, and community gatherings that unite the Ngoni people and visitors from around the world.',
            },
          ].map((item, idx) => (
            <div key={idx} className="border-l-4 border-ncwala-gold pl-6">
              <h3 className="font-cinzel text-2xl text-ncwala-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Highlights */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-cinzel text-4xl text-ncwala-black mb-12 text-center">
            Photo Highlights
          </h2>
          <SkeletonLoader count={4} variant="gallery" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="font-cinzel text-4xl text-ncwala-black mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              q: 'When is the Ncwala Ceremony held?',
              a: 'Ncwala typically occurs in August each year, with specific dates announced by the Ngoni royal family. The exact timing aligns with the harvest season and royal calendars.',
            },
            {
              q: 'Where does the ceremony take place?',
              a: 'The ceremony is held in Chipata, Eastern Province, Zambia, at the royal palace and surrounding areas where traditional events unfold.',
            },
            {
              q: 'Can visitors attend Ncwala?',
              a: 'Yes, visitors from around the world are welcome to attend. We recommend booking accommodation and transport well in advance, as the event attracts many guests.',
            },
            {
              q: 'What should I bring to the ceremony?',
              a: 'Bring respectful attire, comfortable walking shoes, sun protection, and a camera. Guides recommend arriving early to secure good viewing spots.',
            },
            {
              q: 'Is photography allowed?',
              a: 'Photography is generally permitted during public ceremonies, but always respect local customs and ask permission before photographing individuals.',
            },
          ].map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-6">
              <h3 className="font-cinzel text-lg text-ncwala-red mb-2">
                {item.q}
              </h3>
              <p className="text-gray-700">
                {item.a}
              </p>
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
