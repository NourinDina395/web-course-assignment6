import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">D</span>
              </div>
              <span className="text-white font-extrabold text-lg">DigiTools</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your one-stop marketplace for premium digital tools and software subscriptions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              {["Features", "Pricing", "Changelog", "Roadmap"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Blog", "Careers", "Press"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <p>© 2025 DigiTools. All rights reserved.</p>
          <p>Built with ❤️ for digital creators everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
