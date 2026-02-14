export default function DirectionsPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
              Directions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Find your way to our workshop
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-2xl blur opacity-75"></div>
            <div className="relative bg-gray-900 rounded-2xl p-4 h-[400px] flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-4"></i>
                <p className="text-white text-xl mb-2">Google Maps Integration</p>
                <p className="text-gray-400">Village Adlana, Tehsil Bhawana</p>
                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-lg text-white font-semibold">
                  Open in Maps
                </button>
              </div>
            </div>
          </div>

          {/* Direction Details */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Complete Address</h2>
              <div className="space-y-3">
                <p className="text-gray-300 flex items-center space-x-3 rtl:space-x-reverse">
                  <i className="fas fa-map-pin text-yellow-400"></i>
                  <span>Hafiz Sajid Wood Craft</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3 rtl:space-x-reverse">
                  <i className="fas fa-location-dot text-pink-400"></i>
                  <span>Village Adlana</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3 rtl:space-x-reverse">
                  <i className="fas fa-city text-green-400"></i>
                  <span>Tehsil Bhawana</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3 rtl:space-x-reverse">
                  <i className="fas fa-flag text-yellow-400"></i>
                  <span>District, Pakistan</span>
                </p>
              </div>
            </div>

            {/* Transportation Options */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">How to Reach Us</h2>
              
              <div className="space-y-4">
                {[
                  { icon: 'fa-car', mode: 'By Car', desc: '30 minutes from Bhawana city center' },
                  { icon: 'fa-bus', mode: 'By Bus', desc: 'Regular bus service from main cities' },
                  { icon: 'fa-taxi', mode: 'By Taxi', desc: 'Available from Bhawana railway station' },
                  { icon: 'fa-walking', mode: 'Walking', desc: '15 min walk from Adlana chowk' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
                      <i className={`fas ${item.icon} text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{item.mode}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Landmarks */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Nearby Landmarks</h2>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Adlana Chowk',
                  'Bhawana Road',
                  'Central Mosque',
                  'Government School',
                  'Grain Market',
                  'Bus Stop'
                ].map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                    <i className="fas fa-check-circle text-green-400 text-sm"></i>
                    <span className="text-gray-300 text-sm">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Urdu Direction */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-green-400/10 rounded-2xl p-6">
            <p className="text-2xl text-white mb-2 font-arabic" style={{ fontFamily: 'Amiri, serif' }}>
              گاؤں اڈلانہ، تحصیل بھوانہ
            </p>
            <p className="text-yellow-300">آپ کا استقبال ہے</p>
          </div>
        </div>
      </div>
    </div>
  )
}