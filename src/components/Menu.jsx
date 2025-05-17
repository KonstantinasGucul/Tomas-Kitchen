export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Beef Burger & Chips',
      description: 'Juicy beef patty in a bun served with golden chips.',
      price: '£7',
      image: '/images/beef-burger.jpg',
    },
    {
      id: 2,
      name: 'Cheese Burger & Chips',
      description: 'Classic cheeseburger with melted cheese and crispy chips.',
      price: '£7.50',
      image: '/images/cheese-burger.jpg',
    },
    {
      id: 3,
      name: 'Chicken Burger & Chips',
      description:
        'Crispy chicken burger with lettuce and mayo, served with chips.',
      price: '£7',
      image: '/images/chicken-burger.jpg',
    },
    {
      id: 4,
      name: 'Morning Toast',
      description:
        'Beans, egg and cheese on toasted bread. Perfect start to the day.',
      price: '£4',
      image: '/images/morning-toast.jpg',
    },
    {
      id: 5,
      name: 'Chicken Toast',
      description: 'Chicken, egg, and cheese toasted sandwich.',
      price: '£5',
      image: '/images/chicken-toast.jpg',
    },
    {
      id: 6,
      name: 'Beef Toast',
      description: 'Beef, egg and cheese grilled toast. Melty and satisfying.',
      price: '£5',
      image: '/images/beef-toast.jpg',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Menu
          </h2>
          <div className="mt-2 w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Browse the delicious street food Tomas cooks and serves fresh every
            day!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-amber-600">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
