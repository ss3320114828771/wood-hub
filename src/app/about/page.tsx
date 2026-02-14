import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-pink-500/20 to-green-400/20 rounded-3xl blur-3xl"></div>
        
        <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
                About Us
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
                  <i className="fas fa-user-tie text-3xl text-white"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Hafiz Syed Sajid Hussain</h2>
                  <p className="text-yellow-300">Master Craftsman</p>
                </div>
              </div>

              <p className="text-lg text-gray-200 leading-relaxed">
                With over 25 years of experience in traditional woodcraft, Hafiz Syed Sajid Hussain has been creating 
                exquisite wooden masterpieces that blend traditional techniques with modern design aesthetics.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                Based in the historic village of Adlana, Tehsil Bhawana, our workshop has become a destination for 
                those seeking premium handcrafted wooden articles that tell a story of dedication and artistry.
              </p>

              <div className="bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-green-400/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Our Philosophy</h3>
                <p className="text-gray-200 italic">
                  "Every piece of wood has a story to tell. Our job is to bring that story to life through careful 
                  craftsmanship and attention to detail."
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '25+', label: 'Years Experience' },
                { number: '1000+', label: 'Happy Clients' },
                { number: '500+', label: 'Unique Designs' },
                { number: '50+', label: 'Awards Won' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            icon: 'fa-eye',
            title: 'Our Vision',
            desc: 'To become the leading name in handcrafted wooden articles while preserving traditional craftsmanship and promoting sustainable practices.'
          },
          {
            icon: 'fa-bullseye',
            title: 'Our Mission',
            desc: 'Creating beautiful, functional wooden pieces that bring joy to homes while providing employment opportunities to local artisans.'
          }
        ].map((item, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <i className={`fas ${item.icon} text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-4`}></i>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-200">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Urdu Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-green-400/10 rounded-2xl p-8">
          <p className="text-3xl font-bold text-white mb-4 font-arabic" style={{ fontFamily: 'Amiri, serif' }}>
            حافظ سید ساجد حسین
          </p>
          <p className="text-xl text-gray-200 mb-2 font-arabic" style={{ fontFamily: 'Amiri, serif' }}>
            گاؤں اڈلانہ، تحصیل بھوانہ
          </p>
          <p className="text-lg text-yellow-300">
            دستکاری میں چار دہائیوں کا تجربہ
          </p>
        </div>
      </div>
    </div>
  )
}