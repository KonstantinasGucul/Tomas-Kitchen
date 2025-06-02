import { Star } from 'lucide-react';

export default function TestimonialCard({ name, review, rating, avatarColor }) {
  // Extract initials (first letters from words)
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      {/* Avatar + Stars */}
      <div className="flex items-center space-x-3">
        {/* Avatar Circle */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${avatarColor}`}
        >
          {initials}
        </div>

        {/* Star Rating */}
        <div className="flex space-x-1 text-amber-400">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" stroke="none" />
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed">{review}</p>

      {/* Reviewer Name */}
      <p className="text-sm font-semibold text-gray-500">— {name}</p>
    </div>
  );
}
