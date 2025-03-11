import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Moving & Packing Services
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We make your move stress-free with our professional packing and moving services. 
              Trust us to handle your belongings with care.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50">
                Our Services
              </a>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80"
              alt="Moving service"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}