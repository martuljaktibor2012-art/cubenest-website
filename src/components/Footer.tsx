export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-primary to-teal-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm8-2h8v8h-8v-8zm2 2v4h4v-4h-4z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Cube<span className="text-green-primary">Nest</span></span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Premium Minecraft server hosting with instant setup, DDoS protection, and 24/7 support.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-dark-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-primary hover:bg-dark-500 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-dark-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-primary hover:bg-dark-500 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.098.246-.198.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-dark-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-primary hover:bg-dark-500 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-dark-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-primary hover:bg-dark-500 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#pricing" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Pricing</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Features</a></li>
              <li><a href="#modpacks" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Modpacks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Control Panel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">API Access</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Submit Ticket</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Discord Server</a></li>
              <li><a href="#status" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Server Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Acceptable Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">SLA</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-primary text-sm transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2026 CubeNest. All rights reserved. Not affiliated with Mojang Studios.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-500 text-xs">Payment Methods:</span>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-dark-600 rounded text-xs text-gray-400 border border-gray-700">Visa</span>
              <span className="px-2 py-1 bg-dark-600 rounded text-xs text-gray-400 border border-gray-700">Mastercard</span>
              <span className="px-2 py-1 bg-dark-600 rounded text-xs text-gray-400 border border-gray-700">PayPal</span>
              <span className="px-2 py-1 bg-dark-600 rounded text-xs text-gray-400 border border-gray-700">Crypto</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
