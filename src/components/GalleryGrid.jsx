import React, { useState } from 'react'

export default function GalleryGrid({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 font-cinzel">No images available</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg h-48 cursor-pointer group"
            onClick={() => setSelectedImage(idx)}
          >
            {image.image_url ? (
              <>
                <img
                  src={image.image_url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3">
                  {image.title && (
                    <p className="text-ncwala-white font-cinzel text-sm line-clamp-2">
                      {image.title}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-ncwala-red to-ncwala-gold" />
            )}
          </div>
        ))}
      </div>

      {/* Simple Modal for image viewing */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].image_url}
              alt={images[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            {images[selectedImage].caption && (
              <p className="text-ncwala-white text-center mt-4">
                {images[selectedImage].caption}
              </p>
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-ncwala-white text-2xl hover:text-ncwala-gold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}
