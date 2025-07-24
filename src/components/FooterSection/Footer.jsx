import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer({ onOpenPrivacy, onOpenTerms }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black/80 text-white backdrop-blur-sm shadow">
      <div
        className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
 gap-4 lg:gap-6"
      >
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold drop-shadow-md">
            <span className="text-amber-500">Toma's</span>{' '}
            <span className="text-white">Kitchen</span>
          </h3>
          <p className="text-sm text-white/80 mt-2">
            Authentic street food from around the world. Fresh, bold, and always
            delicious.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-amber-500 mb-3">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-amber-500 mt-0.5" />
              <a
                href="https://www.google.com/maps/place/PE1+5XB"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-700 transition"
              >
                Peterborough, UK, PE1 5XB
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber-500" />
              <a
                href="tel:+447925622897"
                className="hover:text-amber-700 transition"
              >
                +44 7925 622897
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-amber-500" />
              <a
                href="mailto:zeinalovas@gmail.com"
                className="hover:text-amber-700 transition"
              >
                zeinalovas@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-amber-500 mb-3">
            Follow Us
          </h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61575293242277"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-amber-500 text-white hover:bg-amber-700 transition"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-amber-500 text-white hover:bg-amber-700 transition"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-amber-500 text-white hover:bg-amber-700 transition"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74
                  2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05
                  A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77
                  1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                />
              </svg>
            </a>
          </div>
          <p className="text-sm text-white/80 mt-3">
            Stay updated with our latest menu items and locations!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-amber-500 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#home" className="hover:text-amber-700 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-amber-700 transition">
                Menu
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-amber-700 transition"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-white/60 space-y-2 sm:space-y-0">
          <p>
            © {year} <span className="text-amber-500">Toma's</span> Kitchen. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-amber-700 transition"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-amber-700 transition"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
