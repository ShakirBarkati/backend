import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl font-bold">Fatwa<span className="text-emerald-400">Bayaan</span></h2>
            </div>
            <p className="text-gray-400 mb-6">
              Providing authentic Islamic guidance based on Quran and Sunnah to Muslims worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-700 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-700 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-700 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-700 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-emerald-400 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="#fatwas" className="text-gray-400 hover:text-emerald-400 transition">Browse Fatwas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Ask a Question</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Our Scholars</a></li>
            </ul>
          </div>

          {/* Fatwa Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6">Fatwa Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Worship (Ibadah)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Financial Transactions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Family Matters</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Social Issues</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Modern Challenges</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-emerald-400 mt-1" />
                <span className="text-gray-400">support@fatawabayaan.org</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-emerald-400 mt-1" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-emerald-400 mt-1" />
                <span className="text-gray-400">Islamic Guidance Center, Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FatwaBayaan. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;