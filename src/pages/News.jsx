import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import ArticleCard from '../components/ArticleCard'
import SkeletonLoader from '../components/SkeletonLoader'
import { supabase } from '../lib/supabase'

export default function News() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('all')

  useEffect(() => {
    fetchArticles()
  }, [category])

  const fetchArticles = async () => {
    setLoading(true)
    try {
      let query = supabase
        .from('news_articles')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (category !== 'all') {
        query = query.eq('category', category)
      }

      const { data, error } = await query
      if (error) throw error
      setArticles(data || [])
    } catch (error) {
      console.error('Error fetching articles:', error)
      // Set mock data for development
      setArticles([
        {
          id: 1,
          title: 'Ncwala 2024: Cultural Celebrations Begin',
          slug: 'ncwala-2024-celebrations',
          category: 'Ceremony',
          excerpt: 'The 2024 Ncwala Ceremony begins this month with record attendance expected...',
          body: 'Full article content here',
          author: 'James Kumwenda',
          read_time: 5,
          image_url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=630&fit=crop',
          published: true,
          created_at: new Date().toISOString(),
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const categories = ['all', 'Ceremony', 'Culture', 'Travel', 'News']

  return (
    <>
      <Helmet>
        <title>News - Ncwala Ceremony Updates & Articles | Zambia</title>
        <meta name="description" content="Latest news and articles about the Ncwala Ceremony, Ngoni culture, and events." />
        <meta name="keywords" content="news, Ncwala updates, articles, Ngoni culture, ceremonies" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4 text-center">
          News & Updates
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded font-raleway transition-colors ${
                category === cat
                  ? 'bg-ncwala-gold text-ncwala-black'
                  : 'border border-ncwala-gold text-ncwala-black hover:bg-ncwala-gold/10'
              }`}
            >
              {cat === 'all' ? 'All Articles' : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {loading ? (
          <SkeletonLoader count={6} variant="article" />
        ) : articles.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 font-cinzel text-lg">No articles found in this category</p>
          </div>
        )}
      </div>
    </>
  )
}
