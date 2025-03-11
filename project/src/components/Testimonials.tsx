import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Kajal',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'The team was professional and efficient. They handled our belongings with care and made our move stress-free.'
  },
  {
    name: 'Raj',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    content: 'Outstanding service! They helped us relocate our office seamlessly. Highly recommend their commercial moving services.'
  },
  {
    name: 'Ashwini',
    role: 'Apartment Resident',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    content: 'From packing to unpacking, everything was handled professionally. The team was courteous and punctual.'
  }
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Real feedback from satisfied customers</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}