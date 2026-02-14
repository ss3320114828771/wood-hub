import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-800 to-indigo-900 animate-gradient"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
              حافظ ساجد وڈ کرافٹ
            </h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Premium handcrafted wood articles with traditional expertise and modern design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-200 hover:text-yellow-300 transition-colors duration-300 text-sm sm:text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center sm:justify-start space-x-3 text-gray-200">
                <i className="fas fa-phone text-yellow-300"></i>
                <span className="text-sm sm:text-base dir-rtl">0308 4591993</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3 text-gray-200">
                <i className="fas fa-envelope text-pink-300"></i>
                <span className="text-xs sm:text-sm break-all">sajidsyedhafizsajidsyed@gmail.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3 text-gray-200">
                <i className="fas fa-map-marker-alt text-green-300"></i>
                <span className="text-sm sm:text-base">Adlana, Tehsil Bhawana, District</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex justify-center sm:justify-start space-x-4">
              {['facebook', 'twitter', 'instagram', 'whatsapp'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="group relative w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 p-0.5 hover:scale-110 transition-transform duration-300"
                >
                  <div className="flex items-center justify-center w-full h-full bg-gray-900 rounded-full group-hover:bg-transparent transition-colors duration-300">
                    <i className={`fab fa-${social} text-white group-hover:text-gray-900 transition-colors duration-300`}></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-white/20 text-center">
          <p className="text-gray-300 text-xs sm:text-sm">
            © 2024 Hafiz Sajid Wood Craft. All rights reserved. | 
            <span className="block sm:inline mt-2 sm:mt-0">
              Designed with <i className="fas fa-heart text-red-500 animate-pulse"></i> in Adlana
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}