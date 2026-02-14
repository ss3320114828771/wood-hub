export default function InfoPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
              Information
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: 'fa-truck',
              title: 'Delivery Information',
              items: [
                'Free delivery within 10km',
                'Nationwide shipping available',
                'Secure packaging guaranteed',
                'Track your order online'
              ]
            },
            {
              icon: 'fa-credit-card',
              title: 'Payment Methods',
              items: [
                'Cash on Delivery',
                'Bank Transfer',
                'EasyPaisa/JazzCash',
                'Credit/Debit Cards'
              ]
            },
            {
              icon: 'fa-undo',
              title: 'Return Policy',
              items: [
                '7-day return policy',
                'Full money-back guarantee',
                'Free exchanges',
                'Quality checked'
              ]
            },
            {
              icon: 'fa-shield-alt',
              title: 'Quality Assurance',
              items: [
                'Premium wood selection',
                'Expert craftsmanship',
                'Durability tested',
                'Finest finishes'
              ]
            },
            {
              icon: 'fa-clock',
              title: 'Processing Time',
              items: [
                'Custom orders: 5-7 days',
                'Ready items: 24 hours',
                'Bulk orders: 2-3 weeks',
                'Express available'
              ]
            },
            {
              icon: 'fa-hand-holding-heart',
              title: 'Custom Orders',
              items: [
                'Personalized designs',
                'Size customization',
                'Wood type selection',
                'Design consultation'
              ]
            }
          ].map((section, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-6 h-full">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center mb-4">
                  <i className={`fas ${section.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                      <i className="fas fa-check-circle text-green-400 text-sm"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Do you take custom orders?',
                a: 'Yes, we specialize in custom wooden articles. Contact us with your requirements.'
              },
              {
                q: 'What types of wood do you use?',
                a: 'We use premium quality Sheesham, Oak, Walnut, and local woods.'
              },
              {
                q: 'How long does delivery take?',
                a: 'Local delivery: 1-2 days. Nationwide: 3-5 business days.'
              },
              {
                q: 'Do you offer warranty?',
                a: 'All our products come with a 1-year warranty against manufacturing defects.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urdu Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 via-pink-500/10 to-green-400/10 rounded-2xl p-8">
            <p className="text-2xl text-white mb-4 font-arabic" style={{ fontFamily: 'Amiri, serif' }}>
              حافظ ساجد وڈ کرافٹ
            </p>
            <p className="text-lg text-gray-300 mb-2 font-arabic" style={{ fontFamily: 'Amiri, serif' }}>
              معیار ہماری پہچان ہے
            </p>
            <p className="text-yellow-300">Quality is our identity</p>
          </div>
        </div>
      </div>
    </div>
  )
}