import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function CTA() {
  return (
    <section className="py-20 bg-dark font-vt323">
      <div className="container mx-auto px-4">
        <Card className="bg-dark border-mint max-w-4xl mx-auto p-12 text-center crt-glow">
          {/* Pixelated decoration */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-5 gap-2">
              <div className="w-6 h-6 bg-mint"></div>
              <div className="w-6 h-6 bg-blue"></div>
              <div className="w-6 h-6 bg-pink"></div>
              <div className="w-6 h-6 bg-blue"></div>
              <div className="w-6 h-6 bg-mint"></div>
            </div>
          </div>

          {/* Main CTA text */}
          <h2 className="text-5xl md:text-6xl font-bold text-mint mb-6">
            BE THE FIRST TO EXPERIENCE MEMORI
          </h2>
          
          <p className="text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our waitlist and get early access to the most private, 
            thoughtful AI journaling companion ever built.
          </p>

          {/* Email signup form */}
          <div className="max-w-lg mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email"
                placeholder="your.email@example.com"
                className="bg-dark border-gray text-gray placeholder-gray/50 font-vt323 text-lg flex-1 pixel-border"
              />
              <Button className="bg-mint text-dark hover:bg-mint/80 font-vt323 text-lg px-8 pixel-border">
                JOIN WAITLIST
              </Button>
            </div>
          </div>

          {/* Privacy note */}
          <p className="text-sm text-gray/70 mb-8">
            We respect your privacy. No spam, just updates on Memori's progress.
          </p>

          {/* Social proof / stats */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue mb-2">500+</div>
              <div className="text-gray/70 text-sm">Early supporters</div>
            </div>
            <div className="w-px h-8 bg-gray/30 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-pink mb-2">100%</div>
              <div className="text-gray/70 text-sm">Local-first</div>
            </div>
            <div className="w-px h-8 bg-gray/30 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-mint mb-2">∞</div>
              <div className="text-gray/70 text-sm">Privacy focused</div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="flex justify-center mt-12">
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div 
                  key={i}
                  className={`w-3 h-3 ${
                    i % 3 === 0 ? 'bg-mint' : i % 3 === 1 ? 'bg-blue' : 'bg-pink'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
