import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="relative mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
            Our Products
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
          Discover our collection of handcrafted wooden masterpieces
        </p>
        
        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {['All', 'Furniture', 'Decor', 'Kitchenware', 'Gifts'].map((category) => (
            <button
              key={category}
              className="relative px-4 py-2 rounded-full overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-white group-hover:text-gray-900 transition-colors duration-300">
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((id) => (
            <ProductCard key={id} id={id} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-center">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-green-400 transition-all duration-300 text-white"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}