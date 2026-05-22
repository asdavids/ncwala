import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SkeletonLoader from '../components/SkeletonLoader'
import { supabase } from '../lib/supabase'

export default function Blog() {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticle()
  }, [slug])

  const fetchArticle = async () => {
    setLoading(true)
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

      const response = await fetch(
        `${supabaseUrl}/functions/v1/get-article`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${supabaseKey}`,
          },
          body: JSON.stringify({ slug }),
        }
      )

      const data = await response.json()
      setArticle(data)
    } catch (error) {
      console.error('Error fetching article:', error)
      // Mock article for development
      setArticle({
        title: 'Ncwala 2024: Cultural Celebrations Begin',
        slug: 'ncwala-2024-celebrations',
        body: 'The Ncwala Ceremony celebrates the First Fruits and royal heritage of the Ngoni people. This year promises unprecedented celebrations...',
        author: 'James Kumwenda',
        read_time: 8,
        created_at: new Date().toISOString(),
      })
    } finally {
      setLoading(false)
    }
  }

  const renderArticleBody = (body) => {
    if (!body) return null
    return body.split('\n\n').map((paragraph, idx) => (
      <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
        {paragraph}
      </p>
    ))
  }

  if (loading) return <SkeletonLoader count={5} />

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="font-cinzel text-3xl text-ncwala-red">Article not found</h1>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Ncwala Blog</title>
        <meta name="description" content={article.body?.substring(0, 160)} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            'headline': article.title,
            'author': article.author,
            'datePublished': article.created_at,
          })}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 border-b border-ncwala-gold pb-8">
          <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="font-cinzel"><strong>By</strong> {article.author || 'Ncwala Team'}</span>
            <span className="font-cinzel"><strong>Published</strong> {new Date(article.created_at).toLocaleDateString()}</span>
            <span className="font-cinzel"><strong>Reading time</strong> {article.read_time || 5} minutes</span>
          </div>
        </div>

        {/* Featured Image */}
        {article.image_url && (
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}

        {/* Body */}
        <article className="prose max-w-none font-garamond">
          {renderArticleBody(article.body)}
        </article>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-cinzel text-lg text-ncwala-black mb-2">About the Author</h3>
            <p className="text-gray-700">
              {article.author || 'Ncwala Team'} is a contributor to Ncwala's cultural documentation and news updates.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
