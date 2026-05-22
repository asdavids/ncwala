import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  const businesses = [
    {
      id: 1,
      name: 'Zambian Heritage Tours',
      category: 'Tour Operator',
      location: 'Chipata Town',
      phone: '+260 962 123456',
      email: 'info@heritag tours.zm',
      description: 'Specializes in Ncwala and cultural tours',
    },
    {
      id: 2,
      name: 'The Royal Kitchen',
      category: 'Restaurant',
      location: 'Chipata CBD',
      phone: '+260 962 234567',
      email: 'dining@royalkitchen.zm',
      description: 'Traditional Ngoni and fusion cuisine',
    },
    {
      id: 3,
      name: 'Ngoni Crafts Co-operative',
      category: 'Crafts',
      location: 'Market Street',
      phone: '+260 962 345678',
      email: 'crafts@ngoni.zm',
      description: 'Local artisans and traditional crafts',
    },
    {
      id: 4,
      name: 'Eastern Province Hospital',
      category: 'Healthcare',
      location: 'Chipata',
      phone: '+260 962 456789',
      email: 'info@eph.zm',
      description: '24-hour medical services',
    },
    {
      id: 5,
      name: 'Chipata Visitors Centre',
      category: 'Information',
      location: 'Main Street',
      phone: '+260 962 567890',
      email: 'visitors@chipata.zm',
      description: 'Tourist information and assistance',
    },
    {
      id: 6,
      name: 'Cultural Museum',
      category: 'Museum',
      location: 'Royal Palace Road',
      phone: '+260 962 678901',
      email: 'museum@ngoni.zm',
      description: 'Ngoni history and cultural artifacts',
    },
  ]

  const categories = ['all', 'Tour Operator', 'Restaurant', 'Crafts', 'Healthcare', 'Information', 'Museum']

  const filtered = businesses.filter((b) => {
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         b.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || b.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Helmet>
        <title>Directory - Local Businesses & Services in Chipata</title>
        <meta name="description" content="Directory of tour operators, restaurants, hotels, and local businesses in Chipata for Ncwala." />
        <meta name="keywords" content="directory, businesses, tour operators, restaurants, Chipata" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4 text-center">
          Business Directory
        </h1>

        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search businesses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-ncwala-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-ncwala-gold"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded font-raleway transition-colors ${
                  filterCategory === cat
                    ? 'bg-ncwala-gold text-ncwala-black'
                    : 'border border-ncwala-gold text-ncwala-black hover:bg-ncwala-gold/10'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((business) => (
            <div key={business.id} className="border border-ncwala-gold rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-cinzel text-lg text-ncwala-black">{business.name}</h3>
                  <span className="text-xs bg-ncwala-gold/20 text-ncwala-red px-2 py-1 rounded font-raleway">
                    {business.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4">{business.description}</p>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-ncwala-gold" />
                  <span>{business.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-ncwala-gold" />
                  <a href={`tel:${business.phone}`} className="hover:text-ncwala-gold transition-colors">
                    {business.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-ncwala-gold" />
                  <a href={`mailto:${business.email}`} className="hover:text-ncwala-gold transition-colors">
                    {business.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 font-cinzel">No businesses found matching your search</p>
          </div>
        )}
      </div>
    </>
  )
}
