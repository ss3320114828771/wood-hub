'use client'

import { useState } from 'react'

interface GalleryProps {
  images: number[]
}

export default function Gallery({ images }: GalleryProps) {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const handleImageError = (num: number) => {
    setImageErrors(prev => ({ ...prev, [num]: true }))
  }

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
            Our Gallery
          </span>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          ہماری تیار کردہ شاہکار مصنوعات
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((num) => (
            <div key={num} className="relative group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-800">
                {!imageErrors[num] ? (
                  <img
                    src={`/images/n${num}.jpeg`}
                    alt={`Gallery ${num}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(num)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400/20 via-pink-500/20 to-green-400/20 flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-image text-3xl text-gray-400 mb-2"></i>
                      <p className="text-xs text-gray-400">Product {num}</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}