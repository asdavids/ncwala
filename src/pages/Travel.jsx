import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Plane, MapPin, AlertCircle } from 'lucide-react'

export default function Travel() {
  return (
    <>
      <Helmet>
        <title>Travel to Ncwala - Getting to Chipata, Eastern Province | Zambia</title>
        <meta name="description" content="Complete travel guide to Chipata for the Ncwala Ceremony. Getting there, best times to visit, and Eastern Province travel tips." />
        <meta name="keywords" content="Chipata, Eastern Province, travel guide, getting to Ncwala, Zambia travel" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4 text-center">
          Travel Guide to Ncwala
        </h1>

        {/* Getting to Chipata */}
        <section className="my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Getting to Chipata</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Plane className="w-12 h-12 text-ncwala-gold" />,
                title: 'By Air',
                desc: 'Chipata Airport receives flights from Lusaka and other major cities. See Transport page for airline details.',
              },
              {
                icon: <MapPin className="w-12 h-12 text-ncwala-gold" />,
                title: 'By Road',
                desc: 'Chipata is 600km from Lusaka (8-10 hours drive via M10 highway). Buses and private vehicles available.',
              },
              {
                icon: <AlertCircle className="w-12 h-12 text-ncwala-gold" />,
                title: 'Travel Tips',
                desc: 'Book transport early during ceremony season. Carry cash for tolls and incidentals. Roads are generally well-maintained.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-ncwala-gold rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-cinzel text-lg text-ncwala-black mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Chipata */}
        <section className="bg-gray-50 rounded-lg p-8 my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-6">About Chipata</h2>
          <p className="text-gray-700 mb-4">
            Chipata is the capital of Eastern Province and home to approximately 80,000 people. Situated 550 meters above sea level, it enjoys a pleasant subtropical climate with cooler temperatures than other parts of Zambia.
          </p>
          <p className="text-gray-700">
            The town serves as the cultural and administrative center of the Ngoni kingdom. It offers modern amenities including banking, healthcare, markets, and restaurants alongside traditional markets and cultural sites.
          </p>
        </section>

        {/* Eastern Province Tips */}
        <section className="my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Eastern Province Travel Tips</h2>
          <div className="space-y-4">
            {[
              { title: 'Best Time to Visit', desc: 'During ceremony season (August) the weather is pleasant. Avoid rainy season (November-April) when roads may be impassable.' },
              { title: 'Currency', desc: 'Zambian Kwacha (ZMW) is the local currency. ATMs available in Chipata. USD and other major currencies accepted at larger businesses.' },
              { title: 'Health Precautions', desc: 'Get vaccinated for yellow fever, typhoid, and hepatitis A. Malaria precautions recommended. Tap water is generally safe in Chipata.' },
              { title: 'Language', desc: 'English widely spoken. Local languages include Ngoni, Chewa, and other Bantu languages. Learn a few greetings!' },
              { title: 'Security', desc: 'Chipata is generally safe. Avoid walking alone at night. Keep valuables secure. Use registered taxis.' },
              { title: 'What to Pack', desc: 'Lightweight, breathable clothing. Comfortable walking shoes. Sun protection. Insect repellent. Camera. Respectful attire for ceremonies.' },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-ncwala-gold pl-6 pb-4">
                <h3 className="font-cinzel text-lg text-ncwala-red mb-1">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Planning */}
        <section className="bg-ncwala-black text-ncwala-white rounded-lg p-8 mt-16">
          <h2 className="font-cinzel text-2xl mb-4">Planning Your Visit?</h2>
          <p className="mb-4">
            For detailed travel assistance, updated ceremony dates, and accommodation recommendations, contact our travel coordinator or visit the Contact page.
          </p>
          <a href="/contact" className="inline-block bg-ncwala-gold text-ncwala-black px-6 py-2 rounded font-cinzel hover:bg-yellow-600 transition-colors">
            Get Travel Assistance
          </a>
        </section>
      </div>
    </>
  )
}
