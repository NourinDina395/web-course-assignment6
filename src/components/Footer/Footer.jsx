import React from "react";
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      
      {/* Main footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="border border-gray-700 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

            {/* Logo & desc */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white text-2xl font-black mb-3">DigiTools</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Social Links</h4>
              <div className="flex items-center gap-3">
                
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaYoutube className="text-white text-sm" />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaFacebookF className="text-white text-sm" />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaXTwitter className="text-white text-sm" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;