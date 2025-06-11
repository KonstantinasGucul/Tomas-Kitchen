export default function MenuCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-[1.01] transition">
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <div className="p-4 space-y-1">
          <h4 className="text-lg font-semibold text-gray-800 leading-snug">
            {name}
          </h4>
          <span className="text-amber-600 font-medium block">{price}</span>
        </div>
      </div>
    </div>
  );
}
