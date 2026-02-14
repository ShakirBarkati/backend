import React from 'react';
import { Shield, MessageSquare, ChevronDown, ArrowRight, User, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <Shield size={16} className="mr-2" /> Trusted Islamic Guidance
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Authentic <span className="text-emerald-700">Islamic Fatwas</span> for Modern Life
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Get reliable answers to your religious questions from qualified scholars. Explore a
              comprehensive database of Islamic rulings on various topics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition flex items-center justify-center">
                Ask a Question <MessageSquare size={20} className="ml-2" />
              </button>
              <button className="border border-emerald-600 text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition flex items-center justify-center">
                Browse Fatwas <ChevronDown size={20} className="ml-2" />
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700">2,500+</div>
                <div className="text-gray-600">Fatwas Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700">50+</div>
                <div className="text-gray-600">Qualified Scholars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700">24/7</div>
                <div className="text-gray-600">Available Support</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <User className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Recent Question</h3>
                  <p className="text-gray-600">Asked by Ahmed from London</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">
                  What is the ruling on investing in cryptocurrency from an Islamic perspective?
                </h4>
                <p className="text-gray-700">
                  This question has been answered by 3 scholars with detailed evidence from Quran and Sunnah.
                </p>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Star size={18} className="text-amber-500 fill-amber-500 mr-1" />
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-600 ml-1">(42 reviews)</span>
                </div>
                <div className="text-emerald-700 font-medium">Answered</div>
              </div>

              <button className="w-full bg-emerald-50 text-emerald-700 py-3 rounded-lg font-medium hover:bg-emerald-100 transition flex items-center justify-center">
                View Answer <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;