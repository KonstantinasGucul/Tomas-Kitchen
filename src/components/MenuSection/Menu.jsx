import { useState } from 'react';
import menu from './MenuData';
import MenuCard from './MenuCards';

function Category({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 transition"
      >
        {title}
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pt-4 pb-6 bg-gray-50">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <div className="mt-2 w-24 h-1 bg-amber-500 mx-auto" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh, bold, and satisfying — explore our international street food
            lineup.
          </p>
        </div>

        <div className="space-y-6">
          <Category title="Burgers & Toasts" items={menu.burgersAndToasts} />
          <Category title="Wraps" items={menu.wraps} />
          <Category title="Fried Chicken" items={menu.chicken} />
          <Category title="Bowls & Soups" items={menu.bowlsAndSoups} />

          {/* Special Request Section */}
          <div className="mt-12 bg-white border border-amber-300 rounded-xl p-6 md:p-10 shadow-md text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-700">
              Can’t Find Your Favorite?
            </h3>
            <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
              Craving something special that’s not on our menu? Whether it’s a
              legendary family recipe or your dream dish — just let us know.
              Tomas is always up for a challenge!
            </p>
            <p className="text-sm text-gray-500 italic">
              Just pop by the wagon and tell Tomas what you’d love to eat — he’s
              always listening.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
