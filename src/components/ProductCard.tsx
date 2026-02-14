'use client'
import Link from 'next/link'
import { useState } from 'react'

interface ProductCardProps {
  id: number
}

export default function ProductCard({ id }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 animate-gradient"></div>
      
      {/* Content */}
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
        {/* Image Container with 3D Effect */}
        <div className={`relative h-48 sm:h-56 md:h-64 overflow-hidden transform transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <img
            src={`/images/n${id}.jpeg`}
            alt={`Product ${id}`}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          
          {/* 3D Rotating Badge */}
          <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full flex items-center justify-center animate-3d-rotate">
            <span className="text-white font-bold text-xs">New</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-4">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
            Premium Wood Product {id}
          </h3>
          
          <p className="text-sm text-gray-300 mb-4">
            Handcrafted with premium quality wood, perfect for your home decor.
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
              $99.99
            </span>
            
            <Link
              href={`/product/${id}`}
              className="relative px-4 py-2 rounded-full overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400"></div>
              <span className="relative z-10 text-white text-sm font-semibold">View Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}