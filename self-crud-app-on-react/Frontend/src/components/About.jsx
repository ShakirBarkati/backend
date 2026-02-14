import React from 'react';
import { BookOpen, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-emerald-700">FatwaBayaan</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our mission is to provide authentic, evidence-based Islamic guidance to Muslims worldwide,
            connecting them with qualified scholars who can address contemporary issues within an Islamic
            framework.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-emerald-50 p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quran & Sunnah Based</h3>
            <p className="text-gray-700">
              All fatwas are derived from authentic Islamic sources with clear evidence from Quran and
              authentic Hadith.
            </p>
          </div>

          <div className="bg-amber-50 p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-amber-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Qualified Scholars</h3>
            <p className="text-gray-700">
              Our panel consists of certified Islamic scholars with expertise in various fields of Islamic
              jurisprudence.
            </p>
          </div>

          <div className="bg-teal-50 p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-teal-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic & Reliable</h3>
            <p className="text-gray-700">
              We ensure the authenticity and reliability of every fatwa through rigorous verification
              processes.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Have a Question About Islam?</h3>
              <p className="mb-6">
                Get personalized answers from qualified scholars. Our team is ready to help you with
                religious guidance on worship, transactions, family matters, and contemporary issues.
              </p>
              <button className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Submit Your Question
              </button>
            </div>
            <div className="md:w-1/3 text-center">
              <div className="text-5xl font-bold mb-2">24-48h</div>
              <div className="text-xl">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;