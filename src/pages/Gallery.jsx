import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

import g1 from '../assets/gallery-1.webp'
import g2 from '../assets/gallery-2.webp'
import g3 from '../assets/gallery-3.webp'
import g4 from '../assets/gallery-4.webp'
import g5 from '../assets/gallery-5.webp'
import g6 from '../assets/gallery-6.webp'
import g7 from '../assets/gallery-7.webp'
import g8 from '../assets/gallery-8.webp'
import g9 from '../assets/gallery-9.webp'
import g10 from '../assets/gallery-10.webp'
import g11 from '../assets/gallery-11.webp'

const allPhotos = [
 { src: g1, title: 'Warriors in Procession', caption: 'Ngoni warriors marching in ceremonial procession', category: 'Warriors' },
 { src: g5, title: 'A Warrior\'s Gaze', caption: 'Portrait of a warrior in traditional regalia', category: 'Warriors' },
 { src: g9, title: 'Brothers in Arms', caption: 'Three Ngoni warriors with ceremonial spears', category: 'Warriors' },
 { src: g6, title: 'Preparing the Headdress', caption: 'A warrior carefully arranges his ceremonial headdress', category: 'Warriors' },
 { src: g2, title: 'The Spirit of Celebration', caption: 'Joy and brotherhood at the heart of Ncwala', category: 'Celebration' },
 { src: g4, title: 'The Dance of the Ancestors', caption: 'A dancer looks to the sky during the ingoma', category: 'Dance' },
 { src: g7, title: 'Arms to the Sky', caption: 'Warriors reach skyward during the ceremonial dance', category: 'Dance' },
 { src: g11, title: 'Joy of Ncwala', caption: 'The warmth and pride of Ncwala celebrated', category: 'Celebration' },
 { src: g3, title: 'Royal Regalia', caption: 'An elder in full Ngoni ceremonial dress and regalia', category: 'Regalia' },
 { src: g10, title: 'Ngoni Beadwork', caption: 'A woman in exquisite traditional Ngoni beadwork', category: 'Regalia' },
 { src: g8, title: 'Cultural Performance', caption: 'A performer celebrates Ngoni heritage through song', category: 'Celebration' },
]

const categories = ['All', 'Warriors', 'Dance', 'Regalia', 'Celebration']

export default function Gallery() {
 const [activeCategory, setActiveCategory] = useState('All')
 const [lightbox, setLightbox] = useState(null)

 const filtered = activeCategory === 'All'
 ? allPhotos
 : allPhotos.filter(p => p.category === activeCategory)

 const openLightbox = (photo) => {
 // Find index in filtered array
 setLightbox(filtered.indexOf(photo))
 }

 const prev = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length)
 const next = () => setLightbox(i => (i + 1) % filtered.length)

 // Close on Escape, navigate on arrow keys
 React.useEffect(() => {
 const handleKey = (e) => {
 if (e.key === 'Escape') setLightbox(null)
 if (lightbox !== null && e.key === 'ArrowLeft') prev()
 if (lightbox !== null && e.key === 'ArrowRight') next()
 }
 window.addEventListener('keydown', handleKey)
 return () => window.removeEventListener('keydown', handleKey)
 }, [lightbox])

 return (
 <>
 <Helmet>
 <title>Gallery — Ncwala Ceremony Photography | Zambia</title>
 <meta name="description" content="Photo gallery from the Ncwala First Fruits Ceremony — warriors, dance, regalia, and celebration of the Ngoni people of Zambia." />
 </Helmet>

 {/* Header */}
 <div className="bg-ncwala-black text-ncwala-white py-20 px-4 text-center">
 <p className="font-raleway text-ncwala-gold text-xs uppercase tracking-[0.4em] mb-4">Through the Lens</p>
 <h1 className="font-cinzel-decorative text-4xl md:text-6xl mb-4">Gallery</h1>
 <div className="w-16 h-0.5 bg-ncwala-gold mx-auto mb-6"></div>
 <p className="font-garamond text-lg text-gray-300 max-w-2xl mx-auto">
 Photographs capturing the power, beauty, and spirit of the Ncwala Ceremony and the Ngoni people of Eastern Province, Zambia.
 </p>
 <p className="font-raleway text-xs text-ncwala-gold/70 mt-4 uppercase tracking-widest">Photography by Andy Luki Jr.</p>
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
 <span className="ml-2 opacity-60">
 {cat === 'All' ? allPhotos.length : allPhotos.filter(p => p.category === cat).length}
 </span>
 </button>
 ))}
 </div>
 </div>

 {/* Grid */}
 <div className="max-w-7xl mx-auto px-4 py-12">
 <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
 {filtered.map((photo, idx) => (
 <div
 key={photo.src}
 className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300"
 onClick={() => openLightbox(photo)}
 >
 <img
 src={photo.src}
 alt={photo.title}
 className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
 <p className="font-cinzel text-white text-sm">{photo.title}</p>
 <p className="font-raleway text-gray-300 text-xs mt-1">{photo.category}</p>
 </div>
 </div>
 ))}
 </div>

 {filtered.length === 0 && (
 <p className="text-center text-gray-400 font-raleway py-20">No photos in this category yet.</p>
 )}
 </div>

 {/* Lightbox */}
 {lightbox !== null && (
 <div
 className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
 onClick={() => setLightbox(null)}
 >
 {/* Close */}
 <button
 className="absolute top-4 right-4 text-white hover:text-ncwala-gold transition-colors z-10"
 onClick={() => setLightbox(null)}
 >
 <X size={32} />
 </button>

 {/* Prev */}
 <button
 className="absolute left-4 text-white hover:text-ncwala-gold transition-colors z-10 p-2"
 onClick={(e) => { e.stopPropagation(); prev() }}
 >
 <ChevronLeft size={40} />
 </button>

 {/* Image */}
 <div
 className="flex flex-col items-center max-w-5xl max-h-[90vh] px-16"
 onClick={e => e.stopPropagation()}
 >
 <img
 src={filtered[lightbox].src}
 alt={filtered[lightbox].title}
 className="max-h-[78vh] max-w-full object-contain rounded shadow-2xl"
 />
 <div className="text-center mt-4">
 <p className="font-cinzel text-ncwala-white text-lg">{filtered[lightbox].title}</p>
 <p className="font-raleway text-gray-400 text-sm mt-1">{filtered[lightbox].caption}</p>
 <p className="font-raleway text-ncwala-gold/60 text-xs mt-2 uppercase tracking-widest">
 {lightbox + 1} / {filtered.length}
 </p>
 </div>
 </div>

 {/* Next */}
 <button
 className="absolute right-4 text-white hover:text-ncwala-gold transition-colors z-10 p-2"
 onClick={(e) => { e.stopPropagation(); next() }}
 >
 <ChevronRight size={40} />
 </button>
 </div>
 )}
 </>
 )
}
