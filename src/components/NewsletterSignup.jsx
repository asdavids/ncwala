import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { Mail } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Insert subscriber
      const { error } = await supabase
        .from('subscribers')
        .insert([{
          email,
          name,
          interest: 'ncwala-newsletter',
          tag: 'newsletter',
        }])

      if (error) throw error

      setMessage('Thank you for subscribing!')
      setEmail('')
      setName('')
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      console.error('Error:', error)
      setMessage('Error subscribing. Please try again.')
      setTimeout(() => setMessage(''), 3000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-r from-ncwala-red to-ncwala-black text-ncwala-white rounded-lg p-8 md:p-12">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Mail size={28} className="text-ncwala-gold" />
        </div>
        <h3 className="font-cinzel text-2xl text-center mb-2">Stay Updated</h3>
        <p className="text-center text-gray-300 text-sm mb-6">
          Get news and updates about the Ncwala Ceremony and Ngoni culture
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-ncwala-black border border-ncwala-gold text-ncwala-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ncwala-gold"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-ncwala-black border border-ncwala-gold text-ncwala-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ncwala-gold"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ncwala-gold text-ncwala-black font-cinzel py-2 rounded hover:bg-yellow-600 transition-colors disabled:opacity-50"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <p className={`text-center text-sm mt-4 ${message.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
