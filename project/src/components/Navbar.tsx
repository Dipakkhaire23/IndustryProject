import React from 'react';
import { Menu, Truck, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed z-50 w-full bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Truck className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">GaytriPackersAndMovers</span>
          </div>
          
          <div className="items-center hidden space-x-8 md:flex">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            <a href="/contact" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Get Quote
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</a>
            <a href="/services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</a>
            <a href="/pricing" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="/testimonials" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Testimonials</a>
            <a href="/contact" className="block px-3 py-2 text-white bg-blue-600 rounded-md">Get Quote</a>
          </div>
        </div>
      )}
    </nav>
  );
}