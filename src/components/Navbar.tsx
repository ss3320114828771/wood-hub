'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon: 'fa-home' },
    { name: 'About', href: '/about', icon: 'fa-info-circle' },
    { name: 'Products', href: '/product', icon: 'fa-cube' },
    { name: 'Contact', href: '/contact', icon: 'fa-envelope' },
    { name: 'Info', href: '/info', icon: 'fa-address-card' },
    { name: 'Directions', href: '/directions', icon: 'fa-map-marker-alt' },
    { name: 'Cart', href: '/cart', icon: 'fa-shopping-cart' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-r from-purple-900/95 via-pink-800/95 to-indigo-900/95 backdrop-blur-lg shadow-2xl' 
        : 'bg-gradient-to-r from-purple-800/80 via-pink-700/80 to-indigo-800/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative">
              <h1 className="text-xl sm:text-2xl font-bold text-white animate-pulse-glow">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
                  حافظ ساجد
                </span>
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-3 py-2 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-white group-hover:text-gray-900 transition-colors duration-300 flex items-center space-x-2">
                  <i className={`fas ${item.icon} text-sm`}></i>
                  <span className="text-sm lg:text-base">{item.name}</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 p-0.5"
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 rounded-lg hover:bg-transparent transition-colors duration-300">
              <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-white text-xl`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 visible py-4' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="relative group p-3 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center space-y-1">
                  <i className={`fas ${item.icon} text-2xl text-white group-hover:text-gray-900 transition-colors duration-300`}></i>
                  <span className="text-xs text-white group-hover:text-gray-900 transition-colors duration-300">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}