import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function NgoniPeople() {
  return (
    <>
      <Helmet>
        <title>Ngoni People - Culture, Language & Traditions | Zambia</title>
        <meta name="description" content="Discover the Ngoni people of Eastern Province, Zambia: their culture, language, royal traditions, and contemporary life." />
        <meta name="keywords" content="Ngoni people, Ngoni culture, Ngoni language, Zambia, Eastern Province, royal traditions" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4 text-center">
          The Ngoni People
        </h1>

        {/* Culture Section */}
        <section className="my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Culture & Traditions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-cinzel text-xl text-ncwala-red mb-4">Royal Hierarchy</h3>
              <p className="text-gray-700 mb-4">
                The Ngoni kingdom maintains a sophisticated system of governance centered on the royal family. The paramount chief (or king) serves as both spiritual and temporal leader, assisted by royal advisors and traditional councils.
              </p>
            </div>
            <div>
              <h3 className="font-cinzel text-xl text-ncwala-red mb-4">Warrior Heritage</h3>
              <p className="text-gray-700 mb-4">
                Descended from the great Zulu warriors, the Ngoni maintain traditions of strength, courage, and honor. These values permeate their social structures, ceremonies, and daily life.
              </p>
            </div>
            <div>
              <h3 className="font-cinzel text-xl text-ncwala-red mb-4">Spiritual Beliefs</h3>
              <p className="text-gray-700 mb-4">
                The Ngoni practice Ubuntu philosophy—"I am because we are"—emphasizing community, interconnectedness, and reverence for ancestors. Spiritual leadership guides the ceremonial calendar.
              </p>
            </div>
            <div>
              <h3 className="font-cinzel text-xl text-ncwala-red mb-4">Artistic Expression</h3>
              <p className="text-gray-700 mb-4">
                Traditional crafts, beadwork, drumming, and dance are integral to Ngoni culture. These art forms tell stories of ancestors, celebrate life events, and preserve historical knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Language Section */}
        <section className="bg-gray-50 rounded-lg p-8 my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Language</h2>
          <p className="text-gray-700 mb-6">
            The Ngoni speak Ngoni (or Zangoni), a Bantu language with strong Zulu influences. The language preserves unique vocabulary related to royal protocols, ceremonial practices, and historical narratives.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-cinzel text-lg text-ncwala-red mb-3">Common Greetings</h4>
              <ul className="space-y-2 text-gray-700 font-raleway text-sm">
                <li><strong>Mwayi:</strong> Hello/Greetings</li>
                <li><strong>Zikomo:</strong> Thank you</li>
                <li><strong>Ndire:</strong> How are you?</li>
                <li><strong>Mungw:</strong> Good morning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-cinzel text-lg text-ncwala-red mb-3">Ceremonial Terms</h4>
              <ul className="space-y-2 text-gray-700 font-raleway text-sm">
                <li><strong>Ncwala:</strong> First fruits ceremony</li>
                <li><strong>Umvuko:</strong> Royal assembly</li>
                <li><strong>Isilo:</strong> Royal regalia</li>
                <li><strong>Indlulamithi:</strong> Royal palace</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contemporary Life */}
        <section className="my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Contemporary Ngoni Life</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Today, the Ngoni people blend traditional and modern ways of life. While many have relocated to urban centers across Zambia and beyond, strong cultural ties remain. The Ngoni maintain their identity through language, ceremonies, and community connections.
            </p>
            <p>
              Education, entrepreneurship, and professional careers are balanced with cultural responsibilities. Young Ngoni pride themselves on being "custodians of culture," maintaining traditions while embracing contemporary opportunities.
            </p>
            <p>
              The Ncwala Ceremony serves as an annual gathering where dispersed Ngoni communities reunite to celebrate their shared heritage, strengthen family bonds, and pass traditions to younger generations.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
