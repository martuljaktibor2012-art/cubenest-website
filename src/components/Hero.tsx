export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(76,175,80,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,80,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Blocks */}
      <div className="absolute top-32 left-10 w-12 h-12 bg-green-primary/20 rounded-lg animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-48 right-20 w-8 h-8 bg-teal-primary/20 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-green-primary/15 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-teal-primary/20 rounded animate-float" style={{ animationDelay: '0.5s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-green-primary/10 border border-green-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-primary rounded-full animate-pulse"></span>
          <span className="text-green-primary text-sm font-medium">All Systems Operational</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Your Minecraft Server,{' '}
          <span className="gradient-text">Ready in Seconds</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Premium hosting powered by AMD Ryzen 9 processors. Deploy your server instantly with 
          one-click modpack installs, DDoS protection, and 99.9% uptime guaranteed.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a href="#pricing" className="btn-primary px-8 py-4 rounded-xl text-white font-semibold text-lg w-full sm:w-auto">
            Start Hosting — From $2.50/mo
          </a>
          <a href="#features" className="px-8 py-4 rounded-xl border border-gray-600 text-gray-300 hover:border-green-primary hover:text-green-primary font-semibold text-lg transition-all w-full sm:w-auto">
            Learn More
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">50K+</span>
            <span className="text-sm text-gray-500">Active Servers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">99.9%</span>
            <span className="text-sm text-gray-500">Uptime</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">&lt;30s</span>
            <span className="text-sm text-gray-500">Setup Time</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">24/7</span>
            <span className="text-sm text-gray-500">Expert Support</span>
          </div>
        </div>

        {/* Minecraft Server Preview */}
        <div className="mt-16 relative animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-gray-400">CubeNest Control Panel</span>
            </div>
            <div className="bg-dark-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-primary">[CubeNest] Server started successfully!</div>
              <div className="text-gray-400">[INFO] Loading properties...</div>
              <div className="text-gray-400">[INFO] Default game mode: SURVIVAL</div>
              <div className="text-gray-400">[INFO] Starting Minecraft server on *:25565</div>
              <div className="text-teal-primary">[INFO] Done (2.341s)! For help, type "help"</div>
              <div className="text-green-primary animate-pulse">▊</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
