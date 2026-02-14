'use client'
import { useState } from 'react'
import Link from 'next/link'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Premium Wood Product 1', price: 99.99, quantity: 1, image: '/images/n1.jpeg' },
    { id: 2, name: 'Premium Wood Product 2', price: 149.99, quantity: 2, image: '/images/n2.jpeg' },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 10.00
  const total = subtotal + shipping

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
              Shopping Cart
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-full blur-2xl opacity-50"></div>
              <i className="fas fa-shopping-cart text-8xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-4 relative"></i>
            </div>
            <h2 className="text-2xl text-white mb-4">Your cart is empty</h2>
            <Link href="/product" className="inline-block relative px-8 py-3 rounded-full overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400"></div>
              <span className="relative z-10 text-white font-semibold">Continue Shopping</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-gray-900 rounded-2xl p-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                        <i className="fas fa-image text-3xl text-gray-500"></i>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 font-bold">
                              ${item.price}
                            </p>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 transition-all duration-300 text-white"
                            >
                              <i className="fas fa-minus text-sm"></i>
                            </button>
                            <span className="w-10 text-center text-white font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 transition-all duration-300 text-white"
                            >
                              <i className="fas fa-plus text-sm"></i>
                            </button>
                          </div>

                          {/* Item Total */}
                          <div className="text-right">
                            <p className="text-sm text-gray-400">Total</p>
                            <p className="text-lg font-bold text-white">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-300 transition-colors duration-300"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gray-900 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 relative px-6 py-3 rounded-lg overflow-hidden group/btn">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 blur-lg group-hover/btn:blur-xl transition-all duration-300"></div>
                  <span className="relative z-10 text-white font-semibold">Proceed to Checkout</span>
                </button>

                {/* Urdu Text */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-400 font-arabic" style={{ fontFamily: 'Amiri, serif' }}>
                    آرڈر کی تصدیق کریں
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}