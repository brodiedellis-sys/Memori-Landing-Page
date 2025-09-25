import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-darkSepia text-cream font-vt323 pt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gold mb-4">MEMORI ROADMAP</h1>
            <p className="text-xl text-cream max-w-2xl mx-auto">
              Memori is still in early development — this roadmap shows where we’re headed.
            </p>
          </div>

          {/* In Development Section */}
          <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
            <h2 className="text-4xl text-gold mb-6">[ IN DEVELOPMENT ]</h2>
            <div className="space-y-4 text-lg">
              <p className="text-cream">
                Core journaling engine (local-first, encrypted)
              </p>
              <p className="text-cream">
                Habit tracker for consistent reflection
              </p>
              <p className="text-cream">
                Lasting memory system that grows with your entries
              </p>
              <p className="text-cream">
                Pixelated distraction-free interface
              </p>
            </div>
          </Card>

          {/* Coming Soon Section */}
          <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
            <h2 className="text-4xl text-gold mb-6">[ COMING SOON ]</h2>
            <div className="space-y-4 text-lg">
              <p className="text-cream">
                Aphantasia Mode → tools designed for imageless minds
              </p>
              <p className="text-cream">
                Theme Customization → optional subscription unlock for visual styles
              </p>
              <p className="text-cream">
                Community Feedback Loop → inviting early testers to shape Memori's direction
              </p>
            </div>
          </Card>

          {/* Future Section */}
          <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
            <h2 className="text-4xl text-gold mb-6">[ FUTURE ]</h2>
            <div className="space-y-4 text-lg">
              <p className="text-cream">
                Optional Encrypted Sync (always under your control)
              </p>
              <p className="text-cream">
                Evolving Personality → deeper reflection of your style and journey
              </p>
              <p className="text-cream">
                Open Extensions → themes, plugins, and custom prompts made by the community
              </p>
              <p className="text-cream">
                Journal Exports → transform entries into books or personal archives
              </p>
            </div>
          </Card>

        </div>
      </div>
      <Footer />
    </>
  );
}