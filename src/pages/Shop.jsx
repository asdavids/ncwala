import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ShoppingCart, Heart } from 'lucide-react'

export default function Shop() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  const products = [
    {
      id: 1,
      name: 'Traditional Ngoni Attire',
      category: 'Clothing',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=250&h=250&fit=crop',
      desc: 'Authentic handmade traditional dress with authentic patterns and vibrant colors.',
    },
    {
      id: 2,
      name: 'Beaded Necklace',
      category: 'Jewelry',
      price: '$32',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=250&h=250&fit=crop',
      desc: 'Intricately beaded necklace featuring traditional Ngoni patterns and colors.',
    },
    {
      id: 3,
      name: 'Carved Wooden Figure',
      category: 'Crafts',
      price: '$28',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=250&h=250&fit=crop',
      desc: 'Hand-carved wooden sculpture of an Ngoni warrior or royal figure.',
    },
    {
      id: 4,
      name: 'Traditional Drum',
      category: 'Music',
      price: '$65',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=250&h=250&fit=crop',
      desc: 'Authentic traditional drum used in Ncwala ceremonies with genuine leather head.',
    },
    {
      id: 5,
      name: 'Woven Basket',
      category: 'Crafts',
      price: '$22',
      image: 'https://images.unsplash.com/photo-1595148397518-a3fb7ba636d9?w=250&h=250&fit=crop',
      desc: 'Hand-woven basket made with traditional techniques by local artisans.',
    },
    {
      id: 6,
      name: 'Ncwala Coffee Blend',
      category: 'Food',
      price: '$15',
      image: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=250&h=250&fit=crop',
      desc: 'Premium coffee from Eastern Province farms with special Ncwala blend.',
    },
    {
      id: 7,
      name: 'Royal Beaded Crown',
      category: 'Jewelry',
      price: '$55',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=250&h=250&fit=crop',
      desc: 'Decorative beaded crown inspired by Ngoni royal regalia and ceremonial wear.',
    },
    {
      id: 8,
      name: 'Inspired Art Book',
      category: 'Books',
      price: '$18',
      image: 'https://images.unsplash.com/photo-1507842217343-583e7270bfda?w=250&h=250&fit=crop',
      desc: 'Illustrated guide to Ncwala Ceremony, Ngoni history, and cultural traditions.',
    },
  ]

  const toggleCart = (product) => {
    setCart([...cart, product])
  }

  const toggleWishlist = (product) => {
    setWishlist([...wishlist, product])
  }

  return (
    <>
      <Helmet>
        <title>Shop - Ngoni Attire, Crafts & Souvenirs | Ncwala</title>
        <meta name="description" content="Shop for authentic Ngoni attire, crafts, jewelry, and souvenirs celebrating the Ncwala Ceremony." />
        <meta name="keywords" content="shop, Ngoni attire, crafts, souvenirs, jewelry, traditional items" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-cinzel-decorative text-5xl text-ncwala-red mb-4 text-center">
          Ncwala Shop
        </h1>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            Authentic Ngoni attire, traditional crafts, and cultural souvenirs
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-xs text-ncwala-gold font-raleway uppercase mb-1">{product.category}</p>
                <h3 className="font-cinzel text-sm text-ncwala-black mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="font-cinzel text-lg text-ncwala-red">{product.price}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleCart(product)}
                      className="p-2 hover:bg-ncwala-gold hover:text-white rounded transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingCart size={18} />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="p-2 hover:bg-ncwala-gold hover:text-white rounded transition-colors"
                      title="Add to Wishlist"
                    >
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <section className="bg-gray-50 rounded-lg p-8 my-16 text-center">
          <h2 className="font-cinzel text-2xl text-ncwala-black mb-4">Supporting Local Artisans</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Every purchase directly supports local Ngoni artisans and craftspeople, helping preserve traditional skills and cultural heritage. Quality craftsmanship meets fair-trade practices.
          </p>
        </section>
      </div>
    </>
  )
}
