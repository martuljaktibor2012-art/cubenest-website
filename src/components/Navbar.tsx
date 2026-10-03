import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-green-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-primary to-teal-primary rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm8-2h8v8h-8v-8zm2 2v4h4v-4h-4z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Cube<span className="text-green-primary">Nest</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-green-primary transition-colors text-sm font-medium">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-green-primary transition-colors text-sm font-medium">Pricing</a>
            <a href="#modpacks" className="text-gray-300 hover:text-green-primary transition-colors text-sm font-medium">Modpacks</a>
            <a href="#status" className="text-gray-300 hover:text-green-primary transition-colors text-sm font-medium">Status</a>
            <a href="#faq" className="text-gray-300 hover:text-green-primary transition-colors text-sm font-medium">FAQ</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Login</a>
            <a href="#pricing" className="btn-primary px-5 py-2 rounded-lg text-white text-sm font-semibold">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-green-primary/10">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-300 hover:text-green-primary transition-colors text-sm font-medium py-2">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-green-primary transition-colors text-sm font-medium py-2">Pricing</a>
              <a href="#modpacks" className="text-gray-300 hover:text-green-primary transition-colors text-sm font-medium py-2">Modpacks</a>
              <a href="#status" className="text-gray-300 hover:text-green-primary transition-colors text-sm font-medium py-2">Status</a>
              <a href="#faq" className="text-gray-300 hover:text-green-primary transition-colors text-sm font-medium py-2">FAQ</a>
              <a href="#pricing" className="btn-primary px-5 py-2 rounded-lg text-white text-sm font-semibold text-center mt-2">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
