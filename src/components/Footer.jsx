import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            TilesGallery
          </h2>
          <p className="text-sm leading-relaxed">
            Discover premium tiles for modern spaces. We blend quality,
            aesthetics, and innovation to elevate your home design.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Shop</li>
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@tilesgallery.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Rajshahi, Bangladesh</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-sm mb-3">
            Subscribe to get latest offers & updates.
          </p>

          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
            <input
              type="email"
              placeholder="Enter email"
              className="bg-transparent px-3 py-2 text-sm outline-none w-full"
            />
            <button className="bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>

          <div className="flex space-x-3 mt-5">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} TilesGallery — Made in Bangladesh
      </div>
    </footer>
  );
}