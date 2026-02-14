'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Total Products', value: '156', icon: 'fa-box', color: 'from-yellow-400 to-yellow-500' },
    { label: 'Total Orders', value: '2,345', icon: 'fa-shopping-cart', color: 'from-pink-400 to-pink-500' },
    { label: 'Total Customers', value: '1,289', icon: 'fa-users', color: 'from-green-400 to-green-500' },
    { label: 'Revenue', value: '$45,678', icon: 'fa-dollar-sign', color: 'from-purple-400 to-purple-500' },
  ]

  const recentOrders = [
    { id: '#1001', customer: 'John Doe', amount: '$299', status: 'Delivered', date: '2024-01-15' },
    { id: '#1002', customer: 'Jane Smith', amount: '$149', status: 'Processing', date: '2024-01-14' },
    { id: '#1003', customer: 'Ali Khan', amount: '$399', status: 'Shipped', date: '2024-01-14' },
    { id: '#1004', customer: 'Sarah Ahmed', amount: '$89', status: 'Pending', date: '2024-01-13' },
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
              Admin Dashboard
            </span>
          </h1>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
                <i className="fas fa-bell text-white"></i>
              </button>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500"></div>
              <span className="text-white font-medium">Admin</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                  <i className={`fas ${stat.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {['overview', 'products', 'orders', 'customers', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full capitalize whitespace-nowrap transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gray-900 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Recent Orders</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400 text-sm">
                        <th className="pb-3">Order ID</th>
                        <th className="pb-3">Customer</th>
                        <th className="pb-3">Amount</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <tr key={index} className="border-t border-white/10">
                          <td className="py-3 text-white">{order.id}</td>
                          <td className="py-3 text-gray-300">{order.customer}</td>
                          <td className="py-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 font-semibold">
                            {order.amount}
                          </td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                              order.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-400' :
                              order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 text-gray-400">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button className="mt-4 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-sm">
                  View All Orders →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gray-900 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
                
                <div className="space-y-3">
                  {[
                    { icon: 'fa-plus', label: 'Add New Product', color: 'from-yellow-400 to-pink-500' },
                    { icon: 'fa-edit', label: 'Edit Products', color: 'from-pink-500 to-green-400' },
                    { icon: 'fa-truck', label: 'Update Orders', color: 'from-green-400 to-yellow-400' },
                    { icon: 'fa-users', label: 'Manage Customers', color: 'from-yellow-400 to-green-400' },
                    { icon: 'fa-chart-line', label: 'View Reports', color: 'from-pink-500 to-yellow-400' },
                  ].map((action, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-green-400 transition-all duration-300 group/btn"
                    >
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center`}>
                        <i className={`fas ${action.icon} text-white text-sm`}></i>
                      </div>
                      <span className="text-white group-hover/btn:text-gray-900 transition-colors duration-300">
                        {action.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}