"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(42); // Starting count
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Load current count from API
    fetch('/api/waitlist')
      .then(res => res.json())
      .then(data => {
        if (data.count) {
          setCount(data.count);
        }
      })
      .catch(err => console.error('Failed to load count:', err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      // Success!
      setCount(data.totalCount);
      setEmail("");
      setShowNotification(true);
      
      console.log('✅ Successfully joined waitlist!', data);

      // Hide notification after 4 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 4000);

    } catch (error) {
      console.error('❌ Waitlist error:', error);
      setError(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
  };


  return (
    <section id="waitlist" className="py-20 bg-dark font-vt323">
      <div className="container mx-auto px-4">
        <Card className="bg-darkSepia border border-cream max-w-4xl mx-auto p-12 text-center font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
          
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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-dark border-gray text-gray placeholder-gray/50 font-vt323 text-lg flex-1 pixel-border"
                required
              />
              <Button 
                type="submit"
                disabled={isLoading}
                className="bg-mint text-dark hover:bg-mint/80 font-vt323 text-lg px-8 pixel-border disabled:opacity-50"
              >
                {isLoading ? 'JOINING...' : 'JOIN WAITLIST'}
              </Button>
            </form>
            
            {/* Error message */}
            {error && (
              <div className="mt-2 text-red-400 text-sm font-vt323 text-center">
                ⚠️ {error}
              </div>
            )}
          </div>

          {/* Privacy note */}
          <p className="text-sm text-gray/70 mb-8">
            We respect your privacy. No spam, just updates on Memori's progress.
          </p>

          {/* Social proof / stats */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue mb-2">{count}</div>
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

      {/* Simple Working Notification */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-mint text-darkSepia p-4 font-vt323 text-lg font-bold shadow-lg" style={{ zIndex: 9999 }}>
          ✓ SUCCESS! You're supporter #{count}
          <button onClick={closeNotification} className="ml-3 text-darkSepia hover:text-red-600">×</button>
        </div>
      )}
    </section>
  );
}
