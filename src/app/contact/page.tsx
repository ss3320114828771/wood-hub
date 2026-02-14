'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
              Contact Us
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch with us for custom orders or inquiries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-yellow-400 text-white transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-400 text-white transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-green-400 text-white transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-yellow-400 text-white transition-colors duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full relative px-8 py-4 rounded-lg overflow-hidden group/btn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 blur-lg group-hover/btn:blur-xl transition-all duration-300"></div>
                  <span className="relative z-10 text-white font-bold text-lg">Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Personal Info Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
                      <i className="fas fa-user text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Owner</p>
                      <p className="text-white font-semibold">Hafiz Syed Sajid Hussain</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-green-400 flex items-center justify-center">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-semibold" dir="ltr">0308 4591993</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 flex items-center justify-center">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-semibold text-sm break-all">sajidsyedhafizsajidsyed@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-green-400 flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white font-semibold">Village Adlana, Tehsil Bhawana</p>
                      <p className="text-gray-400 text-sm">District, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-green-400 to-yellow-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
                
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
                    { day: 'Sunday', hours: '11:00 AM - 4:00 PM' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-white font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                {/* Urdu Text */}
                <div className="mt-6 text-center">
                  <p className="text-yellow-300 font-arabic" style={{ fontFamily: 'Amiri, serif' }}>
                    ہم سے رابطہ کریں
                  </p>
                  <p className="text-sm text-gray-400 mt-2">آپ کے سوالات کا خیر مقدم ہے</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}