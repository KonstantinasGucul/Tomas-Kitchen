import { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import testimonials from './TestimonialsData';

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section
      id="testimonials"
      className="pt-8 pb-4 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            What People Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're just getting started, but here's what early visitors are
            saying about Tomas Kitchen.
          </p>
        </div>

        {/* Desktop/iPad: grid of 3 */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              review={testimonial.review}
              rating={testimonial.rating}
              avatarColor={testimonial.avatarColor}
            />
          ))}
        </div>

        {/* Mobile: expandable list */}
        <div className="md:hidden space-y-6">
          <TestimonialCard
            name={testimonials[0].name}
            review={testimonials[0].review}
            rating={testimonials[0].rating}
            avatarColor={testimonials[0].avatarColor}
          />

          {showAll &&
            testimonials
              .slice(1)
              .map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  review={testimonial.review}
                  rating={testimonial.rating}
                  avatarColor={testimonial.avatarColor}
                />
              ))}

          <div className="text-center mt-4 mb-4 sm:mb-8">
            <button
              onClick={handleToggle}
              className="text-amber-500 font-medium hover:underline focus:outline-none"
            >
              <span>{showAll ? '▲ Show less ▲' : '▼ Show more ▼'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
