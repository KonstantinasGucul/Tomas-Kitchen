const menu = {
  burgersAndToasts: [
    {
      name: 'Beef Burger & Chips',
      price: '£7.00',
      image: '/images/beef-burger.jpg',
    },
    {
      name: 'Cheese Burger & Chips',
      price: '£7.50',
      image: '/images/cheese-burger.jpg',
    },
    {
      name: 'Chicken Burger & Chips',
      price: '£7.00',
      image: '/images/chicken-burger.jpg',
    },
    {
      name: 'Morning Toast (Beans, Egg, Cheese)',
      price: '£4.00',
      image: '/images/morning-toast.jpg',
    },
    {
      name: 'Chicken Toast (Chicken, Egg, Cheese)',
      price: '£5.00',
      image: '/images/chicken-toast.jpg',
    },
    {
      name: 'Beef Toast (Beef, Egg, Cheese)',
      price: '£5.00',
      image: '/images/beef-toast.jpg',
    },
  ],
  wraps: [
    {
      name: 'Beef Burger Wrap & Chips',
      price: '£7.00',
      image: '/images/beef-burger-wrap.jpg',
    },
    {
      name: 'Beef Wrap & Chips',
      price: '£7.00',
      image: '/images/beef-wrap.jpg',
    },
    {
      name: 'Chicken Wrap & Chips',
      price: '£7.00',
      image: '/images/chicken-wrap.jpg',
    },
    {
      name: 'Chicken, Cheese Wrap & Chips',
      price: '£7.00',
      image: '/images/chicken-cheese-wrap.jpg',
    },
    {
      name: 'Beef, Cheese Wrap & Chips',
      price: '£7.00',
      image: '/images/beef-cheese-wrap.jpg',
    },
    {
      name: 'Chicken Burger Wrap & Chips',
      price: '£7.00',
      image: '/images/chicken-burger-wrap.jpg',
    },
    {
      name: 'Beef Rice Wrap',
      price: '£7.00',
      image: '/images/beef-rice-wrap.jpg',
    },
    {
      name: 'Chicken Rice Wrap',
      price: '£7.00',
      image: '/images/chicken-rice-wrap.jpg',
    },
  ],
  bowlsAndSoups: [
    {
      name: 'Chicken Rice Bowl',
      price: '£8.00',
      image: '/images/chicken-bowl.jpg',
    },
    {
      name: 'Beef Rice Bowl',
      price: '£8.00',
      image: '/images/beef-bowl.jpg',
    },
    {
      name: 'Cold Beetroot Soup',
      price: '£5.00',
      image: '/images/beetroot-soup.jpg',
    },
    {
      name: 'Beef Soup',
      price: '£5.00',
      image: '/images/beef-soup.jpg',
    },
  ],
  chicken: [
    {
      name: 'Grilled Chicken (3 large pcs)',
      price: '£7.00',
      image: '/images/grilled-chicken.jpg',
    },
    {
      name: 'Crispy Chicken (3 large pcs)',
      price: '£7.00',
      image: '/images/crispy-chicken.jpg',
    },
  ],
};

function renderCategory(title, items) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h4>
                <span className="text-amber-600 font-medium">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Menu</h2>
          <div className="mt-2 w-24 h-1 bg-amber-500 mx-auto" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh, bold, and satisfying — explore our international street food
            lineup.
          </p>
        </div>

        {renderCategory('Burgers & Toasts', menu.burgersAndToasts)}
        {renderCategory('Wraps', menu.wraps)}
        {renderCategory('Fried Chicken', menu.chicken)}
        {renderCategory('Bowls & Soups', menu.bowlsAndSoups)}
      </div>
    </section>
  );
}
