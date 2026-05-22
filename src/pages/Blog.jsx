import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from 'lucide-react'
import { ARTICLES } from './News'

export default function Blog() {
 const { slug } = useParams()
 const article = ARTICLES.find(a => a.slug === slug)
 const articleIndex = ARTICLES.findIndex(a => a.slug === slug)
 const prevArticle = articleIndex > 0 ? ARTICLES[articleIndex - 1] : null
 const nextArticle = articleIndex < ARTICLES.length - 1 ? ARTICLES[articleIndex + 1] : null

 if (!article) {
 return (
 <div className="max-w-4xl mx-auto px-4 py-20 text-center">
 <h1 className="font-cinzel text-3xl text-ncwala-red mb-4">Article Not Found</h1>
 <p className="font-garamond text-gray-600 mb-8">This article does not exist or may have been moved.</p>
 <Link to="/news" className="inline-block bg-ncwala-gold text-ncwala-black font-raleway text-sm uppercase tracking-widest px-6 py-3 hover:bg-ncwala-red hover:text-white transition-colors">
 Back to News
 </Link>
 </div>
 )
 }

 // Related articles — same category, excluding current
 const related = ARTICLES.filter(a => a.category === article.category && a.slug !== slug).slice(0, 2)

 return (
 <>
 <Helmet>
 <title>{article.title} | Ncwala</title>
 <meta name="description" content={article.excerpt} />
 <script type="application/ld+json">
 {JSON.stringify({
 '@context': 'https://schema.org',
 '@type': 'NewsArticle',
 'headline': article.title,
 'author': { '@type': 'Person', 'name': article.author },
 'datePublished': article.date,
 'image': article.image,
 })}
 </script>
 </Helmet>

 {/* Hero Image */}
 <div className="relative h-64 md:h-[480px] overflow-hidden">
 <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
 <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
 <span className="inline-block bg-ncwala-gold text-ncwala-black font-raleway text-xs uppercase tracking-widest px-3 py-1 mb-4">
 {article.category}
 </span>
 <h1 className="font-cinzel text-2xl md:text-4xl text-white leading-tight drop-shadow-lg">
 {article.title}
 </h1>
 </div>
 </div>

 {/* Article Meta */}
 <div className="border-b border-gray-200 bg-gray-50">
 <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center gap-6 text-sm text-gray-500 font-raleway">
 <Link to="/news" className="flex items-center gap-2 text-ncwala-red hover:text-ncwala-black transition-colors">
 <ArrowLeft size={14} /> All Articles
 </Link>
 <span className="flex items-center gap-2"><User size={14} /> {article.author}</span>
 <span className="flex items-center gap-2"><Clock size={14} /> {article.readTime} min read</span>
 <span className="flex items-center gap-2">
 <Calendar size={14} />
 {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
 </span>
 </div>
 </div>

 {/* Article Body */}
 <div className="max-w-4xl mx-auto px-4 py-12">
 {/* Excerpt / standfirst */}
 <p className="font-garamond text-xl md:text-2xl text-gray-600 leading-relaxed border-l-4 border-ncwala-gold pl-6 mb-10 italic">
 {article.excerpt}
 </p>

 {/* Body paragraphs */}
 <div className="space-y-6">
 {article.body.split('\n\n').map((paragraph, idx) => {
 // Make pull quote out of short paragraphs that are clearly quotes
 if (paragraph.startsWith('"') && paragraph.length < 200) {
 return (
 <blockquote key={idx} className="border-l-4 border-ncwala-red pl-6 my-8">
 <p className="font-garamond text-xl text-gray-700 italic leading-relaxed">{paragraph}</p>
 </blockquote>
 )
 }
 return (
 <p key={idx} className="font-garamond text-lg text-gray-800 leading-relaxed">
 {paragraph}
 </p>
 )
 })}
 </div>

 {/* Author Bio */}
 <div className="mt-16 pt-8 border-t border-gray-200">
 <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
 <div className="w-12 h-12 rounded-full bg-ncwala-gold flex items-center justify-center flex-shrink-0">
 <span className="font-cinzel text-ncwala-black text-lg font-bold">{article.author[0]}</span>
 </div>
 <div>
 <p className="font-cinzel text-ncwala-black text-sm">{article.author}</p>
 <p className="font-raleway text-xs text-ncwala-gold uppercase tracking-widest mt-1">{article.category} Contributor</p>
 <p className="font-garamond text-gray-600 text-sm mt-2">
 A contributor to Ncwala's cultural documentation, dedicated to preserving and sharing the history and traditions of the Ngoni people of Eastern Province, Zambia.
 </p>
 </div>
 </div>
 </div>

 {/* Prev / Next navigation */}
 <div className="mt-12 grid grid-cols-2 gap-4">
 {prevArticle ? (
 <Link to={`/blog/${prevArticle.slug}`} className="group p-4 border border-gray-200 hover:border-ncwala-gold transition-colors rounded-lg">
 <p className="font-raleway text-xs text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1"><ArrowLeft size={12}/> Previous</p>
 <p className="font-cinzel text-sm text-ncwala-black group-hover:text-ncwala-red transition-colors line-clamp-2">{prevArticle.title}</p>
 </Link>
 ) : <div />}
 {nextArticle ? (
 <Link to={`/blog/${nextArticle.slug}`} className="group p-4 border border-gray-200 hover:border-ncwala-gold transition-colors rounded-lg text-right">
 <p className="font-raleway text-xs text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1 justify-end">Next <ArrowRight size={12}/></p>
 <p className="font-cinzel text-sm text-ncwala-black group-hover:text-ncwala-red transition-colors line-clamp-2">{nextArticle.title}</p>
 </Link>
 ) : <div />}
 </div>

 {/* Related Articles */}
 {related.length > 0 && (
 <div className="mt-16 pt-8 border-t border-gray-200">
 <p className="font-raleway text-xs text-ncwala-gold uppercase tracking-widest mb-6">More in {article.category}</p>
 <div className="grid md:grid-cols-2 gap-8">
 {related.map(a => (
 <Link key={a.id} to={`/blog/${a.slug}`} className="group flex gap-4">
 <img src={a.image} alt={a.title} className="w-24 h-20 object-cover flex-shrink-0 rounded" />
 <div>
 <p className="font-cinzel text-sm text-ncwala-black group-hover:text-ncwala-red transition-colors line-clamp-2 leading-snug">{a.title}</p>
 <p className="font-raleway text-xs text-gray-400 mt-2 flex items-center gap-1"><Clock size={10}/> {a.readTime} min</p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 )}
 </div>
 </>
 )
}
