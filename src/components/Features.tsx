export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Instant Setup",
      description: "Your server is ready in under 30 seconds. No waiting, no manual configuration needed."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "DDoS Protection",
      description: "Enterprise-grade DDoS mitigation keeps your server online even under heavy attacks."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "AMD Ryzen 9",
      description: "High-clock-speed processors deliver maximum single-core performance for lag-free gameplay."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "NVMe SSD Storage",
      description: "Lightning-fast NVMe drives ensure quick world loading and chunk generation."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Automatic Backups",
      description: "Daily automated backups with one-click restore. Never lose your world again."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "One-Click Modpacks",
      description: "Install popular modpacks like RLCraft, ATM, and more with a single click."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Pterodactyl Panel",
      description: "Industry-standard control panel. Manage files, console, plugins, and players with ease."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Unlimited Players",
      description: "No player slot limits. Invite your entire community to play together."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Built for <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We use the best hardware and software to deliver the smoothest Minecraft experience possible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-green-primary/10 flex items-center justify-center text-green-primary mb-4 group-hover:bg-green-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Banner */}
        <div className="mt-16 glass-card rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Powered by Industry-Leading Technology
              </h3>
              <p className="text-gray-400 mb-6">
                Our infrastructure is built on the same technology used by the largest hosting providers. 
                We combine Pterodactyl for server management with WHMCS for seamless billing automation.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-dark-600 rounded-full text-sm text-gray-300 border border-gray-700">Pterodactyl</span>
                <span className="px-3 py-1 bg-dark-600 rounded-full text-sm text-gray-300 border border-gray-700">WHMCS</span>
                <span className="px-3 py-1 bg-dark-600 rounded-full text-sm text-gray-300 border border-gray-700">AMD Ryzen 9</span>
                <span className="px-3 py-1 bg-dark-600 rounded-full text-sm text-gray-300 border border-gray-700">NVMe SSD</span>
                <span className="px-3 py-1 bg-dark-600 rounded-full text-sm text-gray-300 border border-gray-700">DDoS Shield</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-dark-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-primary font-mono text-sm">Node Status</span>
                  <span className="px-2 py-0.5 bg-green-primary/20 text-green-primary text-xs rounded-full">Online</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">CPU Usage</span>
                    <span className="text-white">23%</span>
                  </div>
                  <div className="w-full bg-dark-600 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-primary to-teal-primary h-2 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">RAM Usage</span>
                    <span className="text-white">47%</span>
                  </div>
                  <div className="w-full bg-dark-600 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-primary to-teal-primary h-2 rounded-full" style={{ width: '47%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Storage</span>
                    <span className="text-white">31%</span>
                  </div>
                  <div className="w-full bg-dark-600 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-primary to-teal-primary h-2 rounded-full" style={{ width: '31%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
