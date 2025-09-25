
export default function Hero() {
  return (
    <section className="min-h-screen flex items-start pt-40 relative overflow-hidden font-vt323">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-8xl md:text-7xl font-bold leading-tight font-vt323">
            <span className="text-cream text-8xl md:text-9xl">Memori</span>
            <span className="text-cream text-8xl md:text-9xl font-vt323 animate-blink-cursor ml-2">_</span>
            
            <br />
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-cream mb-12 max-w-2xl mx-auto leading-relaxed">
            Capture who you are, shape who you'll become
          </p>
        </div>
      </div>
    </section>
  );
}
