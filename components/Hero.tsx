import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark to-dark/90 relative overflow-hidden font-vt323">
      {/* Pixelated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div 
              key={i} 
              className={`${
                Math.random() > 0.8 
                  ? Math.random() > 0.6 
                    ? 'bg-mint' 
                    : Math.random() > 0.5 
                      ? 'bg-blue' 
                      : 'bg-pink'
                  : 'transparent'
              }`} 
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-mint">MEMORI</span>
            <br />
            <span className="text-gray">Your pixelated</span>
            <br />
            <span className="text-blue">AI journaling</span>
            <br />
            <span className="text-pink">companion</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            A local-first journaling partner that remembers, reflects, 
            and grows with you.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="bg-mint text-dark hover:bg-mint/80 font-vt323 text-xl py-6 px-8 crt-glow">
              JOIN WAITLIST
            </Button>
            <Button 
              variant="outline" 
              className="border-blue text-blue hover:bg-blue hover:text-dark font-vt323 text-xl py-6 px-8 crt-glow"
            >
              LEARN MORE
            </Button>
          </div>

          {/* Pixelated decoration */}
          <div className="flex justify-center items-center space-x-4 text-gray/50">
            <div className="w-4 h-4 bg-mint"></div>
            <div className="w-2 h-2 bg-blue"></div>
            <div className="w-6 h-6 bg-pink"></div>
            <div className="w-2 h-2 bg-mint"></div>
            <div className="w-4 h-4 bg-blue"></div>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-gray/70 text-sm mb-2">SCROLL</div>
        <div className="w-1 h-8 bg-gray/30 relative">
          <div className="w-1 h-2 bg-mint absolute top-0 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
