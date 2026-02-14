'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
              Admin Login
            </span>
          </h1>
          <p className="text-gray-400">Access the admin dashboard</p>
        </div>

        {/* Login Form */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-2xl blur opacity-75"></div>
          <div className="relative bg-gray-900 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-yellow-400 text-white transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-400 text-white transition-colors duration-300"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 rtl:space-x-reverse">
                  <input type="checkbox" className="form-checkbox bg-white/5 border-white/10 rounded text-pink-500" />
                  <span className="text-sm text-gray-400">Remember me</span>
                </label>
                <Link href="#" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full relative px-6 py-3 rounded-lg overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 blur-lg group-hover/btn:blur-xl transition-all duration-300"></div>
                <span className="relative z-10 text-white font-semibold">Login to Dashboard</span>
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Demo Credentials:</p>
              <p className="text-xs text-gray-500">Email: admin@woodcraft.com</p>
              <p className="text-xs text-gray-500">Password: admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}