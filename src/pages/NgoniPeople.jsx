import React from 'react'
import { Helmet } from 'react-helmet-async'
import gallery2 from '../assets/gallery-2.webp'
import gallery4 from '../assets/gallery-4.webp'

const cultureCards = [
  {
    icon: '👑',
    title: 'Royal Hierarchy',
    content: 'The Ngoni kingdom operates under a paramount chief — the Senior Chief Mpezeni — who is both spiritual and political head. Below him is a structured network of sub-chiefs, headmen, and royal councillors (indunas) who govern different territories. Decisions of significance pass through the royal court, and the chief\'s word carries the authority of the ancestors.',
  },
  {
    icon: '⚔️',
    title: 'Warrior Heritage',
    content: 'Descended from Zulu warriors, the Ngoni maintained an ibutho (regimental) system for centuries. Young men of the same age group trained, worked, and fought together — creating lifelong bonds of brotherhood. This warrior ethic — courage, discipline, loyalty — still permeates Ngoni values today, celebrated vividly during the Ncwala dances.',
  },
  {
    icon: '🥁',
    title: 'Music & Dance',
    content: 'Music is the heartbeat of Ngoni life. Ingoma drums set the rhythm for ceremonies, while traditional songs carry oral history across generations. The Ingoma dance — performed by warriors in full regalia — is one of the most spectacular sights at Ncwala: synchronised, powerful, and deeply moving. Every stomp, every shout carries meaning.',
  },
  {
    icon: '🐆',
    title: 'Royal Regalia',
    content: 'Leopard skin is the mark of Ngoni royalty and high status — only chiefs and senior warriors may wear it. Elaborate beadwork, animal tooth necklaces, feathered headdresses, and ceremonial weapons complete the regalia. Each element carries symbolism: leopard skin for power, teeth for strength, feathers for spiritual connection.',
  },
  {
    icon: '🌾',
    title: 'Agriculture & Land',
    content: 'The Ngoni relationship with the land is sacred. As an agro-pastoral society, cattle represent wealth, status, and spiritual currency. The first fruits of the harvest are not consumed until blessed by the paramount chief — the entire premise of Ncwala. The land is never merely economic; it is the domain of the ancestors.',
  },
  {
    icon: '🙏',
    title: 'Ancestor Veneration',
    content: 'The Ngoni believe that ancestors (amadlozi) remain active participants in the lives of the living. They are consulted through ritual, honoured through ceremony, and invoked for protection and guidance. Ncwala itself is fundamentally an act of ancestral communion — the chief petitions the ancestors for a blessed harvest and a peaceful year.',
  },
]

const vocabulary = [
  { word: 'Ncwala', meaning: 'The First Fruits Ceremony — the sacred annual festival' },
  { word: 'Induna', meaning: 'Royal councillor or military commander' },
  { word: 'Ibutho', meaning: 'Age-regiment — the warrior brotherhood system' },
  { word: 'Amadlozi', meaning: 'Ancestors — the venerated spirits of the departed' },
  { word: 'Ingoma', meaning: 'Sacred drum; also used to refer to the ceremonial dance' },
  { word: 'Isilo', meaning: 'Royal regalia — the sacred symbols of kingship' },
  { word: 'Umvuko', meaning: 'Royal assembly — a gathering convened by the chief' },
  { word: 'Ubuntu', meaning: '"I am because we are" — the philosophy of shared humanity' },
  { word: 'Mpezeni', meaning: 'The royal lineage name of the Ngoni paramount chiefs' },
  { word: 'Zwangendaba', meaning: 'The great leader who led the Ngoni northward from Zululand' },
]

const modernLife = [
  {
    title: 'Education',
    text: 'Eastern Province Ngoni communities have long valued education. Many of Zambia\'s earliest graduates came from mission schools in the Chipata area. Today, Ngoni families are represented across every profession — medicine, law, academia, politics, and business — while maintaining fierce cultural pride.',
  },
  {
    title: 'The Diaspora',
    text: 'Significant Ngoni communities exist in Lusaka, the Copperbelt, South Africa, the UK, and North America. Distance has not diluted identity. Diaspora Ngoni organisations exist worldwide, and many members return to Chipata every August for Ncwala — treating it as an unmissable annual pilgrimage.',
  },
  {
    title: 'Youth & Culture',
    text: 'Young Ngoni people are increasingly active in preserving and promoting their heritage. Social media has created new channels for cultural expression — traditional dances go viral, ceremonial photographs reach global audiences, and young Ngoni proudly identify with their roots in ways previous generations could not have imagined.',
  },
  {
    title: 'Cultural Guardianship',
    text: 'The Mpezeni Royal Establishment maintains formal structures for cultural preservation. Traditional courts still function, initiation practices continue, and the oral traditions — histories, praise poetry (izibongo), and ceremonial songs — are actively taught to younger generations.',
  },
]

export default function NgoniPeople() {
  return (
    <>
      <Helmet>
        <title>The Ngoni People — Culture, Heritage & Identity | Zambia</title>
        <meta name="description" content="Discover the Ngoni people of Eastern Zambia: their warrior origins, royal hierarchy, language, spiritual beliefs, and vibrant contemporary life." />
      </Helmet>

      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={gallery2} alt="Ngoni people celebrating" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-ncwala-black"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-[0.4em] mb-3">People of the Lion</p>
          <h1 className="font-cinzel-decorative text-4xl md:text-6xl text-ncwala-white drop-shadow-lg">The Ngoni People</h1>
          <div className="w-16 h-0.5 bg-ncwala-gold mt-4"></div>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-ncwala-black text-ncwala-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-garamond text-xl md:text-2xl leading-relaxed italic text-gray-200">
            "The Ngoni are not simply a tribe — they are a civilisation. A people who walked from the southern tip of Africa to the Great Lakes, who absorbed nations into their fold, who fought empires and survived, and who celebrate their story every year in the ancient ceremony of Ncwala."
          </p>
          <div className="w-12 h-0.5 bg-ncwala-gold mx-auto mt-6"></div>
        </div>
      </div>

      {/* Who Are the Ngoni */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-3 text-center">Origins & Identity</p>
        <h2 className="font-cinzel text-3xl text-ncwala-black mb-8 text-center">Who Are the Ngoni?</h2>
        <div className="space-y-5 font-garamond text-xl text-gray-700 leading-relaxed">
          <p>
            The Ngoni (also written N'goni or Angoni) are a Bantu-speaking people whose origins lie among the Nguni peoples of South Africa's KwaZulu-Natal region. Their defining historical event was the great northward migration known as the Mfecane — a flight from the wars ignited by the rise of the Zulu Kingdom in the early 19th century.
          </p>
          <p>
            Under the leadership of the legendary Zwangendaba Jere, the Ngoni crossed the Zambezi River during a solar eclipse in 1835, eventually settling in what is now Eastern Province, Zambia. Here, the son of Zwangendaba — Mpezeni — established a powerful kingdom that bears his name to this day.
          </p>
          <p>
            The Ngoni are notable for their policy of cultural absorption: captured and allied peoples were adopted into the kingdom, bringing linguistic and cultural diversity. Today, many people of Chewa, Tumbuka, or mixed heritage identify as Ngoni — cultural identity transcends blood lineage.
          </p>
          <p>
            The population of Ngoni-identifying people in Eastern Province numbers in the hundreds of thousands, with a broader diaspora across Zambia and internationally. Chipata — Eastern Province's capital — serves as the cultural and historical heart of the kingdom.
          </p>
        </div>
      </div>

      {/* Culture Cards */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-3 text-center">What Defines Us</p>
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-12 text-center">Culture & Traditions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureCards.map((card, idx) => (
              <div key={idx} className="bg-white p-6 border-t-4 border-ncwala-gold shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-cinzel text-lg text-ncwala-black mb-3">{card.title}</h3>
                <p className="font-garamond text-gray-700 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-3">The Living Language</p>
            <h2 className="font-cinzel text-3xl text-ncwala-black mb-6">Language & Oral Tradition</h2>
            <div className="space-y-4 font-garamond text-lg text-gray-700 leading-relaxed">
              <p>
                The Ngoni speak Zangoni (Ngoni language), a Bantu language with strong Nguni/Zulu roots. Over centuries of settlement in Eastern Zambia, it absorbed words and structures from Chewa, Tumbuka, and other neighbouring languages, creating a unique hybrid tongue.
              </p>
              <p>
                Zangoni is not merely a language of daily communication — it is a vessel of history. Praise poetry (izibongo) in Zangoni narrates the genealogy of kings, the battles won, and the journeys taken. When an induna recites royal praises at Ncwala, he is performing a living history lesson.
              </p>
              <p>
                Oral tradition remains the primary keeper of Ngoni history. Elders are revered as living libraries. The careful transmission of stories, songs, and protocols across generations is itself a sacred duty.
              </p>
            </div>
          </div>
          <div>
            <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-4">Key Vocabulary</p>
            <div className="bg-ncwala-black rounded-lg overflow-hidden">
              {vocabulary.map((v, idx) => (
                <div key={idx} className={`flex gap-4 px-6 py-4 ${idx % 2 === 0 ? 'bg-ncwala-black' : 'bg-white/5'}`}>
                  <span className="font-cinzel text-ncwala-gold min-w-[120px] text-sm">{v.word}</span>
                  <span className="font-raleway text-gray-300 text-sm">{v.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Photo break */}
      <div className="relative h-64 overflow-hidden">
        <img src={gallery4} alt="Ngoni dancer" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <p className="font-cinzel-decorative text-ncwala-white text-2xl md:text-4xl text-center px-4 drop-shadow-lg">
            "We dance so our ancestors know we have not forgotten them."
          </p>
        </div>
      </div>

      {/* Contemporary Life */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-3 text-center">Today & Tomorrow</p>
        <h2 className="font-cinzel text-3xl text-ncwala-black mb-12 text-center">The Ngoni in the Modern World</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {modernLife.map((item, idx) => (
            <div key={idx} className="border-l-4 border-ncwala-gold pl-6">
              <h3 className="font-cinzel text-xl text-ncwala-black mb-3">{item.title}</h3>
              <p className="font-garamond text-lg text-gray-700 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
