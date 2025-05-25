import { User } from 'lucide-react';

export default function TestimonialCard({ quote, name, role, avatarColor }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Quote */}
      <div className="mb-6">
        <p className="text-gray-700 text-base leading-relaxed">"{quote}"</p>
      </div>

      {/* Author info */}
      <div className="flex items-center">
        {/* Avatar */}
        <div
          className={`w-12 h-12 ${avatarColor} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}
        >
          <User className="w-6 h-6 text-white" />
        </div>

        {/* Name and role */}
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
