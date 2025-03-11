import React from 'react';
import { Facebook, Instagram, Twitter, Truck, FactoryIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">GaytriMoverAndPackers</span>
            </div>
            <p className="text-gray-400">
              Professional moving and packing services you can trust.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Local Moving</li>
              <li className="text-gray-400">Long Distance Moving</li>
              <li className="text-gray-400">Packing Services</li>
              <li className="text-gray-400">Storage Solutions</li>
              <li className="text-gray-400">Commercial Moving</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex mb-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">
              Subscribe to our newsletter for updates and special offers.
            </p>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} GaytriMoverAndPackers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}