import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Clock, User, ArrowRight } from 'lucide-react'
import g1 from '../assets/gallery-1.webp'
import g2 from '../assets/gallery-2.webp'
import g3 from '../assets/gallery-3.webp'
import g4 from '../assets/gallery-4.webp'
import g5 from '../assets/gallery-5.webp'
import g7 from '../assets/gallery-7.webp'
import g9 from '../assets/gallery-9.webp'
import g10 from '../assets/gallery-10.webp'

export const ARTICLES = [
  {
    id: 1,
    slug: 'ncwala-2026-preparations-underway',
    category: 'Ceremony',
    title: 'Ncwala 2026: Preparations Are Underway — Here Is What to Expect',
    excerpt: 'The Mpezeni Royal Establishment has confirmed that preparations for the 2026 Ncwala First Fruits Ceremony are officially underway. This year promises to be one of the most significant celebrations in recent memory — here is everything you need to know.',
    image: g1,
    author: 'Ncwala Editorial Team',
    readTime: 5,
    date: '2026-05-22',
    body: `The drums will sound again in Chipata this August. The Mpezeni Royal Establishment has officially confirmed that preparations for the 2026 Ncwala First Fruits Ceremony are underway, with royal messengers (izinduna) already dispatched across all sub-chiefdoms of the Ngoni kingdom in Eastern Province, Zambia.

Senior Chief Mpezeni IV is presiding over preparations that began in earnest this month. The royal household has entered the preparatory phase — a period of ritual purification, the gathering of sacred herbs, and the selection of royal cattle that will form part of the ceremonial observances.

"Every year we prepare, and every year Ncwala reminds us of who we are," said a senior induna of the Mpezeni royal court. "But 2026 carries a particular weight. Our people are ready. The ancestors are being called. Come to Chipata — you will not forget it."

What to Expect at Ncwala 2026

The ceremony is expected to follow its traditional format: a multi-day celebration beginning with the great gathering of sub-chiefs and their regiments at the royal palace grounds, building to the central first fruits ritual in which the paramount chief consumes the new harvest on behalf of the entire kingdom, and concluding with community feasting, the thundering ingoma war dances, and days of cultural celebration.

This year, the organisers have confirmed that expanded visitor facilities will be available, including designated viewing areas for international guests, guided cultural briefing sessions on the morning of the main ceremony, and an expanded craft and cultural market running alongside the main events.

Planning Your Visit

Chipata is accessible by air from Lusaka on Proflight Zambia (approximately one hour), and by road on the Great East Road (6-8 hours). Accommodation in Chipata fills rapidly in the weeks before Ncwala — visitors are strongly advised to book now.

The Chipata District Tourism Office and the Eastern Province Tourism Association are coordinating visitor services. Cultural guides, transport arrangements from Lusaka, and accommodation packages are available through registered tour operators.

A Note on Respect

Ncwala is not a festival organised for visitors. It is a living sacred ceremony that has been performed continuously for over 200 years. Visitors are welcome — the Ngoni are renowned for their hospitality — but they attend as respectful guests. Dress modestly. Follow the guidance of local organisers. Ask before photographing. Be present.

Those who come in that spirit consistently describe Ncwala as one of the most profound experiences of their lives. We look forward to welcoming you to Chipata in August 2026.`,
  },
  {
    id: 2,
    slug: 'history-of-the-zambezi-crossing-1835',
    category: 'History',
    title: 'The Zambezi Crossing of 1835: The Day That Defined the Ngoni Nation',
    excerpt: 'On 19 November 1835, during a solar eclipse, Zwangendaba led the Ngoni people across the Zambezi River — a moment so extraordinary it has been passed down through oral tradition for nearly two centuries.',
    image: g5,
    author: 'Dr. Mwangi Phiri',
    readTime: 8,
    date: '2025-05-20',
    body: `On 19 November 1835, a solar eclipse darkened the midday sky over the Zambezi River. In this dramatic moment of celestial convergence, the Ngoni people — led by the great chief Zwangendaba Jere — crossed the mighty river and entered what would become their permanent homeland.

It is one of the most remarkable moments in the history of southern Africa, and nearly two centuries later, it remains at the core of Ngoni cultural identity.

The crossing did not happen by accident. The Ngoni had been travelling northward for over a decade, driven from their homeland in what is now KwaZulu-Natal by the violent upheavals of the Mfecane — the great scattering triggered by the rise of the Zulu Kingdom under Shaka in the early 19th century.

Under Zwangendaba's leadership, the Ngoni crossed what is now Mozambique, Zimbabwe, and parts of modern-day Malawi before reaching the Zambezi. They were not simply refugees — they were conquerors, absorbing neighbouring peoples into their kingdom as they moved, strengthening their numbers and cultural cohesion.

The eclipse of November 1835 was interpreted by Ngoni spiritual leaders as a divine sign. Crossing during this celestial event was not coincidence — it was understood as the ancestors clearing the path, sanctifying the passage from one world to another.

"The eclipse was the ancestors speaking," explains a Ngoni elder from Chipata. "Zwangendaba did not cross despite the darkness — he crossed because of it. The darkness was the doorway."

After the crossing, the Ngoni continued northward into what is now Tanzania, where Zwangendaba died around 1848. His death triggered a succession crisis that split the Ngoni into several distinct groups. One of these groups, under Mpezeni — Zwangendaba's son — turned south and west, eventually establishing a powerful kingdom centred on Chipata in Eastern Province of what is now Zambia.

The date of the Zambezi crossing is still commemorated in Ngoni oral tradition. It is recalled in the praise songs (izibongo) of the royal house, in the ceremonies of Ncwala, and in the stories that Ngoni elders tell their grandchildren.

The 1835 crossing also serves as a powerful metaphor in contemporary Ngoni identity. The journey from South Africa to Zambia — across rivers, through enemy territories, surviving wars and famine and colonial conquest — is invoked as evidence of the Ngoni capacity for resilience, adaptation, and cultural survival.

When warriors dance the ingoma at Ncwala, they are not merely performing. They are embodying that journey — feet striking the same earth their ancestors crossed nearly two hundred years ago.`,
  },
  {
    id: 3,
    slug: 'ngoni-warrior-tradition-ibutho-system',
    category: 'Culture',
    title: 'The Ibutho System: How the Ngoni Warrior Brotherhood Shaped a Nation',
    excerpt: 'The age-regiment system inherited from Zulu tradition created bonds of brotherhood that transcended family and clan — and still echoes in the dances, structures, and values of Ngoni society today.',
    image: g9,
    author: 'Chanda Mulenga',
    readTime: 6,
    date: '2025-04-10',
    body: `Long before the Ngoni arrived in what is now Zambia, they had perfected a social technology that would prove central to their survival, expansion, and cultural identity: the ibutho, or age-regiment system.

Inherited from their Zulu ancestors and refined over decades of migration, the ibutho system organised young men into groups based on age. All boys born within a span of a few years would be enrolled in the same regiment — trained together, initiated together, and expected to serve together as warriors under the king's command.

The implications of this system were profound. The ibutho did not merely create soldiers — it created a bond of brotherhood that cut across family and clan lines. A young man's loyalties were, in significant measure, to his regiment before his extended family. This created a powerful social cohesion that held the Ngoni together as a political unit even as they absorbed peoples of entirely different origins.

"The ibutho is why we survived the Mfecane," explains one Ngoni elder. "It is why Zwangendaba could lead thousands of people across thousands of kilometres. Because every man knew his place, knew his brothers, and knew his duty."

During the period of the great migration, the ibutho system made the Ngoni a formidable military force. Warriors trained from youth in the use of the short stabbing spear (iklwa), the cowhide shield, and the close-combat tactics developed under Shaka could stand against much larger forces. But beyond the battlefield, the ibutho created the social glue that held the kingdom together.

When the Ngoni absorbed captive peoples — the Chewa, Tumbuka, and others who were incorporated into the kingdom as they moved through eastern Africa — these absorbed peoples were enrolled into the ibutho alongside born Ngoni. Over a generation, their children were Ngoni in all meaningful cultural senses. The ibutho was the mechanism of cultural absorption.

Today, the ibutho system no longer organises military service, but its cultural legacy is profound. The Ncwala dance — the ingoma — is performed in regimental formations. Groups of warriors of similar age move together, stomp together, shout together. This is not choreography for effect. It is the embodied memory of the regiment.

The values associated with the ibutho — courage, discipline, brotherhood, loyalty to community over self-interest — are still explicitly invoked in Ngoni moral discourse. Young men are encouraged to embody these values, even in modern urban contexts far from the ceremony ground in Chipata.

The ibutho also explains the Ngoni attitude toward outsiders who attend Ncwala. The tradition of absorption means that the Ngoni are, at their cultural core, welcoming to those who come in good faith. You do not have to be born Ngoni to be recognised as Ngoni. You simply have to show up, act with respect, and participate. That openness — the willingness to bring others into the circle — has always been at the heart of what makes the Ngoni who they are.`,
  },
  {
    id: 4,
    slug: 'first-fruits-meaning-ncwala-ritual',
    category: 'Ceremony',
    title: 'What Does "First Fruits" Actually Mean? The Spiritual Heart of Ncwala',
    excerpt: 'The concept of "first fruits" is ancient, found across cultures from the Hebrew Bible to the Zulu kingdom. For the Ngoni, it carries a specific and profound spiritual logic that shapes everything about the Ncwala ceremony.',
    image: g4,
    author: 'Rev. Banda Zulu',
    readTime: 7,
    date: '2025-03-05',
    body: `The phrase "first fruits" appears in traditions across the world — from the Hebrew Bible's Feast of Firstfruits to the Zulu Umkhosi Wokweshwama, from the Shona Kurova Guva to harvest ceremonies across West Africa. It is one of humanity's oldest religious ideas: that the first of the new harvest belongs not to the people who grew it, but to a higher power.

For the Ngoni, this ancient idea is given precise, living expression in Ncwala.

The logic is this: the earth does not produce because of human effort alone. The rain that fell, the warmth that ripened the grain, the health of the community that planted and tended it — all of this is a gift from Ngwenyama (the Supreme Being) and from the amadlozi (the ancestors). Before the people may enjoy the harvest, the debt must be acknowledged. The gift must be received properly.

This is the paramount chief's role. He is not merely a political leader — he is a spiritual intermediary. His bloodline connects the living to the dead, the present to the ancestral past. When he consumes the first fruits in the central ritual of Ncwala, he is acting on behalf of the entire community. He is the one who may approach the ancestors and receive the harvest on behalf of his people.

Until he does this, the new crops are spiritually "unripe" — not in any physical sense, but in a ritual and moral sense. Consuming them before the ceremony would be to take without giving thanks, to enjoy a gift without acknowledging the giver. It would be a profound spiritual discourtesy to the ancestors.

After the chief performs the ritual — after the first fruits have been consumed and the ancestors thanked — the harvest is released. The community may eat. The feasting begins. The burden of the covenant has been fulfilled for another year.

This is why Ncwala is not simply a harvest festival in the sense that a Western harvest festival might be. It is not primarily about the food. It is about the relationship — between the living and the dead, between the people and the land, between the present generation and all the generations that came before.

The first fruits themselves — typically maize, sorghum, pumpkin, and other crops that ripen in late winter — are carefully selected and prepared by the royal household. They are presented to the chief in a ceremonial sequence that has been largely unchanged for generations.

Understanding this helps visitors make sense of the ceremony's emotional power. When you watch the paramount chief in full regalia approaching the assembled first fruits, you are witnessing a moment of profound spiritual seriousness. The thousands of assembled Ngoni are not watching a performance. They are present at a moment of covenant — the renewal of the relationship between their community and everything that sustains it.

That is what "first fruits" means at Ncwala. And that is why it has been performed without interruption for over two hundred years.`,
  },
  {
    id: 5,
    slug: 'ngoni-beadwork-regalia-symbolism',
    category: 'Culture',
    title: 'Reading the Regalia: What Every Bead, Skin and Feather at Ncwala Means',
    excerpt: 'To the uninformed eye, Ngoni ceremonial dress is simply beautiful. To those who can read it, every element — every bead pattern, every animal skin, every feather — tells a precise story of identity, rank and ancestry.',
    image: g10,
    author: 'Thandiwe Moyo',
    readTime: 6,
    date: '2025-02-18',
    body: `At Ncwala, you will see thousands of people dressed in ways that might initially seem uniform — animal skins, beadwork, headdresses, ceremonial weapons. Look more carefully, and you begin to realise that each person's dress is a precise statement of identity, rank, lineage, and spiritual status.

Ngoni ceremonial regalia is not costume. It is a language — one that Ngoni people can read fluently, and one that visitors can begin to learn.

The most immediately recognisable element is the leopard skin. In Ngoni tradition, leopard skin is the exclusive preserve of royalty and senior warrior leadership. The paramount chief wears it in abundance — across the shoulders, around the waist, as a headdress. Senior indunas and sub-chiefs wear it as well, in smaller quantities that precisely signal their rank. For a commoner to wear leopard skin without authority is a profound transgression.

The leopard is not merely prestigious because it is rare and beautiful. It is associated with qualities the Ngoni prize above all others in leadership: stealth, power, patience, and ferocity. The king who wears the leopard's skin is understood to embody these qualities in his governance.

Beadwork is equally communicative. The colours and patterns of beads carry meanings that have been standardised over generations. White beads typically signify purity and spiritual connection to the ancestors. Red beads can indicate warrior status or royal blood. The specific patterns — the way beads are arranged into geometric or symbolic designs — can indicate specific lineage groups, regional identity, or ceremonial roles.

The headdress deserves particular attention. The materials used — specific feathers, particular animal furs, the height and configuration of the piece — all communicate information about the wearer. Guinea fowl feathers, for example, are associated with particular ceremonial roles. The horns of specific animals convey martial heritage.

Body markings — white clay painted in geometric patterns on the torso, face, and limbs — are among the most ancient elements of Ngoni regalia. These markings, applied before the ceremony, connect warriors to the spiritual realm. They are protective, invoking ancestral presence, and they are also communicative, identifying the wearer's regiment and ceremonial role.

The ceremonial weapons — spears, shields, knobkerries — are not merely symbolic, though they carry deep symbolic weight. The traditional short spear reflects the close-combat style of Ngoni warfare. The shield, made from cowhide, represents the protection of the community. To carry these at Ncwala is to embody the warrior tradition that has always protected the Ngoni kingdom.

For visitors, the practical implication of all this is that watching Ncwala with some knowledge of what the regalia means transforms the experience completely. You are no longer watching a colourful spectacle — you are reading a living text, written in skin and bead and feather, that tells the story of a people across centuries.`,
  },
  {
    id: 6,
    slug: 'chipata-travel-guide-ncwala-visitors',
    category: 'Travel',
    title: "Visitor's Guide to Chipata: Getting There, Getting Around, and Making the Most of Ncwala",
    excerpt: 'Chipata, the capital of Eastern Province and home of the Ngoni kingdom, is a warm, welcoming city with everything a visitor needs. Here is everything you need to know to make your Ncwala trip unforgettable.',
    image: g2,
    author: 'Eastern Province Tourism',
    readTime: 9,
    date: '2025-01-30',
    body: `Chipata is a city that surprises visitors. Often overlooked in favour of Lusaka or the national parks of western Zambia, it is in fact one of the most culturally rich and personally welcoming destinations in the country — and during Ncwala, it becomes arguably the most exciting place in southern Africa.

Here is what you need to know to make the most of your visit.

Getting to Chipata

By Air: Chipata Airport (CPT) receives regular flights from Lusaka on Proflight Zambia. The flight takes approximately one hour and is the most comfortable option for international visitors. During Ncwala season, seats fill quickly — book at least six weeks in advance.

By Road from Lusaka: The Great East Road connects Lusaka to Chipata, a distance of approximately 600 kilometres. The road is generally good by regional standards, though sections require careful driving. The journey takes 6-8 hours by private vehicle or bus. Several bus companies operate daily services, including Mazhandu Family Bus Services and Power Tools Bus Service.

By Road from Malawi: Chipata is close to the Malawian border at Mchinji, making it accessible from Lilongwe (approximately 130km). The border crossing is generally smooth for tourists with valid visas.

Accommodation

Chipata has a range of accommodation options from international-standard lodges to comfortable guesthouses. During Ncwala, book at least two months in advance — the city fills completely.

Recommended areas to stay: The town centre offers easy access to restaurants, markets, and transport. For a quieter experience, several lodges are situated on the outskirts with attractive grounds.

Budget travellers will find clean guesthouses in the K300-600 per night range. Mid-range visitors should expect K600-1,500 for comfortable en-suite rooms with breakfast. Upscale lodges run K1,500-3,000+.

Getting Around Chipata

The city is navigable by minibus, taxi, and private vehicle. During Ncwala, traffic around the ceremony grounds is heavy — plan to arrive early or arrange transport with your accommodation. Walking is pleasant in the town centre and surrounding areas.

What to Bring

Light, respectful clothing is appropriate for Chipata's warm August weather. For the ceremony itself, add a layer for early mornings and evenings. Comfortable walking shoes are essential — the ceremony grounds involve significant standing and walking. Bring sunscreen, a hat, and a reusable water bottle.

Photography equipment is welcome, but remember the protocols: always ask permission before photographing individuals, and respect restrictions during sensitive ceremonial moments.

Currency and Payments

The Zambian Kwacha (ZMW) is the currency. ATMs are available in Chipata town centre. Card payments are accepted at larger establishments but not universally. Bring sufficient cash for markets and smaller vendors.

Cultural Preparation

The greatest gift you can give yourself before attending Ncwala is preparation. Read about the ceremony, its history, and its meaning. The more you understand what you are witnessing, the more profound the experience will be. The Ngoni are extraordinarily hospitable to visitors who come with genuine curiosity and respect — your engagement will be warmly received.`,
  },
  {
    id: 7,
    slug: 'ngoni-ingoma-dance-explained',
    category: 'Culture',
    title: 'The Ingoma Dance: More Than Movement — A Living Act of Memory',
    excerpt: 'The ingoma war dance performed at Ncwala is one of the most powerful cultural performances in southern Africa. Understanding what it is — and what it is not — transforms the experience of watching it.',
    image: g7,
    author: 'Professor Zulu Banda',
    readTime: 7,
    date: '2024-12-12',
    body: `When hundreds of Ngoni warriors in full regalia begin the ingoma at Ncwala, the effect is physical. The synchronised stamping of feet creates a vibration you feel in your chest before you hear it with your ears. The unified shouts pierce the air. The sight of massed warriors in leopard skins and feathered headdresses, moving as one body, is something visitors describe as genuinely overwhelming.

It is also deeply misunderstood by those who have not been prepared to receive it properly.

The ingoma is not a performance. It is not staged for the benefit of tourists or even for the wider audience that gathers at the ceremony. It is, at its core, a communication — directed first to the ancestors, second to the paramount chief, and only incidentally visible to spectators.

When the ingoma begins, the warriors are not showing what they can do. They are demonstrating who they are. The precise choreography — the formations, the calls and responses, the progression of movements — follows protocols that have been transmitted across generations. These are not invented dances. They are inherited ones, which means each performance carries within it the memory of every previous performance.

This is oral tradition made physical. When an elder warrior stamps his feet in the ingoma, he is repeating the exact movement his father made, which his grandfather made, which warriors made on the banks of the Zambezi in 1835, which warriors made in the kraals of Zululand before that. The body itself becomes the archive.

The drum pattern that accompanies the ingoma is similarly coded. Different rhythms correspond to different phases of the dance and different moments in its narrative. Warriors who have grown up with these rhythms respond to them instinctively — they do not need to think about what movement comes next, because the drum tells them.

The vocal element — the shouts, the chants, the responses — is equally significant. These are not random expressions of energy. The words and phrases used in the ingoma are largely drawn from the praise poetry (izibongo) of the Ngoni royal house — the genealogical and historical narratives that trace the lineage of the Mpezeni kingship back through Zwangendaba to the ancestral homeland in KwaZulu-Natal.

When you watch the ingoma with this understanding, what you see changes fundamentally. Those are not just men dancing. They are an entire civilisation, moving together, remembering together, affirming together that they are still here — that the migration did not break them, that the wars did not destroy them, that the colonial conquest did not erase them.

For visitors, the most appropriate response to the ingoma is not applause (though this is not necessarily inappropriate during more festive moments) — it is stillness, attention, and respect. You are witnessing something genuinely sacred. The gift of your full presence and attention is the most valuable thing you can offer.`,
  },
  {
    id: 8,
    slug: 'mpezeni-kingdom-history-chipata',
    category: 'History',
    title: 'The Kingdom of Mpezeni: How One Man Built an Empire in Eastern Zambia',
    excerpt: "Mpezeni I was one of the most formidable figures in 19th century African history — a conqueror, a statesman, and a cultural architect whose kingdom still shapes Eastern Province to this day.",
    image: g3,
    author: 'Ncwala Editorial Team',
    readTime: 8,
    date: '2024-11-05',
    body: `When Mpezeni I arrived in what is now Eastern Province of Zambia in the 1850s, he was a chief without a kingdom. His father, Zwangendaba, had died in present-day Tanzania, triggering a bitter succession dispute among the Ngoni. Mpezeni took his followers south and west, away from the conflict, searching for land where he could build something permanent.

What he built was extraordinary.

Within a generation, the Mpezeni kingdom had become the dominant power in the region now encompassing Eastern Province, Zambia, and parts of Malawi. The Ngoni under Mpezeni conducted raids across a wide area — not simply for plunder, but as a deliberate strategy of political expansion. Defeated peoples were given a choice: absorption or continued resistance. Most chose absorption.

This policy of incorporation was not mere pragmatism. It reflected a sophisticated understanding that power depends on people, not just territory. By absorbing the Chewa, the Tumbuka, and other neighbouring groups into the Ngoni social structure — enrolling their young men into the ibutho regiments, integrating their women into Ngoni households, adopting useful elements of their culture — Mpezeni built a genuinely diverse kingdom that nonetheless maintained a coherent Ngoni identity at its core.

The physical centre of this kingdom was established near present-day Chipata, then known as Fort Jameson after the British colonial official who would eventually conquer it. The royal palace (indlulamithi) was built here, and it is here that the Ncwala ceremony has been performed ever since.

By the 1880s, the kingdom of Mpezeni controlled territory across a huge swathe of south-central Africa. Mpezeni I was by then an old man, but his authority was unquestioned. He had outlasted rivals, survived wars, and created an institution — the Ngoni kingdom of Mpezeni — that showed every sign of enduring.

The British arrived in the 1890s in the form of the British South Africa Company (BSAC), Cecil Rhodes's commercial empire, which was systematically extending its reach across the region. BSAC agents attempted to negotiate treaties with Mpezeni, seeking to establish British "protection" (which in practice meant commercial and political control) over his territory.

Mpezeni refused. Unlike many neighbouring chiefs who signed treaties without fully understanding their implications, the old king was clear-eyed about what the British wanted, and he was not willing to give it.

The military confrontation came in January 1898. BSAC forces, armed with modern rifles and artillery, attacked the Ngoni kingdom. Despite fierce resistance, the Ngoni — fighting with spears and older firearms — could not hold against superior firepower. The kingdom fell within days. Mpezeni I was captured. His eldest son Nsingo, who had led the military resistance, was executed.

But the kingdom did not end. Mpezeni I was eventually released, and the British, recognising that ruling Eastern Province without Ngoni cooperation was impractical, allowed the chieftaincy to continue. The current paramount chief, Senior Chief Mpezeni IV, is a direct lineal descendant of Mpezeni I, and his authority — though now operating within the framework of the Zambian state — is as real in Eastern Province today as it was in the 19th century.

Mpezeni I died in 1900, just two years after the conquest. But the kingdom he built, the ceremony he presided over, and the cultural identity he forged survive him by more than a century.`,
  },
]

const categories = ['All', 'Ceremony', 'History', 'Culture', 'Travel']

function ArticleCard({ article, featured = false }) {
  return (
    <Link to={`/blog/${article.slug}`} className="group block">
      <div className={`overflow-hidden ${featured ? 'h-72 md:h-96' : 'h-52'} relative`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <span className="absolute top-4 left-4 bg-ncwala-gold text-ncwala-black font-raleway text-xs uppercase tracking-widest px-3 py-1">
          {article.category}
        </span>
      </div>
      <div className="pt-4">
        <h3 className={`font-cinzel text-ncwala-black group-hover:text-ncwala-red transition-colors leading-snug ${featured ? 'text-2xl' : 'text-base'}`}>
          {article.title}
        </h3>
        <p className="font-garamond text-gray-600 mt-2 leading-relaxed text-sm line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-4 mt-3 text-xs text-gray-400 font-raleway">
          <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime} min read</span>
          <span>{new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        </div>
        <span className="inline-flex items-center gap-1 mt-3 text-ncwala-red font-raleway text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
          Read Article <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  )
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory)

  const [featured, ...rest] = filtered

  return (
    <>
      <Helmet>
        <title>News & Articles — Ncwala Ceremony & Ngoni Culture | Zambia</title>
        <meta name="description" content="Latest news, history, and cultural articles about the Ncwala First Fruits Ceremony and the Ngoni people of Eastern Province, Zambia." />
      </Helmet>

      {/* Header */}
      <div className="bg-ncwala-black text-ncwala-white py-20 px-4 text-center">
        <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-[0.4em] mb-4">Stories & Knowledge</p>
        <h1 className="font-cinzel-decorative text-4xl md:text-6xl mb-4">News & Articles</h1>
        <div className="w-16 h-0.5 bg-ncwala-gold mx-auto mb-6"></div>
        <p className="font-garamond text-lg text-gray-300 max-w-2xl mx-auto">
          Ceremony updates, cultural deep-dives, historical accounts, and travel guides — everything you need to understand and experience Ncwala and the Ngoni people.
        </p>
      </div>

      {/* Category Filter */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-3 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-raleway text-xs uppercase tracking-widest px-5 py-2 transition-all ${
                activeCategory === cat
                  ? 'bg-ncwala-red text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-ncwala-gold hover:text-ncwala-gold'
              }`}
            >
              {cat}
              <span className="ml-2 opacity-50">
                {cat === 'All' ? ARTICLES.length : ARTICLES.filter(a => a.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured article */}
        {featured && (
          <div className="mb-16">
            <p className="font-raleway text-xs text-ncwala-gold uppercase tracking-widest mb-6">Featured</p>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <ArticleCard article={featured} featured={true} />
              <div className="space-y-8 pt-2">
                {rest.slice(0, 2).map(a => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Rest of articles */}
        {rest.length > 2 && (
          <>
            <div className="border-t border-gray-200 pt-12 mb-8">
              <p className="font-raleway text-xs text-gray-400 uppercase tracking-widest">More Articles</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {rest.slice(2).map(a => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
