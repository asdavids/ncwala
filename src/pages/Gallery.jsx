import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import GalleryGrid from '../components/GalleryGrid'
import SkeletonLoader from '../components/SkeletonLoader'
import { supabase } from '../lib/supabase'

export default function Gallery() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setPhotos(data || [])
    } catch (error) {
      console.error('Error fetching photos:', error)
      // Mock photos for development
      setPhotos([
        {
          id: 1,
          title: 'Royal Procession',
          image_url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
          caption: 'The paramount chief in ceremonial procession',
        },
        {
          id: 2,
          title: 'Traditional Dance',
          image_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
          caption: 'Warriors performing traditional Ngoni dance',
        },
        {
          id: 3,
          title: 'Cultural Gathering',
          image_url: 'https://images.unsplash.com/photo-1540575467063-178f50c2dcc0?w=400&h=400&fit=crop',
          caption: 'Community gathering during the ceremony',
        },
        {
          id: 4,
          title: 'Royal Regalia',
          image_url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
          caption: 'Traditional Ngoni royal dress',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Gallery - Ncwala Ceremony Photos | Zambia</title>
        <meta name="description" content="Photo gallery from the Ncwala Ceremony featuring cultural moments, traditions, and celebrations." />
        <meta name="keywords" content="gallery, photos, Ncwala, ceremony, Ngoni culture" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4 text-center">
          Gallery
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Explore stunning photography from the Ncwala Ceremony capturing the beauty, traditions, and cultural heritage of the Ngoni people
        </p>

        {loading ? (
          <SkeletonLoader count={12} variant="gallery" />
        ) : (
          <GalleryGrid images={photos} />
        )}
      </div>
    </>
  )
}
