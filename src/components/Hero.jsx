export default function Hero() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero.webp"
          alt="Delicious street food"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div
          className="absolute inset-0 z-[1] opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <section
        className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-center max-w-3xl mx-auto "
        aria-labelledby="hero-heading"
      >
        <h1
          id="hero-heading"
          className="cursor-default mt-6 font-serif text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Savour the World, <span className="italic">One Bite at a Time</span>
        </h1>

        <p className="cursor-default mt-8 text-xl text-gray-300 md:text-2xl">
          Embark on a culinary journey through our carefully crafted
          international flavors, where tradition meets innovation in every dish
          we serve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
          <button className="min-w-[180px] px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-md shadow transition-all duration-300 ease-in-out cursor-pointer">
            Explore Menu
          </button>
          <button className="min-w-[180px] px-6 py-3 border border-white/50 text-white hover:bg-white/10 font-medium rounded-md shadow transition-all duration-300 ease-in-out cursor-pointer">
            Contact
          </button>
        </div>

        {/* Decorative line */}
        <div className="w-24 h-1 mt-16 bg-amber-500" />
      </section>
    </main>
  );
}
