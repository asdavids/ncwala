import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import gallery1 from '../assets/gallery-1.webp'
import gallery2 from '../assets/gallery-2.webp'
import gallery3 from '../assets/gallery-3.webp'
import gallery4 from '../assets/gallery-4.webp'
import gallery6 from '../assets/gallery-6.webp'
import gallery7 from '../assets/gallery-7.webp'
import gallery9 from '../assets/gallery-9.webp'

const phases = [
 {
 phase: 'Phase 1',
 name: 'Kucekelwa — Preparation',
 timing: '2–3 Weeks Before',
 colour: 'border-yellow-600',
 description: `The preparation phase begins weeks before the main ceremony. Royal messengers (izinduna) are dispatched across the kingdom announcing the date of Ncwala. Sub-chiefs and headmen begin assembling their delegations. The paramount chief's royal household undergoes ritual purification — strict dietary and behavioural protocols are observed. Sacred herbs are gathered from across the kingdom and from symbolic locations connected to the Ngoni ancestral homelands.`,
 rituals: ['Royal purification begins', 'Messengers dispatched to all sub-chiefdoms', 'Sacred herbs gathered', 'Warriors begin assembly', 'Royal cattle selected'],
 },
 {
 phase: 'Phase 2',
 name: 'Ukwanda — Gathering of the People',
 timing: 'Days Before the Ceremony',
 colour: 'border-blue-600',
 description: `In the days before the main ceremony, people converge on Chipata from across Eastern Province and beyond. Sub-chiefs arrive with their retinues in full ceremonial dress. The royal palace grounds fill with warriors, elders, and families. The Ngoni diaspora — from Lusaka, the Copperbelt, and abroad — return home. Drumming and singing fill the air as the kingdom reassembles for its most sacred annual gathering.`,
 rituals: ['Warriors selected for water journey', 'Sacred rivers visited', 'Water collected in ceremonial vessels', 'Return journey with ritual observances', 'Water presented to royal household'],
 },
 {
 phase: 'Phase 3',
 name: 'Ingoma — The Great Gathering',
 timing: 'Opening Day',
 colour: 'border-ncwala-gold',
 description: `The main ceremony opens with the Grand Gathering — thousands of people assembling at the royal palace grounds in Chipata. Sub-chiefs arrive with their retinues in full ceremonial dress. The sight of dozens of chiefs and thousands of warriors gathering is spectacular. The paramount chief is prepared in the royal enclosure, unseen by the public until the appointed moment. Drums begin — the ingoma rhythm that has called the Ngoni to assembly for generations.`,
 rituals: ['Sub-chiefs arrive in formal procession', 'Warriors take positions', 'Ingoma drums begin', 'Royal preparations in enclosure', 'Spectators and visitors welcome'],
 },
 {
 phase: 'Phase 4',
 name: 'Ukuphuma kwenkosi — The Chief Emerges',
 timing: 'Main Day — Morning',
 colour: 'border-ncwala-red',
 description: `The most anticipated moment of Ncwala: the paramount chief emerges in full royal regalia. He wears leopard skins, elaborate beadwork, and carries ceremonial weapons. His appearance is announced by a distinctive drum pattern and the ululations of the crowd. The chief moves with deliberate ceremony — his every step, gesture, and expression observed and interpreted. He takes his position before the assembled thousands and the formal ceremonies begin. Silence falls over the crowd.`,
 rituals: ['Royal drums announce emergence', 'Paramount chief in full regalia', 'Formal greetings from sub-chiefs', 'Ancestral prayers and invocations', 'Blessing of the gathering'],
 },
 {
 phase: 'Phase 5',
 name: 'Ukudla Kwenkosi — The First Fruits',
 timing: 'Main Day — Midday',
 colour: 'border-green-700',
 description: `The central ritual of Ncwala: the paramount chief consumes the first fruits of the new harvest — maize, sorghum, and other crops — before anyone else in the kingdom may eat them. This act simultaneously gives thanks to the ancestors for the harvest, seeks blessing for the year ahead, and affirms the chief's spiritual authority over the land and its people. Until the chief has performed this ritual, the new crops are considered spiritually unripe and are not consumed. After the ritual, feasting begins.`,
 rituals: ['First fruits presented to the chief', 'Ancestral prayers over the harvest', 'Chief consumes symbolic portions', 'Declaration that crops are blessed', 'Community feasting commences'],
 },
 {
 phase: 'Phase 6',
 name: 'Ingoma Yokugida — The War Dances',
 timing: 'Main Day — Afternoon',
 colour: 'border-orange-600',
 description: `The war dances are the most visually spectacular element of Ncwala. Warriors in full regalia — leopard skins, feathered headdresses, carrying shields and traditional weapons — perform the ingoma dance in massed formations before the chief. These dances re-enact battles, celebrate victories, and demonstrate the continued martial prowess of the Ngoni. The choreography is complex and passes down through generations. The thundering of hundreds of feet striking the earth simultaneously creates an almost physical sensation.`,
 rituals: ['Warriors assemble in regiments', 'Ingoma dance performed before the chief', 'Traditional battle songs', 'Praise poetry (izibongo) recited', 'Individual warriors display prowess'],
 },
 {
 phase: 'Phase 7',
 name: 'Isigqi — Community Celebration',
 timing: 'Day 2–3',
 colour: 'border-purple-600',
 description: `The final phase opens the celebration to the entire community. The strict royal protocols relax somewhat and the celebrations become more festive. Traditional foods are shared generously. Beer brewed from sorghum is distributed. Music, dance, and storytelling continue through the night. Families reunite. Visitors from across Zambia and the world are welcomed into homesteads. Elders tell stories. Children learn. The Ngoni diaspora who have returned embrace their homecoming.`,
 rituals: ['Community feasting', 'Traditional sorghum beer shared', 'Storytelling and cultural sharing', 'Night music and dancing', 'Farewells and blessings for the year ahead'],
 },
]

const etiquette = [
 { icon: '', rule: 'Dress Respectfully', detail: 'Modest, smart attire is expected. Avoid shorts, revealing clothing, or casually dressed. Smart casual or traditional-inspired clothing is ideal. Wearing Zambian chitenge fabric is warmly appreciated.' },
 { icon: '', rule: 'Photography', detail: 'Photography is permitted in general viewing areas. Never photograph the paramount chief without permission. Avoid pointing cameras at sensitive ritual moments. Always ask before photographing individuals close-up.' },
 { icon: '', rule: 'Silence When Required', detail: 'When the paramount chief is performing rituals or when traditional prayers are spoken, absolute silence is expected. Follow the crowd\'s cues. Do not talk, move, or use your phone during these moments.' },
 { icon: '', rule: 'Seating & Positioning', detail: 'Never sit higher than the paramount chief. If seated on the ground, do not raise yourself suddenly. Designated areas exist for visitors — follow ushers\' guidance on where to stand or sit.' },
 { icon: '', rule: 'Accept Hospitality', detail: 'If offered traditional food or drink by local families, it is respectful and joyful to accept. Ncwala hospitality is generous — participating in shared meals connects you to the community.' },
 { icon: '️', rule: 'Engage Curiously', detail: 'Ask questions — Ngoni people are proud of their heritage and happy to explain traditions to genuine visitors. Approach with curiosity and humility, not as a tourist spectacle-seeker.' },
]

export default function Ceremony() {
 const [activePhase, setActivePhase] = useState(0)

 return (
 <>
 <Helmet>
 <title>The Ncwala Ceremony — A Complete Guide | Zambia</title>
 <meta name="description" content="Everything you need to know about the Ncwala First Fruits Ceremony: its spiritual significance, the seven phases, what to expect, and how to attend respectfully." />
 </Helmet>

 {/* Hero — aerial dance shot */}
 <div className="relative h-72 md:h-[500px] overflow-hidden">
 <img src={gallery7} alt="Ncwala ceremony dance" className="w-full h-full object-cover object-center" />
 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-ncwala-black"></div>
 <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
 <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-[0.4em] mb-3">The Sacred First Fruits</p>
 <h1 className="font-cinzel-decorative text-4xl md:text-6xl text-ncwala-white drop-shadow-lg">The Ncwala Ceremony</h1>
 <div className="w-16 h-0.5 bg-ncwala-gold mt-4"></div>
 </div>
 </div>

 {/* What is Ncwala */}
 <div className="bg-ncwala-black text-ncwala-white py-12 md:py-20 px-4 gold-top-edge ngoni-pattern">
 <div className="max-w-4xl mx-auto">
 <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-3 text-center">Understanding the Ceremony</p>
 <h2 className="font-cinzel text-xl md:text-3xl mb-8 text-center section-heading">What is Ncwala?</h2>
 <div className="space-y-5 font-garamond text-xl text-gray-200 leading-relaxed">
 <p>Ncwala — sometimes spelled N'cwala or Nc'wala — is the First Fruits Ceremony of the Ngoni people of Eastern Province, Zambia. It is simultaneously an agricultural festival, a royal ritual, an ancestral communion, and a cultural celebration of the highest order.</p>
 <p>At its core, Ncwala embodies a profound belief: the harvest belongs first to the ancestors and to the king who represents them. Before any Ngoni may eat the new crops of the year — the maize, sorghum, pumpkins, and other staples — the paramount chief must consume the first fruits in a sacred ritual. This act releases the harvest for community consumption and simultaneously thanks the ancestors for their blessing.</p>
 <p>The timing of Ncwala follows a lunar and agricultural calendar, traditionally falling around August — the tail end of winter in southern Africa, when the first new crops are ripening. The paramount chief, advised by traditional specialists, determines the exact dates each year.</p>
 <p>Ncwala is not a performance created for tourists. It is a living religious and cultural observance that has been performed continuously for over 200 years. Visitors are welcome — and the Ngoni are generous hosts — but they attend as respectful guests at a sacred event, not as an audience at a show.</p>
 </div>
 </div>
 </div>

 {/* Spiritual Significance */}
 <div className="max-w-7xl mx-auto px-4 py-20">
 <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-3 text-center">Why It Matters</p>
 <h2 className="font-cinzel text-xl md:text-3xl text-ncwala-black mb-12 text-center section-heading">Spiritual Significance</h2>
 <div className="grid md:grid-cols-3 gap-8">
 {[
 { title: 'Gratitude', text: 'The primary spiritual purpose of Ncwala is thanksgiving. The Ngoni express profound gratitude to Ngwenyama (the Supreme Being) and to the amadlozi (ancestors) for the year\'s harvest and the community\'s wellbeing.', icon: '' },
 { title: 'Renewal', text: 'Ncwala marks the new year in the Ngoni cultural calendar — a reset. The old year\'s difficulties are ceremonially released. Blessings for the coming year are sought. It is a moment of collective spiritual cleansing and fresh beginning.', icon: '' },
 { title: 'Royal Authority', text: 'The ceremony reaffirms the paramount chief\'s spiritual and temporal authority. His ability to release the harvest for consumption — his intermediary role between the living and the ancestors — is demonstrated and renewed annually.', icon: '' },
 ].map((item, idx) => (
 <div key={idx} className="text-center p-8 border border-ncwala-gold/20 hover:border-ncwala-gold transition-colors">
 <div className="text-5xl mb-4">{item.icon}</div>
 <h3 className="font-cinzel text-xl text-ncwala-black mb-4">{item.title}</h3>
 <p className="font-garamond text-gray-700 leading-relaxed">{item.text}</p>
 </div>
 ))}
 </div>
 </div>

 {/* Preparation photo */}
 <div className="max-w-7xl mx-auto px-4 pb-12">
 <div className="grid md:grid-cols-2 gap-6 items-center">
 <img src={gallery6} alt="Warrior preparing headdress" className="w-full h-72 object-cover rounded-lg shadow-xl" />
 <div>
 <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-3">Before the Dance</p>
 <h3 className="font-cinzel text-2xl text-ncwala-black mb-4">The Art of Preparation</h3>
 <p className="font-garamond text-lg text-gray-700 leading-relaxed">Every detail of a warrior's appearance at Ncwala is deliberate. The headdress, the body markings, the arrangement of skins — each element follows a tradition passed from father to son across generations. Preparation itself is a ritual act, a moment of connection with ancestry and identity.</p>
 </div>
 </div>
 </div>

 {/* The Seven Phases */}
 <div className="bg-gray-50 py-12 md:py-20 px-4">
 <div className="max-w-7xl mx-auto">
 <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-3 text-center">From Preparation to Celebration</p>
 <h2 className="font-cinzel text-xl md:text-3xl text-ncwala-black mb-12 text-center section-heading">The Seven Phases of Ncwala</h2>
 <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 mb-8">
 {phases.map((p, idx) => (
 <button
 key={idx}
 onClick={() => setActivePhase(idx)}
 className={`py-3 px-2 text-center transition-all font-raleway text-xs uppercase tracking-wide rounded ${
 activePhase === idx ? 'bg-ncwala-red text-white' : 'bg-white text-gray-600 hover:bg-ncwala-gold/10 border border-gray-200'
 }`}
 >
 <div className="font-bold">{p.phase}</div>
 <div className="hidden md:block mt-1 text-[10px] leading-tight">{p.timing}</div>
 </button>
 ))}
 </div>
 <div className={`bg-white border-l-4 ${phases[activePhase].colour} shadow-sm p-8 rounded-r-lg`}>
 <div className="grid md:grid-cols-2 gap-8">
 <div>
 <span className="font-raleway text-xs text-gray-400 uppercase tracking-widest">{phases[activePhase].timing}</span>
 <h3 className="font-cinzel text-2xl text-ncwala-black mt-1 mb-4">{phases[activePhase].name}</h3>
 <p className="font-garamond text-lg text-gray-700 leading-relaxed">{phases[activePhase].description}</p>
 </div>
 <div>
 <h4 className="font-cinzel text-sm text-ncwala-red uppercase tracking-widest mb-4">Key Rituals</h4>
 <ul className="space-y-3">
 {phases[activePhase].rituals.map((r, i) => (
 <li key={i} className="flex items-start gap-3">
 <span className="text-ncwala-gold font-bold mt-1"></span>
 <span className="font-raleway text-gray-700 text-sm">{r}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Full-width photo strip — all 7 */}
 <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 h-40 md:h-56">
 {[gallery1, gallery6, gallery9, gallery3, gallery7, gallery2, gallery4].map((img, idx) => (
 <div key={idx} className="overflow-hidden">
 <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
 </div>
 ))}
 </div>
 <p className="font-raleway text-xs text-gray-400 text-center py-2">Photography by @Andy Luki Jr.</p>

 {/* Visitor Etiquette */}
 <div className="max-w-7xl mx-auto px-4 py-20">
 <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-widest mb-3 text-center">For Visitors</p>
 <h2 className="font-cinzel text-xl md:text-3xl text-ncwala-black mb-4 text-center section-heading">Attending with Respect</h2>
 <p className="font-garamond text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
 Ncwala welcomes visitors warmly — the Ngoni are proud to share their culture. But this is a sacred ceremony, not a festival. These guidelines will help you experience Ncwala in a way that is respectful and deeply meaningful.
 </p>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {etiquette.map((item, idx) => (
 <div key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-lg">
 <span className="text-3xl flex-shrink-0">{item.icon}</span>
 <div>
 <h3 className="font-cinzel text-base text-ncwala-black mb-2">{item.rule}</h3>
 <p className="font-garamond text-gray-700 text-sm leading-relaxed">{item.detail}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* CTA */}
 <div className="bg-gradient-to-r from-ncwala-red to-ncwala-black text-ncwala-white py-12 md:py-20 px-4 text-center">
 <h2 className="font-cinzel-decorative text-3xl md:text-4xl mb-4">Experience Ncwala for Yourself</h2>
 <p className="font-garamond text-xl text-gray-300 max-w-2xl mx-auto mb-8">
 No description can fully capture the sound of a thousand warriors dancing, the sight of the paramount chief in royal regalia, or the feeling of being welcomed into a 200-year-old tradition. You have to be there.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="/travel" className="inline-block bg-ncwala-gold text-ncwala-black font-raleway font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors">Plan Your Visit</a>
 <a href="/accommodation" className="inline-block border border-ncwala-gold text-ncwala-gold font-raleway font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-ncwala-gold hover:text-ncwala-black transition-colors">Find Accommodation</a>
 </div>
 </div>
 </>
 )
}
