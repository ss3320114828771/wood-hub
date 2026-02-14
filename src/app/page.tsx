import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import Gallery from '@/components/Gallery'

export default function Home() {
  const featuredProducts = [1, 2, 3, 4, 5, 6]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with 3D Animation */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 animate-gradient"></div>
          
          <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border-4 border-yellow-400/30 rounded-full animate-3d-rotate"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border-4 border-pink-400/30 rounded-full animate-3d-rotate" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center animate-pulse-glow">
              <i className="fas fa-tree text-4xl sm:text-5xl text-white"></i>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300 animate-pulse">
              حافظ ساجد وڈ کرافٹ
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-white/90 max-w-3xl mx-auto">
            Handcrafted Wood Articles with 
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              Traditional Excellence
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/product" className="group relative px-8 py-4 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <span className="relative z-10 text-white font-bold text-lg">Explore Products</span>
            </Link>
            
            <Link href="/about" className="group relative px-8 py-4 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-white font-bold text-lg group-hover:text-gray-900 transition-colors duration-300">Learn More</span>
            </Link>
          </div>

          {/* Stats with Icons */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { number: '50+', label: 'Products', icon: 'fa-cube' },
              { number: '25+', label: 'Years Experience', icon: 'fa-clock' },
              { number: '1000+', label: 'Happy Clients', icon: 'fa-smile' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
                    <i className={`fas ${stat.icon} text-white text-xl`}></i>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
              Featured Products
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((id) => (
              <ProductCard key={id} id={id} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/product" className="inline-flex items-center space-x-2 group relative px-8 py-4 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400"></div>
              <span className="relative z-10 text-white font-semibold">View All Products</span>
              <i className="fas fa-arrow-right relative z-10 text-white group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery images={[1, 2, 3, 4, 5, 6]} />

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'fa-hand', title: 'Handcrafted', desc: 'Each piece uniquely crafted' },
              { icon: 'fa-tree', title: 'Premium Wood', desc: 'Best quality materials' },
              { icon: 'fa-paint-brush', title: 'Artistic Design', desc: 'Traditional & modern fusion' },
              { icon: 'fa-truck', title: 'Nationwide Delivery', desc: 'Safe packaging & shipping' },
            ].map((feature, index) => (
              <div key={index} className="group relative p-6 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className={`fas ${feature.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-800 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-green-400/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for custom orders and inquiries
          </p>
          <Link href="/contact" className="inline-flex items-center space-x-2 group relative px-8 py-4 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <span className="relative z-10 text-white font-bold text-lg">Get in Touch</span>
            <i className="fas fa-phone-alt relative z-10 text-white"></i>
          </Link>
        </div>
      </section>
    </div>
  )
}