import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { supabase } from '../lib/supabase'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'general',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Store submission
      await supabase
        .from('subscribers')
        .insert([{
          email: formData.email,
          name: formData.name,
          interest: formData.type,
          tag: formData.type,
        }])

      // Would call send-email-alert edge function here
      // For now, just show success
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          type: 'general',
          subject: '',
          message: '',
        })
      }, 3000)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact - Ncwala Ceremony Information & Inquiries</title>
        <meta name="description" content="Get in touch with Ncwala for general inquiries, sponsorship, media relations, or advertising opportunities." />
        <meta name="keywords" content="contact, inquiry, sponsorship, media, advertising" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 my-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-cinzel text-2xl text-ncwala-black mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-cinzel text-lg text-ncwala-red mb-2">General Inquiries</h3>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:info@ncwala.com" className="text-ncwala-gold hover:underline">info@ncwala.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> <a href="tel:+260211123456" className="text-ncwala-gold hover:underline">+260 211 123456</a>
                </p>
              </div>

              <div>
                <h3 className="font-cinzel text-lg text-ncwala-red mb-2">Sponsorship & Partnerships</h3>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:sponsors@ncwala.com" className="text-ncwala-gold hover:underline">sponsors@ncwala.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> <a href="tel:+260211234567" className="text-ncwala-gold hover:underline">+260 211 234567</a>
                </p>
              </div>

              <div>
                <h3 className="font-cinzel text-lg text-ncwala-red mb-2">Media Relations</h3>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:media@ncwala.com" className="text-ncwala-gold hover:underline">media@ncwala.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> <a href="tel:+260211345678" className="text-ncwala-gold hover:underline">+260 211 345678</a>
                </p>
              </div>

              <div>
                <h3 className="font-cinzel text-lg text-ncwala-red mb-2">Advertising & Marketing</h3>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:marketing@ncwala.com" className="text-ncwala-gold hover:underline">marketing@ncwala.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> <a href="tel:+260211456789" className="text-ncwala-gold hover:underline">+260 211 456789</a>
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mt-6">
                <h4 className="font-cinzel text-ncwala-red mb-2">Office Location</h4>
                <p className="text-sm text-gray-700">
                  Ncwala Ceremony Office<br />
                  Chipata, Eastern Province<br />
                  Zambia
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-cinzel text-2xl text-ncwala-black mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ncwala-gold"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ncwala-gold"
              />
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ncwala-gold"
              >
                <option value="general">General Inquiry</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="media">Media Relations</option>
                <option value="advertising">Advertising</option>
              </select>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ncwala-gold"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ncwala-gold"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-ncwala-gold text-ncwala-black py-2 rounded-lg hover:bg-yellow-600 transition-colors font-cinzel disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {submitted && (
                <p className="text-green-600 text-center font-cinzel">Thank you! We'll respond soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
