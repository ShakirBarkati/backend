import React, { useEffect, useState, useMemo } from 'react';
import { Star, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import axios from 'axios';



const Fatwas = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [fatwas, setFatwas] = useState([]);


  // Get All Fatwas
  useEffect(() => {
    axios
      .get('http://localhost:3000/fatwas')
      .then((res) => {
        setFatwas(res.data);   // IMPORTANT
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const filteredFatwas =
    activeCategory === 'all'
      ? fatwas
      : fatwas.filter(
        (fatwa) => fatwa.category === activeCategory
      );

  const uniqueCategories = useMemo(() => {
    return Array.from(
      new Set(fatwas.map((fatwa) => fatwa.category))
    );
  }, [fatwas]);

  const categories = [
    { id: "all", name: "All Fatwas" },
    ...uniqueCategories.map((cat) => ({
      id: cat,
      name: cat,
    })),
  ];

  const categoryColors = [
    "bg-blue-100 text-blue-800",
    "bg-emerald-100 text-emerald-800",
    "bg-pink-100 text-pink-800",
    "bg-purple-100 text-purple-800",
    "bg-amber-100 text-amber-800",
  ];


  const getCategoryColor = (category) => {
    const index = uniqueCategories.indexOf(category);

    if (index === -1) return "bg-gray-100 text-gray-800";

    return categoryColors[index % categoryColors.length];
  };



  return (
    <section id="fatwas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse <span className="text-emerald-700">Fatwas</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of Islamic rulings categorized by topic for easy
            navigation.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === category.id
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 hover:bg-emerald-50'
                }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}

        </div>

        {/* Fatwa Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFatwas.map((fatwa) => (
            <div
              key={fatwa._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              {fatwa.image_url && (
                <img
                  src={fatwa.image_url}
                  alt={fatwa.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6">
                {/* Category + Date */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(
                      fatwa.category
                    )}`}
                  >
                    {fatwa.category}
                  </span>


                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {new Date(fatwa.timestamp).toLocaleDateString()}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {fatwa.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {fatwa.short_description}
                </p>

                {/* Mufti */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="font-medium text-gray-900">
                      {fatwa.mufti}
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button className="w-full text-center text-emerald-700 font-medium hover:text-emerald-800 transition flex items-center justify-center">
                  Read Full Fatwa
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-12">
          <button className="border border-emerald-600 text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition">
            Load More Fatwas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fatwas;