export default function Modpacks() {
  const modpacks = [
    { name: "RLCraft", players: "12.4K", category: "Adventure", color: "from-red-500 to-orange-600" },
    { name: "All The Mods 9", players: "8.7K", category: "Tech & Magic", color: "from-purple-500 to-pink-600" },
    { name: "Better MC", players: "15.2K", category: "Vanilla+", color: "from-green-500 to-emerald-600" },
    { name: "SkyFactory 5", players: "6.3K", category: "Skyblock", color: "from-blue-500 to-cyan-600" },
    { name: "Create Above and Beyond", players: "4.8K", category: "Tech", color: "from-amber-500 to-yellow-600" },
    { name: "Valhelsia 5", players: "7.1K", category: "Tech & Magic", color: "from-indigo-500 to-violet-600" },
    { name: "Fabulously Optimized", players: "18.9K", category: "Performance", color: "from-teal-500 to-green-600" },
    { name: "Crucial 2", players: "9.5K", category: "Vanilla+", color: "from-pink-500 to-rose-600" },
  ];

  const serverTypes = [
    { name: "Vanilla", icon: "🟫", description: "Pure Minecraft experience" },
    { name: "Paper", icon: "📄", description: "High performance plugin server" },
    { name: "Forge", icon: "🔨", description: "Classic modding platform" },
    { name: "Fabric", icon: "🧵", description: "Lightweight mod loader" },
    { name: "Spigot", icon: "🔌", description: "Plugin-compatible server" },
    { name: "Quilt", icon: "🪡", description: "Next-gen mod loader" },
  ];

  return (
    <section id="modpacks" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">Modpacks & Servers</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            One-Click <span className="gradient-text">Modpack</span> Installs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deploy any modpack or server type in seconds. We support all major mod loaders and thousands of modpacks.
          </p>
        </div>

        {/* Server Types */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {serverTypes.map((type, index) => (
            <div key={index} className="glass-card rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <div className="text-3xl mb-2">{type.icon}</div>
              <h4 className="text-white font-semibold text-sm">{type.name}</h4>
              <p className="text-gray-500 text-xs mt-1">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Popular Modpacks */}
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <svg className="w-5 h-5 text-green-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Popular Modpacks
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modpacks.map((pack, index) => (
            <div key={index} className="glass-card rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pack.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{pack.name.charAt(0)}</span>
                </div>
                <span className="text-xs text-gray-500 bg-dark-600 px-2 py-1 rounded-full">{pack.category}</span>
              </div>
              <h4 className="text-white font-semibold mb-1">{pack.name}</h4>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{pack.players} servers</span>
                <span className="text-green-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Install →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Modpack Banner */}
        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Don't see your modpack?</h3>
          <p className="text-gray-400 mb-6">Upload your own custom modpack or server jar. We support any Minecraft version from 1.7.10 to the latest snapshot.</p>
          <button className="btn-primary px-6 py-3 rounded-xl text-white font-semibold">
            Upload Custom Modpack
          </button>
        </div>
      </div>
    </section>
  );
}
