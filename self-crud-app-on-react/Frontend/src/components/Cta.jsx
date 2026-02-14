import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Islamic Guidance?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Submit your question to our panel of qualified scholars and receive a detailed,
            evidence-based response within 24-48 hours.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Ask a Question Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Browse Scholar Profiles
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="opacity-90">Free Service</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90">Certified Scholars</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">10k+</div>
              <div className="opacity-90">Questions Answered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;