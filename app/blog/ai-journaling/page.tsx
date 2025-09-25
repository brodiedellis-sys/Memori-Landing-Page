import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function BlogPost3() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark font-vt323 pt-32">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Back button */}
          <Link href="/blog" className="text-mint hover:text-gold mb-8 inline-block">
            ← Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-mint mb-6">
              AI Journaling: Reflection Without Surveillance
            </h1>
            <div className="flex items-center gap-4 text-gray/70 text-lg mb-6">
              <span>January 5, 2025</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <p className="text-xl text-gray leading-relaxed">
              The promise of AI-assisted journaling is profound: imagine a companion that remembers your patterns, celebrates your growth, and offers insights tailored to your journey.
            </p>
          </header>

          {/* Article Content */}
          <Card 
            className="bg-darkSepia border border-cream p-8 font-vt323 mb-8"
            style={{ borderRadius: '0', borderStyle: 'dashed' }}
          >
            <div className="prose prose-lg text-gray space-y-6">
              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">The Promise and the Problem</h2>
              <p className="text-lg leading-relaxed">
                The promise of AI-assisted journaling is profound: imagine a companion that remembers your patterns, celebrates your growth, and offers insights tailored to your journey.
              </p>
              
              <p className="text-lg leading-relaxed">
                The reality, however, often involves trading your most private thoughts for algorithmic assistance.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">The Surveillance Problem</h2>
              <p className="text-lg leading-relaxed">
                Most current AI journaling tools follow a troubling pattern: upload your entries to their servers, let algorithms analyze your emotional patterns, and trust that your data stays secure.
              </p>

              <p className="text-lg leading-relaxed">
                Your vulnerability becomes their training data. Your growth becomes their product.
              </p>

              <p className="text-lg leading-relaxed">
                The tension is clear: the more personal information you share, the better the AI can help — but the more you expose yourself to data breaches, corporate surveillance, and manipulation.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">A Different Approach</h2>
              <p className="text-lg leading-relaxed">
                Memori takes a radically different stance: the AI comes to you. Instead of sending data to distant servers, Memori runs locally, learning from your patterns without ever exposing them.
              </p>

              <p className="text-lg leading-relaxed">
                This isn't just about privacy. It's about creating a genuinely personal AI companion. When the AI only knows you, it can offer insights that are truly yours — not generalized from millions of other users.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">What Local AI Can Do</h2>
              <p className="text-lg leading-relaxed">
                <strong className="text-mint">Pattern Recognition</strong> → Notice recurring themes, emotions, or situations without sending analysis anywhere.
              </p>

              <p className="text-lg leading-relaxed">
                <strong className="text-mint">Contextual Memory</strong> → Remember past entries to provide continuity in your reflection process.
              </p>

              <p className="text-lg leading-relaxed">
                <strong className="text-mint">Growth Tracking</strong> → Identify positive shifts in thinking, mood, and habits over time.
              </p>

              <p className="text-lg leading-relaxed">
                <strong className="text-mint">Gentle Prompts</strong> → Suggest reflection questions based on your history, helping you go deeper.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">The Trust Equation</h2>
              <p className="text-lg leading-relaxed">
                Traditional AI requires trust at every level: the company, its servers, its employees, its security, and its policies.
              </p>

              <p className="text-lg leading-relaxed">
                Local AI reduces that chain of trust to a single point: your device. The same device you already use for your most sensitive information.
              </p>

              <p className="text-lg leading-relaxed">
                This shift changes everything. Instead of hoping a corporation protects your data, you ensure it never leaves your hands.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">Technical Challenges</h2>
              <p className="text-lg leading-relaxed">
                Building local AI isn't simple. Models must be optimized to run on consumer hardware, algorithms must learn offline, and interfaces must work without constant connectivity.
              </p>

              <p className="text-lg leading-relaxed">
                But constraints force better design. Without massive server farms, efficiency becomes essential. Without user data collection, personalization becomes truly individual.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">The Future of Personal AI</h2>
              <p className="text-lg leading-relaxed">
                We believe the future of AI is personal, not corporate. Instead of feeding our thoughts to distant algorithms, we'll have AI companions that live with us, learn with us, and grow with us — while protecting our privacy.
              </p>

              <p className="text-lg leading-relaxed">
                Memori is just the beginning. We're proving that AI assistance doesn't require surveillance, that personalization doesn't demand exploitation, and that the most powerful AI companion is one that serves only you.
              </p>

              <p className="text-lg leading-relaxed font-bold text-mint">
                Your thoughts deserve an AI as private as your mind itself.
              </p>
            </div>
          </Card>

          {/* Author info */}
          <Card 
            className="bg-dark border border-gray/30 p-6 font-vt323"
            style={{ borderRadius: '0', borderStyle: 'dashed' }}
          >
            <p className="text-gray/70 text-sm">
              This post is part of our development blog series. Join our Discord to discuss AI ethics and follow our technical progress.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}