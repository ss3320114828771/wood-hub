// Product Types
export interface Product {
  id: number;
  name: string;
  nameUrdu?: string;
  price: number;
  description: string;
  descriptionUrdu?: string;
  category: string;
  images: string[];
  inStock: boolean;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Cart Types
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  productId: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  itemCount: number;
}

// Order Types
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  customerId?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: OrderStatus;
  paymentMethod: string;
  paymentStatus: 'paid' | 'unpaid' | 'refunded';
  shippingAddress: Address;
  billingAddress?: Address;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Address Types
export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  landmark?: string;
}

// User Types
export type UserRole = 'admin' | 'customer' | 'guest';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  addresses?: Address[];
  createdAt: Date;
  updatedAt: Date;
}

// Contact Types
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt?: Date;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon: string;
  children?: NavItem[];
}

// Category Types
export interface Category {
  id: number;
  name: string;
  nameUrdu?: string;
  slug: string;
  description?: string;
  image?: string;
  productCount?: number;
}

// Review Types
export interface Review {
  id: number;
  productId: number;
  userId?: string;
  userName: string;
  rating: number;
  title?: string;
  comment: string;
  createdAt: Date;
  updatedAt?: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  statusCode: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
}

export interface CheckoutForm {
  shippingAddress: Address;
  billingAddress?: Address;
  paymentMethod: string;
  notes?: string;
}

// Filter Types
export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  featured?: boolean;
  search?: string;
  sortBy?: 'price' | 'name' | 'createdAt' | 'rating';
  sortOrder?: 'asc' | 'desc';
}

// Dashboard Types
export interface DashboardStats {
  totalProducts: number;
  totalOrders: number;
  totalCustomers: number;
  totalRevenue: number;
  recentOrders: Order[];
  popularProducts: Product[];
}

export interface AdminStats {
  products: number;
  orders: number;
  customers: number;
  revenue: number;
  pendingOrders: number;
  outOfStock: number;
}

// Payment Types
export interface PaymentDetails {
  method: string;
  transactionId?: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  paidAt?: Date;
}

// Shipping Types
export interface ShippingMethod {
  id: string;
  name: string;
  price: number;
  estimatedDays: string;
  description?: string;
}

// Theme Types
export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// Component Props Types
export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  inStock?: boolean;
  featured?: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export interface InputProps {
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

// Context Types
export interface CartContextType {
  cart: Cart;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: RegisterForm) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

// Utility Types
export type WithChildren<T = {}> = T & {
  children: React.ReactNode;
};

export type WithClassName<T = {}> = T & {
  className?: string;
};

export type WithTestId<T = {}> = T & {
  testId?: string;
};

// Enums
export enum PaymentMethod {
  COD = 'cod',
  BANK_TRANSFER = 'bank_transfer',
  EASYPAISA = 'easypaisa',
  JAZZCASH = 'jazzcash',
  CREDIT_CARD = 'credit_card'
}

export enum OrderStatusEnum {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

// Date Range Type
export interface DateRange {
  startDate: Date;
  endDate: Date;
}

// Chart Data Types
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
  }[];
}

// Notification Types
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
  createdAt: Date;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

// Breadcrumb Types
export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
}

// Menu Types
export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
  children?: MenuItem[];
  divider?: boolean;
}