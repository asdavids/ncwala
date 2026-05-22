import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function History() {
  return (
    <>
      <Helmet>
        <title>History of Ncwala & Ngoni People | Zambia</title>
        <meta name="description" content="Explore the rich history of the Ncwala Ceremony and the Ngoni people of Eastern Province, Zambia, from their origins to present day." />
        <meta name="keywords" content="Ncwala history, Ngoni people, Zambia history, First Fruits, royal heritage" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4">
            History of Ncwala
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The Ncwala Ceremony stands as a living testament to the enduring cultural heritage and royal traditions of the Ngoni people
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {[
            {
              period: '18th Century',
              title: 'Ngoni Origins & Migration',
              content: 'The Ngoni people trace their origins to the great Zulu nation of South Africa under the leadership of legendary rulers. They were known for their sophisticated military organization and cultural practices.',
            },
            {
              period: '19th Century',
              title: 'Migration to Eastern Province',
              content: 'During the Mfecane (the great scattering), the Ngoni migrated northward, eventually settling in what is now Eastern Province, Zambia. Under their leaders, they established a powerful kingdom with Chipata as their royal center.',
            },
            {
              period: 'Colonial Era',
              title: 'Preservation Through Change',
              content: 'Even during British colonial rule, the Ngoni maintained their cultural identity and ceremonies. Ncwala continued to be celebrated annually, adapting to changing times while preserving core traditions.',
            },
            {
              period: '1964-Present',
              title: 'Independent Zambia',
              content: 'Following independence, Ncwala flourished as a celebration of Zambian cultural diversity. The ceremony has grown to attract visitors from across the continent and around the world, becoming a symbol of national pride.',
            },
          ].map((item, idx) => (
            <div key={idx} className="border-l-4 border-ncwala-gold pl-8 pb-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="font-cinzel text-ncwala-red font-bold">{item.period}</span>
              </div>
              <h3 className="font-cinzel text-2xl text-ncwala-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Key Facts */}
        <div className="bg-gray-50 rounded-lg p-8 my-16">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-8">Key Historical Facts</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-ncwala-gold font-bold mt-1">•</span>
              <span>The Ncwala Ceremony has been celebrated for over 200 years as the sacred first fruits festival</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ncwala-gold font-bold mt-1">•</span>
              <span>The ceremony remains one of the most significant cultural events in Southern Africa</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ncwala-gold font-bold mt-1">•</span>
              <span>UNESCO recognizes Ncwala as an important cultural heritage practice requiring preservation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-ncwala-gold font-bold mt-1">•</span>
              <span>The royal protocols and practices have remained remarkably consistent across generations</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
