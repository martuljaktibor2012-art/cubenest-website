export default function ServerStatus() {
  const nodes = [
    { name: "US-East (Virginia)", location: "🇺🇸", status: "online", cpu: 34, ram: 52, players: 1247, latency: "12ms" },
    { name: "US-West (Oregon)", location: "🇺🇸", status: "online", cpu: 28, ram: 45, players: 892, latency: "18ms" },
    { name: "EU-West (Frankfurt)", location: "🇩🇪", status: "online", cpu: 41, ram: 63, players: 1583, latency: "8ms" },
    { name: "EU-North (Stockholm)", location: "🇸🇪", status: "online", cpu: 19, ram: 38, players: 654, latency: "15ms" },
    { name: "Asia (Singapore)", location: "🇸🇬", status: "online", cpu: 22, ram: 41, players: 421, latency: "22ms" },
    { name: "Oceania (Sydney)", location: "🇦🇺", status: "maintenance", cpu: 0, ram: 0, players: 0, latency: "—" },
  ];

  return (
    <section id="status" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-primary/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">Network Status</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Global <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our nodes are strategically located around the world for the lowest possible latency.
          </p>
        </div>

        {/* Overall Status */}
        <div className="glass-card rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <div className="w-3 h-3 bg-green-primary rounded-full animate-pulse"></div>
            <span className="text-white font-semibold text-lg">All Systems Operational</span>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="text-center">
              <span className="text-white font-bold">5/6</span>
              <span className="text-gray-400 ml-2">Nodes Online</span>
            </div>
            <div className="text-center">
              <span className="text-white font-bold">99.97%</span>
              <span className="text-gray-400 ml-2">30-day Uptime</span>
            </div>
          </div>
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nodes.map((node, index) => (
            <div key={index} className="glass-card rounded-xl p-5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{node.location}</span>
                  <span className="text-white font-semibold text-sm">{node.name}</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  node.status === 'online' 
                    ? 'bg-green-primary/20 text-green-primary' 
                    : 'bg-yellow-500/20 text-yellow-500'
                }`}>
                  {node.status === 'online' ? '● Online' : '◐ Maintenance'}
                </span>
              </div>
              
              {node.status === 'online' ? (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">CPU</span>
                    <span className="text-white">{node.cpu}%</span>
                  </div>
                  <div className="w-full bg-dark-600 rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full transition-all ${
                      node.cpu > 70 ? 'bg-red-500' : node.cpu > 40 ? 'bg-yellow-500' : 'bg-green-primary'
                    }`} style={{ width: `${node.cpu}%` }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">RAM</span>
                    <span className="text-white">{node.ram}%</span>
                  </div>
                  <div className="w-full bg-dark-600 rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full transition-all ${
                      node.ram > 70 ? 'bg-red-500' : node.ram > 40 ? 'bg-yellow-500' : 'bg-green-primary'
                    }`} style={{ width: `${node.ram}%` }}></div>
                  </div>
                  <div className="flex justify-between text-sm pt-1">
                    <span className="text-gray-400">Players: <span className="text-white">{node.players}</span></span>
                    <span className="text-gray-400">Latency: <span className="text-green-primary">{node.latency}</span></span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <span className="text-yellow-500 text-sm">Scheduled maintenance in progress</span>
                  <p className="text-gray-500 text-xs mt-1">Expected completion: 2 hours</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
