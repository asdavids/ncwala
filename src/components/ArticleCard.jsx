import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, MapPin, Users } from 'lucide-react'

export default function ArticleCard({ article, featured = false }) {
  if (!article) return null

  return (
    <Link to={`/blog/${article.slug}`}>
      <div className={`group cursor-pointer transition-transform hover:scale-105 ${featured ? 'md:col-span-2' : ''}`}>
        <div className={`relative overflow-hidden rounded-lg ${featured ? 'h-96' : 'h-64'}`}>
          {article.image_url ? (
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-ncwala-red to-ncwala-gold flex items-center justify-center">
              <div className="text-ncwala-white/50 font-cinzel text-lg">No Image</div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="text-ncwala-white">
              <span className="inline-block bg-ncwala-gold text-ncwala-black text-xs font-raleway px-3 py-1 rounded-full mb-3">
                {article.category || 'Ncwala'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className={`font-cinzel text-ncwala-black ${featured ? 'text-2xl' : 'text-lg'} line-clamp-2 group-hover:text-ncwala-gold transition-colors`}>
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {article.excerpt}
          </p>
          
          <div className={`flex items-center space-x-4 mt-3 ${featured ? 'flex-wrap' : ''} text-xs text-gray-500`}>
            {article.author && (
              <span className="flex items-center space-x-1">
                <Users size={14} />
                <span>{article.author}</span>
              </span>
            )}
            {article.read_time && (
              <span className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{article.read_time} min read</span>
              </span>
            )}
            {article.created_at && (
              <span className="flex items-center space-x-1">
                <MapPin size={14} />
                <span>{new Date(article.created_at).toLocaleDateString()}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
