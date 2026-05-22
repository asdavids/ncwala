import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Ceremony() {
  return (
    <>
      <Helmet>
        <title>Ncwala Ceremony Guide - Events & Traditions | Zambia</title>
        <meta name="description" content="Complete guide to the Ncwala Ceremony: what to expect, timeline of events, ceremonial traditions, and visitor information." />
        <meta name="keywords" content="Ncwala ceremony, ceremony guide, events, traditions, what to expect, Zambia" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4 text-center">
          The Ncwala Ceremony Guide
        </h1>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Discover the sacred traditions, events, and protocols of the Ncwala Ceremony
        </p>

        {/* What is Ncwala */}
        <section className="bg-ncwala-black text-ncwala-white rounded-lg p-8 mb-16">
          <h2 className="font-cinzel text-3xl mb-6">What is Ncwala?</h2>
          <p className="mb-4">
            Ncwala is the First Fruits Ceremony of the Ngoni people—a sacred celebration that honors the new harvest, gives thanks to ancestors and the Creator, and reaffirms the royal authority of the Ngoni kingdom. The ceremony represents gratitude, renewal, and the continuation of cultural identity.
          </p>
          <p>
            Every element of Ncwala is steeped in significance: from the royal regalia worn by the paramount chief to the specific ceremonial foods prepared, from the dances performed to the protocols observed. Visitors witness centuries of tradition come alive.
          </p>
        </section>

        {/* Timeline */}
        <section className="my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Ceremony Timeline</h2>
          <div className="space-y-6 max-w-3xl">
            {[
              {
                day: 'Opening Day',
                events: 'Royal preparations begin. The paramount chief undergoes ceremonial preparations. Supporters and sub-chiefs gather at the royal palace.',
              },
              {
                day: 'Day 2: Main Ceremony',
                events: 'The central event featuring the paramount chief in full royal regalia. Traditional dances, music performances, and ritual activities commence.',
              },
              {
                day: 'Day 3: Community Celebrations',
                events: 'The ceremony expands to include broader community participation. Traditional foods are shared. Visitors engage with locals and cultural demonstrations.',
              },
              {
                day: 'Day 4: Closing Ceremonies',
                events: 'Final ritual components, blessing ceremonies, and festive celebrations conclude the formal Ncwala events.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-ncwala-gold pl-6 pb-6">
                <h3 className="font-cinzel text-lg text-ncwala-red mb-2">{item.day}</h3>
                <p className="text-gray-700">{item.events}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to Expect */}
        <section className="bg-gray-50 rounded-lg p-8 my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Royal Regalia',
                desc: 'Witness the paramount chief dressed in traditional royal garments—leopard skins, beaded ornaments, and symbolic regalia passed down through generations.',
              },
              {
                title: 'Traditional Dances',
                desc: 'Experience energetic, synchronized performances featuring traditional Ngoni dances. Warriors and community members perform in intricate formations.',
              },
              {
                title: 'Ceremonial Music',
                desc: 'Listen to traditional drums, mbiras, and other instruments. The rhythms guide the ceremony and create an immersive cultural experience.',
              },
              {
                title: 'Ritual Protocols',
                desc: 'Observe carefully executed protocols: the presentation of first fruits, blessing ceremonies, and symbolic actions laden with cultural meaning.',
              },
              {
                title: 'Community Gathering',
                desc: 'Join thousands of Ngoni people in celebration, sharing of traditional foods, and strengthening of community bonds.',
              },
              {
                title: 'Spiritual Significance',
                desc: 'Sense the profound spiritual atmosphere as ancestors are honored and blessings are sought for the year ahead.',
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-cinzel text-lg text-ncwala-red mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visitor Etiquette */}
        <section className="my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Visitor Etiquette</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-4">
              <span className="text-ncwala-gold text-2xl font-bold">✓</span>
              <div>
                <h4 className="font-cinzel text-lg text-ncwala-black">Respectful Attire</h4>
                <p>Wear modest, respectful clothing. Avoid overly casual or revealing attire. Consider wearing colors that complement the ceremony's aesthetic.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-ncwala-gold text-2xl font-bold">✓</span>
              <div>
                <h4 className="font-cinzel text-lg text-ncwala-black">Photography Considerations</h4>
                <p>Always ask permission before photographing individuals or sensitive moments. Some portions may be restricted from photography.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-ncwala-gold text-2xl font-bold">✓</span>
              <div>
                <h4 className="font-cinzel text-lg text-ncwala-black">Protocol & Customs</h4>
                <p>Listen to and follow guidance from local organizers. Avoid sitting higher than the paramount chief. Show respect during ceremonial moments.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-ncwala-gold text-2xl font-bold">✓</span>
              <div>
                <h4 className="font-cinzel text-lg text-ncwala-black">Engagement & Connection</h4>
                <p>Engage respectfully with locals, learn about their traditions, and participate in community activities when invited.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
