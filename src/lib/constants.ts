// Site Information
export const SITE_INFO = {
  name: 'Hafiz Sajid Wood Craft',
  nameUrdu: 'حافظ ساجد وڈ کرافٹ',
  owner: 'Hafiz Syed Sajid Hussain',
  ownerUrdu: 'حافظ سید ساجد حسین',
  phone: '0308 4591993',
  email: 'sajidsyedhafizsajidsyed@gmail.com',
  address: {
    village: 'Adlana',
    villageUrdu: 'اڈلانہ',
    tehsil: 'Bhawana',
    tehsilUrdu: 'بھوانہ',
    district: 'District',
    country: 'Pakistan'
  }
}

// Product Categories
export const PRODUCT_CATEGORIES: string[] = [
  'All',
  'Furniture',
  'Decor',
  'Kitchenware',
  'Gifts',
  'Custom Orders'
]

// Navigation Items
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/', icon: 'fa-home' },
  { name: 'About', href: '/about', icon: 'fa-info-circle' },
  { name: 'Products', href: '/product', icon: 'fa-cube' },
  { name: 'Contact', href: '/contact', icon: 'fa-envelope' },
  { name: 'Info', href: '/info', icon: 'fa-address-card' },
  { name: 'Directions', href: '/directions', icon: 'fa-map-marker-alt' },
  { name: 'Cart', href: '/cart', icon: 'fa-shopping-cart' }
]

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/hafizsajidwoodcraft',
  twitter: 'https://twitter.com/hafizsajidwood',
  instagram: 'https://instagram.com/hafizsajidwoodcraft',
  whatsapp: 'https://wa.me/923084591993'
}

// Business Hours
export const BUSINESS_HOURS = [
  { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: '11:00 AM - 4:00 PM' }
]

// Features List
export const FEATURES = [
  { icon: 'fa-hand', title: 'Handcrafted', description: 'Each piece uniquely crafted with love' },
  { icon: 'fa-tree', title: 'Premium Wood', description: 'Best quality materials sourced locally' },
  { icon: 'fa-paint-brush', title: 'Artistic Design', description: 'Traditional & modern fusion designs' },
  { icon: 'fa-truck', title: 'Nationwide Delivery', description: 'Safe packaging & shipping across Pakistan' }
]

// Stats for Homepage
export const STATS = [
  { number: '50+', label: 'Products' },
  { number: '25+', label: 'Years Experience' },
  { number: '1000+', label: 'Happy Clients' },
  { number: '500+', label: 'Unique Designs' }
]

// FAQ Items
export const FAQ_ITEMS = [
  {
    question: 'Do you take custom orders?',
    answer: 'Yes, we specialize in custom wooden articles. Contact us with your requirements for a personalized quote.'
  },
  {
    question: 'What types of wood do you use?',
    answer: 'We use premium quality Sheesham, Oak, Walnut, and locally sourced sustainable woods.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Local delivery: 1-2 days. Nationwide: 3-5 business days depending on your location.'
  },
  {
    question: 'Do you offer warranty?',
    answer: 'All our products come with a 1-year warranty against manufacturing defects.'
  }
]

// Payment Methods
export const PAYMENT_METHODS = [
  'Cash on Delivery',
  'Bank Transfer',
  'EasyPaisa',
  'JazzCash',
  'Credit/Debit Cards'
]

// Delivery Information
export const DELIVERY_INFO = {
  freeDeliveryRadius: 10, // km
  standardShipping: 10.00, // $
  expressShipping: 20.00, // $
  processingTime: '24-48 hours',
  returnPolicy: '7-day return policy with full money-back guarantee'
}

// Admin Credentials (for demo purposes)
export const ADMIN_CREDENTIALS = {
  email: 'admin@woodcraft.com',
  password: 'admin123'
}

// Error Messages
export const ERROR_MESSAGES = {
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
  invalidPhone: 'Please enter a valid phone number',
  passwordMismatch: 'Passwords do not match',
  generic: 'Something went wrong. Please try again.'
}

// Success Messages
export const SUCCESS_MESSAGES = {
  formSubmitted: 'Thank you for contacting us. We will get back to you soon!',
  orderPlaced: 'Your order has been placed successfully!',
  addedToCart: 'Product added to cart successfully!',
  removedFromCart: 'Product removed from cart successfully!'
}

// Urdu Text
export const URDU_TEXT = {
  welcome: 'خوش آمدید',
  contact: 'ہم سے رابطہ کریں',
  quality: 'معیار ہماری پہچان ہے',
  address: 'گاؤں اڈلانہ، تحصیل بھوانہ',
  phone: '0308 4591993',
  email: 'sajidsyedhafizsajidsyed@gmail.com'
}

// Image paths
export const IMAGES = {
  products: [
    '/images/n1.jpeg',
    '/images/n2.jpeg',
    '/images/n3.jpeg',
    '/images/n4.jpeg',
    '/images/n5.jpeg',
    '/images/n6.jpeg'
  ],
  logo: '/images/logo.png',
  favicon: '/favicon.ico'
}

// Color schemes
export const GRADIENTS = {
  primary: 'from-yellow-400 via-pink-500 to-green-400',
  secondary: 'from-purple-900 via-pink-800 to-indigo-900',
  text: 'from-yellow-300 via-pink-300 to-green-300',
  button: 'from-yellow-400 via-pink-500 to-green-400'
}

// Animation durations
export const ANIMATIONS = {
  float: 'float 3s ease-in-out infinite',
  pulseGlow: 'pulse-glow 2s ease-in-out infinite',
  gradient: 'gradient-shift 8s ease infinite',
  rotate3d: 'rotate-3d 10s linear infinite'
}