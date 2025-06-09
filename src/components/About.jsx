export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-gray-800 py-20 px-4 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="md:px-6">
          <h2 className="text-3xl font-bold text-amber-500 mb-4 drop-shadow">
            About Tomas’s Kitchen
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Tomas is not just another street food guy — he’s a trained
            professional chef with years of experience behind the stove.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            He began his culinary journey in Lithuania, mastering both
            traditional and modern techniques in respected local restaurants.
            After moving to England, Tomas continued his career in Peterborough,
            working his way up to become head chef in one of the city’s
            well-known kitchens.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            But after years in formal restaurants, Tomas decided it was time for
            something different — something more personal. That’s when
            <strong> Tomas’s Kitchen </strong> was born: a food wagon that
            brings authentic, international street food straight to the local
            community.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            All <strong>sauces are handmade</strong>, crafted by Tomas himself.
            The ingredients are always fresh — crisp vegetables, quality
            <strong> halal meat</strong>, and nothing ever older than two or
            three days. You won’t find any cheap shortcuts or store-bought
            sauces here.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Tomas’s Kitchen, the goal is simple: serve real food that makes
            people happy.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:h-auto md:px-6">
          <img
            src="/images/about/Tomas-picture.webp"
            alt="Tomas, founder of Tomas's Kitchen"
            className="w-full h-auto object-cover object-[50%_20%] md:max-h-[460px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
