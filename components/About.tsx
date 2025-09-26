import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="bg-dark text-gray font-vt323 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-mint mb-4">ABOUT MEMORI</h1>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Understanding the philosophy behind your pixelated AI journaling companion
          </p>
        </div>

        {/* Philosophy Section */}
        <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
          <h2 className="text-4xl text-gold mb-6">[ PHILOSOPHY ]</h2>
          <div className="space-y-4 text-lg">
            <p className="text-cream">
              Memori believes that journaling should be a deeply personal, reflective practice. 
              In a world where our thoughts and memories are constantly harvested by algorithms, 
              we're building something different.
            </p>
            <p className="text-cream">
              Your journal entries are yours alone. They live on your device, grow with your experiences, 
              and help you understand patterns in your life without ever leaving your control.
            </p>
            <p className="text-cream">
              The pixelated aesthetic isn't just nostalgic—it's intentional. We're inspired by the 
              simplicity and focus of early computing, when tools were built to enhance human creativity 
              rather than extract value from it.
            </p>
          </div>
        </Card>

        {/* Purpose Section */}
        <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
          <h2 className="text-4xl text-gold mb-6">[ PURPOSE ]</h2>
          <div className="space-y-4 text-lg">
            <p className="text-cream">
              Memori exists to give you a private space to think clearly in a noisy, distracted world.
              This isn't about endless scrolling or gamified streaks. It's about stepping back, reflecting honestly, and returning stronger to your real life.
            </p>
            <p className="text-cream">
              The core experience is completely free — journaling, memory, and habit tracking are yours forever. A subscription is optional and only unlocks cosmetic extras like new themes and visual styles
            </p>
          </div>
        </Card>

        {/* Who It's For Section */}
        <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
          <h2 className="text-4xl text-gold mb-6">[ WHO IT'S FOR ]</h2>
          <div className="space-y-4 text-lg">
            <p className="text-cream">
              What makes Memori special isn't what it knows — it's who it's built for.
            </p>
            <p className="text-cream">
              People with aphantasia, who want tools that work with imageless minds.
            </p>
            <p className="text-cream">
              People who forget routines and need gentle structure to stay consistent.
            </p>
            <p className="text-cream">
              People who don't know how to start journaling but want a simple, welcoming entry point.
            </p>
            <p className="text-cream">
              People who just want one private place to make sense of it all.
            </p>
            <p className="text-cream">
              Memori is for anyone who believes their inner world deserves the same care and protection as their outer one.
            </p>
          </div>
        </Card>

        {/* Privacy Section */}
        <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
          <h2 className="text-4xl text-gold mb-6">[ PRIVACY ]</h2>
          <div className="space-y-4 text-lg">
            <p className="text-cream">
              <span className="text-gold">LOCAL-FIRST:</span> Your memories stay with you. Nothing is sent to the cloud.
            </p>
            <p className="text-cream">
              <span className="text-gold">ENCRYPTED:</span> All entries are encrypted on your device using industry-standard protocols.
            </p>
            <p className="text-cream">
              <span className="text-gold">TRANSPARENT:</span> Our code is open-source. You can verify exactly how your data is handled.
            </p>
            <p className="text-cream">
              <span className="text-gold">OPTIONAL SYNC:</span> Future versions will offer optional, encrypted sync—but always under your control.
            </p>
          </div>
        </Card>

        {/* Community and Vision*/}
        <Card className="bg-darkSepia border border-cream mb-12 p-8 font-vt323" style={{borderRadius: '0', borderStyle: 'dashed'}}>
          <h2 className="text-4xl text-gold mb-6">[ COMMUNITY AND VISION ]</h2>
          <div className="space-y-4 text-lg">
            <p className="text-cream">
              Memori is more than an app — it's part of a movement toward humane technology.
              We believe tools should protect your attention, safeguard your privacy, and honor your inner life.
              By joining Memori, you're joining others who value reflection over reaction, presence over distraction, and honesty over noise.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}