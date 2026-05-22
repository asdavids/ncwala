import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Star, MapPin, Wifi, Utensils } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function Accommodation() {
  const [selectedAccom, setSelectedAccom] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accommodation: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const accommodations = [
    {
      id: 1,
      name: 'Chipata Royal Lodge',
      type: 'Luxury Hotel',
      rating: 5,
      price: '$$$',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop',
      amenities: ['WiFi', 'Restaurant', 'Spa', 'Pool'],
      desc: 'Premium accommodation with royal-inspired decor, excellent cuisine, and impeccable service.',
      contact: '+260 62 123456',
    },
    {
      id: 2,
      name: 'Ncwala Heritage Hotel',
      type: 'Mid-Range Hotel',
      rating: 4,
      price: '$$',
      image: 'https://images.unsplash.com/photo-1568084034509-4eb5e1fa6f79?w=300&h=200&fit=crop',
      amenities: ['WiFi', 'Restaurant', 'Garden', 'Parking'],
      desc: 'Comfortable accommodation celebrating Ngoni culture with traditional artwork and warm hospitality.',
      contact: '+260 62 234567',
    },
    {
      id: 3,
      name: 'Eastern Province Guesthouse',
      type: 'Budget Guesthouse',
      rating: 3,
      price: '$',
      image: 'https://images.unsplash.com/photo-1631049307038-da0ec89d4b10?w=300&h=200&fit=crop',
      amenities: ['WiFi', 'Kitchen', 'Garden', 'Parking'],
      desc: 'Affordable, clean guesthouse ideal for budget-conscious travelers seeking authentic local experience.',
      contact: '+260 62 345678',
    },
    {
      id: 4,
      name: 'Chipata Safari Lodge',
      type: 'Lodge',
      rating: 4,
      price: '$$',
      image: 'https://images.unsplash.com/photo-1586611292717-f828b0db3f4f?w=300&h=200&fit=crop',
      amenities: ['WiFi', 'Restaurant', 'Natural Setting', 'Guided Tours'],
      desc: 'Nature-focused lodge offering authentic African experience with local guides and cultural activities.',
      contact: '+260 62 456789',
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await supabase
        .from('subscribers')
        .insert([{
          email: formData.email,
          name: formData.name,
          interest: 'accommodation-enquiry',
          tag: 'accommodation',
        }])

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          accommodation: '',
          checkIn: '',
          checkOut: '',
          guests: '',
          message: '',
        })
      }, 3000)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <Helmet>
        <title>Accommodation for Ncwala - Hotels, Lodges & Guesthouses | Chipata</title>
        <meta name="description" content="Find accommodation in Chipata for the Ncwala Ceremony. Hotels, lodges, guesthouses with booking inquiries." />
        <meta name="keywords" content="accommodation Chipata, hotels, lodges, guesthouses, Ncwala ceremony booking" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4 text-center">
          Accommodation in Chipata
        </h1>

        {/* Accommodation Grid */}
        <section className="my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Where to Stay</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {accommodations.map((accom) => (
              <div key={accom.id} className="border border-ncwala-gold rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src={accom.image} alt={accom.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-cinzel text-xl text-ncwala-black">{accom.name}</h3>
                      <p className="text-sm text-gray-600">{accom.type}</p>
                    </div>
                    <span className="text-ncwala-gold font-bold">{accom.price}</span>
                  </div>

                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < accom.rating ? 'fill-ncwala-gold text-ncwala-gold' : 'text-gray-300'} />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm mb-4">{accom.desc}</p>

                  <div className="space-y-2 mb-4">
                    {accom.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <Wifi size={14} className="text-ncwala-gold" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-ncwala-red font-cinzel mb-4">{accom.contact}</p>

                  <button
                    onClick={() => setSelectedAccom(accom.id)}
                    className="w-full bg-ncwala-gold text-ncwala-black py-2 rounded hover:bg-yellow-600 transition-colors font-raleway"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form */}
        <section className="bg-gray-50 rounded-lg p-8 my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Accommodation Enquiry</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-ncwala-gold"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-ncwala-gold"
              />
              <select
                value={formData.accommodation}
                onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-ncwala-gold"
              >
                <option value="">Select Accommodation</option>
                {accommodations.map((accom) => (
                  <option key={accom.id} value={accom.name}>{accom.name}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-ncwala-gold"
              />
              <input
                type="date"
                value={formData.checkIn}
                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-ncwala-gold"
              />
              <input
                type="date"
                value={formData.checkOut}
                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-ncwala-gold"
              />
            </div>
            <textarea
              placeholder="Additional Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-ncwala-gold mb-6"
            ></textarea>
            <button
              type="submit"
              className="bg-ncwala-gold text-ncwala-black px-8 py-2 rounded hover:bg-yellow-600 transition-colors font-cinzel"
            >
              Send Enquiry
            </button>
            {submitted && <p className="text-green-600 mt-4">Thank you! We'll contact you soon.</p>}
          </form>
        </section>
      </div>
    </>
  )
}
