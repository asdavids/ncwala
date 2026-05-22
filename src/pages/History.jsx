import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import gallery1 from '../assets/gallery-1.webp'
import gallery3 from '../assets/gallery-3.webp'
import gallery5 from '../assets/gallery-5.webp'
import gallery9 from '../assets/gallery-9.webp'

const timeline = [
  {
    period: 'c. 1780s',
    title: 'Origins Among the Zulu Nation',
    content: `The Ngoni trace their roots to the Nguni-speaking peoples of present-day KwaZulu-Natal, South Africa. Their ancestors formed part of the great Zulu confederacy, renowned across southern Africa for sophisticated military organisation, cattle culture, and a deeply hierarchical royal system. The Ngoni inherited the regimental (ibutho) system — young men trained together as warriors, bound by loyalty to their king. This warrior identity would define the Ngoni for centuries.`,
    highlight: 'Origin: KwaZulu-Natal, South Africa',
  },
  {
    period: '1819 – 1840s',
    title: 'The Mfecane — The Great Scattering',
    content: `The Mfecane (meaning "the crushing" in Zulu) was a period of widespread chaos and warfare among Bantu peoples of southern Africa. Triggered by the rise of the Zulu Kingdom under Shaka, many groups were displaced and forced to migrate. The Ngoni, under the leadership of Zwangendaba Jere, refused subjugation. They broke away northward — one of the most extraordinary migrations in African history, covering thousands of kilometres across what is now Mozambique, Zimbabwe, Malawi, and Tanzania over several decades.`,
    highlight: 'The Great Trek: ~3,000 km northward',
  },
  {
    period: '1835',
    title: 'Crossing the Zambezi',
    content: `In a moment burned into Ngoni collective memory, Zwangendaba led his people across the Zambezi River during a solar eclipse on 19 November 1835. This crossing is considered one of the most significant events in Ngoni history — a dramatic passage from one world into another. The eclipse was interpreted as a divine sign, affirming Zwangendaba's spiritual authority and the righteousness of the Ngoni journey. Today this moment is recalled in oral histories, songs, and ceremonial remembrance.`,
    highlight: 'Zambezi Crossing: 19 November 1835',
  },
  {
    period: '1848',
    title: 'Death of Zwangendaba & the Kingdom Divides',
    content: `Zwangendaba died around 1848, likely near present-day Tanzania. His death triggered a succession crisis that split the Ngoni into several distinct groups. One branch, under Mpezeni — Zwangendaba's son — turned south and west, eventually settling in Eastern Province of what is now Zambia. Mpezeni's Ngoni established themselves as a formidable power, raiding neighbouring peoples and asserting dominance across a wide region.`,
    highlight: 'Mpezeni establishes Ngoni Kingdom in Zambia',
  },
  {
    period: '1850s – 1890s',
    title: 'The Kingdom of Mpezeni',
    content: `Under Mpezeni I, the Ngoni established a powerful kingdom centred around Chipata (then Fort Jameson). They absorbed and integrated many neighbouring peoples — the Chewa, Tumbuka, and others — into the Ngoni social structure. Captured peoples were assimilated as "Ngoni by adoption," expanding the kingdom's population. The Ngoni conducted raids as far as Malawi and Tanzania, accumulating cattle wealth and maintaining military dominance. The Ncwala ceremony emerged and solidified during this era as the supreme royal and agricultural festival.`,
    highlight: 'Capital: Chipata (Fort Jameson), Eastern Province',
  },
  {
    period: '1898',
    title: 'British Conquest & Resistance',
    content: `The British South Africa Company (BSAC), seeking to control the region's trade routes and resources, launched a military campaign against Mpezeni's kingdom in January 1898. The Ngoni resisted fiercely, but were overwhelmed by superior firepower. Mpezeni I was captured and his eldest son Nsingo was executed. Despite defeat, Mpezeni I was later released and the British, recognising the difficulty of governing without traditional authority, allowed the chieftaincy to continue under colonial oversight. This pragmatic accommodation ensured Ngoni culture survived.`,
    highlight: 'Battle of 1898 — Ngoni resistance against colonial forces',
  },
  {
    period: '1900s – 1963',
    title: 'Colonial Era & Cultural Endurance',
    content: `Under British colonial rule, Northern Rhodesia saw rapid transformation — Christian missions, cash economy, and Western education all arrived in Eastern Province. Yet the Ngoni proved remarkably resilient. The Ncwala ceremony continued annually, sometimes under scrutiny from colonial authorities who viewed large gatherings with suspicion. Missionary influence brought new religion but Ngoni leaders navigated this carefully, integrating Christian elements while preserving the core of their identity. Many Ngoni became educators, clerks, and soldiers — but maintained their cultural pride.`,
    highlight: 'Cultural survival through the colonial era',
  },
  {
    period: '1964',
    title: 'Zambian Independence & Cultural Renaissance',
    content: `When Zambia gained independence on 24 October 1964 under Kenneth Kaunda, it was a moment of profound national celebration. President Kaunda's "One Zambia, One Nation" philosophy actively promoted traditional ceremonies as expressions of Zambian identity. Ncwala was officially recognised as a national cultural event. The ceremony grew in scale and prestige, attracting government officials, diplomats, and tourists. Independence transformed Ncwala from a regional ceremony into a symbol of Zambian cultural pride shared with the world.`,
    highlight: 'Independence: 24 October 1964',
  },
  {
    period: 'Present Day',
    title: 'A Living Tradition for the World',
    content: `Today, Ncwala is one of Zambia's most celebrated cultural events, drawing thousands of visitors annually to Chipata every August. The ceremony is broadcast on national television, documented by international journalists, and studied by scholars of African culture. The current paramount chief, Senior Chief Mpezeni IV, presides over a ceremony that remains as spiritually vital as ever. Young Ngoni people — including those in the diaspora in Europe, North America, and beyond — return home for Ncwala, making it as much a reunion as a religious observance.`,
    highlight: 'Celebrated annually every August in Chipata',
  },
]

const facts = [
  { number: '200+', label: 'Years of Ncwala celebration' },
  { number: '3,000km', label: 'Distance of the Great Ngoni Migration' },
  { number: '1835', label: 'Year of the famous Zambezi Crossing' },
  { number: 'August', label: 'Month of annual Ncwala ceremony' },
]

export default function History() {
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      <Helmet>
        <title>History of Ncwala & the Ngoni People | Zambia</title>
        <meta name="description" content="The full history of the Ngoni people — from their Zulu origins and the Mfecane migration to the founding of the Mpezeni Kingdom and the Ncwala ceremony in Zambia." />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={gallery1} alt="Ngoni warriors" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-ncwala-black"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-[0.4em] mb-3">A Story of Resilience</p>
          <h1 className="font-cinzel-decorative text-4xl md:text-6xl text-ncwala-white drop-shadow-lg">History of Ncwala</h1>
          <div className="w-16 h-0.5 bg-ncwala-gold mt-4"></div>
        </div>
      </div>

      {/* Stat Bar */}
      <div className="bg-ncwala-red text-ncwala-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {facts.map((f, i) => (
            <div key={i}>
              <div className="font-cinzel-decorative text-3xl text-ncwala-gold">{f.number}</div>
              <div className="font-raleway text-xs uppercase tracking-widest mt-1 text-gray-300">{f.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="font-cinzel text-3xl text-ncwala-black mb-6">From the Banks of the Zambezi to the World Stage</h2>
        <p className="font-garamond text-xl text-gray-700 leading-relaxed">
          The story of Ncwala is the story of a people who walked thousands of kilometres, survived conquest and colonialism, and emerged with their culture not just intact — but thriving. It is a story of warrior kings, sacred ceremonies, and an unbreakable bond between land, ancestors, and community.
        </p>
      </div>

      {/* Photo + Intro split */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={gallery5} alt="Ngoni warrior in profile" className="w-full rounded-lg shadow-xl object-cover h-96" />
          <div className="space-y-4 font-garamond text-xl text-gray-700 leading-relaxed">
            <p>The Ngoni warrior is one of the most recognisable figures in southern African history — disciplined, proud, and bound by a code of honour that stretches back to the Zulu heartland.</p>
            <p>Every element of their regalia tells a story: the beaded headband marks lineage, the leopard skin signals rank, the ceremonial weapon connects its bearer to generations of warriors who came before.</p>
            <p>When you watch the ingoma dance at Ncwala, you are watching history move. These are not re-enactors. These are the descendants of Zwangendaba's people, and they remember.</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cinzel text-3xl text-ncwala-black mb-12 text-center">The Full Timeline</h2>
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-ncwala-gold/30"></div>
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-16 md:pl-20">
                  <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full bg-ncwala-gold border-4 border-gray-50 shadow"></div>
                  <div
                    className="bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="font-raleway text-xs text-ncwala-gold uppercase tracking-widest">{item.period}</span>
                          <h3 className="font-cinzel text-xl text-ncwala-black mt-1">{item.title}</h3>
                        </div>
                        <span className="text-ncwala-gold text-2xl flex-shrink-0">{expanded === idx ? '−' : '+'}</span>
                      </div>
                      {expanded === idx && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="font-garamond text-lg text-gray-700 leading-relaxed">{item.content}</p>
                          <div className="mt-4 inline-block bg-ncwala-red/10 border-l-4 border-ncwala-red px-4 py-2">
                            <span className="font-raleway text-xs text-ncwala-red uppercase tracking-widest">{item.highlight}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pull Quote */}
      <div className="bg-ncwala-black text-ncwala-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-ncwala-gold text-6xl font-cinzel-decorative mb-4">"</div>
          <blockquote className="font-garamond text-2xl md:text-3xl italic leading-relaxed">
            We did not survive the Mfecane, the colonial conquest, and independence struggles merely to forget who we are. Ncwala is our memory. It is our future.
          </blockquote>
          <p className="font-raleway text-ncwala-gold text-sm uppercase tracking-widest mt-8">— Ngoni Elder, Eastern Province</p>
        </div>
      </div>

      {/* Legacy Section — two photos */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img src={gallery3} alt="Ngoni elder in royal regalia" className="w-full rounded-lg shadow-xl object-cover h-80" />
          <img src={gallery9} alt="Ngoni warriors with spears" className="w-full rounded-lg shadow-xl object-cover h-80" />
        </div>
        <p className="font-raleway text-xs text-gray-400 text-center mb-12">Photography by @Andy Luki Jr.</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-3">Living Heritage</p>
            <h2 className="font-cinzel text-3xl text-ncwala-black mb-6">The Legacy Lives On</h2>
            <div className="space-y-4 font-garamond text-lg text-gray-700 leading-relaxed">
              <p>
                The Ngoni did not arrive in Eastern Zambia as refugees. They arrived as conquerors — proud, organised, and culturally intact. Their willingness to absorb and integrate neighbouring peoples is why the Ngoni kingdom grew so rapidly and why the Ncwala ceremony resonates beyond strictly Ngoni bloodlines today.
              </p>
              <p>
                The ceremony has evolved but its soul has not changed. The paramount chief still blesses the first fruits. The warriors still dance. The drums still call people home. And every August, Chipata becomes the cultural capital of Africa for a few extraordinary days.
              </p>
            </div>
          </div>
          <div className="space-y-4 font-garamond text-lg text-gray-700 leading-relaxed">
            <p>
              Ncwala is not a museum piece. It is a living, breathing expression of identity — performed with the same sincerity today as it was in the time of Mpezeni I.
            </p>
            <p>
              The warriors in leopard skins carrying spears are not in costume. They are in uniform — the uniform of an unbroken tradition, worn with immense pride by men who know exactly what it means.
            </p>
            <p>
              To witness Ncwala is to understand something profound about human culture: that identity is not accidental. It must be chosen, practised, celebrated, and passed on. The Ngoni have done this for over two centuries without interruption.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
