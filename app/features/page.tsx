import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-darkSepia text-cream font-vt323 pt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gold mb-4">MEMORI FEATURES</h1>
            <p className="text-xl text-cream max-w-2xl mx-auto">
              Discover the tools designed to enhance your reflection and protect your privacy
            </p>
          </div>

          {/* Evolving Personality Section */}
          <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
            <h2 className="text-4xl text-gold mb-6">[ EVOLVING PERSONALITY ]</h2>
            <div className="space-y-4 text-lg">
              <p className="text-cream">
                The more you write, the more Memori adapts — becoming a companion that reflects your journey.
              </p>
            </div>
          </Card>

          {/* Aphantasia Learning Section */}
          <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
            <h2 className="text-4xl text-gold mb-6">[ APHANTASIA LEARNING ]</h2>
            <div className="space-y-4 text-lg">
              <p className="text-cream">
                Tools designed for imageless minds, with a dedicated Aphantasia Mode planned for future versions.
              </p>
            </div>
          </Card>

          {/* Lasting Memory Section */}
          <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
            <h2 className="text-4xl text-gold mb-6">[ LASTING MEMORY ]</h2>
            <div className="space-y-4 text-lg">
              <p className="text-cream">
                Memori grows with you, remembering your past entries and building context over time.
              </p>
            </div>
          </Card>

          {/* Habit Tracker Section */}
          <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
            <h2 className="text-4xl text-gold mb-6">[ HABIT TRACKER ]</h2>
            <div className="space-y-4 text-lg">
              <p className="text-cream">
                Stay consistent with daily reflection through simple, built-in habit tracking.
              </p>
            </div>
          </Card>

          {/* Pixelated Interface Section */}
          <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
            <h2 className="text-4xl text-gold mb-6">[ PIXELATED INTERFACE ]</h2>
            <div className="space-y-4 text-lg">
              <p className="text-cream">
                A distraction-free environment inspired by early computing, focused entirely on your thoughts.
              </p>
            </div>
          </Card>

        </div>
      </div>
      <Footer />
    </>
  );
}