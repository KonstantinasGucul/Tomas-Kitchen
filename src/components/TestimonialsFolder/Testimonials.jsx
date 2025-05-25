import TestimonialCard from './TestimonialCard';
import testimonials from './TestimonialsData';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
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

        {/* Grid of testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatarColor={testimonial.avatarColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
