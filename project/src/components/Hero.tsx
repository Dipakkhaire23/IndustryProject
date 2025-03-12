import React from 'react';
import { ArrowRight,PhoneCallIcon } from 'lucide-react';

 function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Professional Moving & Packing Services
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              We make your move stress-free with our professional packing and moving services. 
              Trust us to handle your belongings with care.
            </p>
            <div className="flex space-x-4">
              <a href="/contact" className="flex items-center px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/services" className="px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
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
        {/* Call Button (Floating with Animation) */}
        <section className="relative py-16 bg-gray-50">
      {/* Floating Call Button */}
      <a
        href="tel:+918080496332"
        className="fixed z-50 p-4 text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-full shadow-lg bottom-8 right-8 hover:bg-green-700 hover:scale-110 hover:rotate-12 animate-pulse"
      >
        <PhoneCallIcon size={30} />
      </a>
    </section>
    </div>
  );
}
export default Hero