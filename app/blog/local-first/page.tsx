import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function BlogPost1() {
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
              Building Memori: Why Local-First Matters
            </h1>
            <div className="flex items-center gap-4 text-gray/70 text-lg mb-6">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <p className="text-xl text-gray leading-relaxed">
              Exploring the philosophy behind keeping your digital thoughts truly private and secure on your own device.
            </p>
          </header>

          {/* Article Content */}
          <Card 
            className="bg-darkSepia border border-cream p-8 font-vt323 mb-8"
            style={{ borderRadius: '0', borderStyle: 'dashed' }}
          >
            <div className="prose prose-lg text-gray space-y-6">
              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">The Problem with Cloud-First</h2>
              <p className="text-lg leading-relaxed">
                Most journaling apps follow the same playbook: collect your data, store it on their servers, and assure you it's "safe." But too often, safe means "safe for us to analyze, monetize, or accidentally leak."
              </p>

              <p className="text-lg leading-relaxed">
                When your thoughts live on someone else's computer, you're not just a user — you're a product. Your growth becomes their business intelligence. Your vulnerable moments become their market research.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">Local-First Philosophy</h2>
              <p className="text-lg leading-relaxed">
                Memori operates on a simple principle: your device, your data, your control. By default, everything you write stays on your computer. No servers scanning your entries. No algorithms profiling your mood. No marketers studying your habits.
              </p>

              <p className="text-lg leading-relaxed">
                This isn't just privacy — it's ownership. When your journal lives locally, you own it completely.
              </p>

              <p className="text-lg leading-relaxed">
                No subscription can revoke your access.
              </p>

              <p className="text-lg leading-relaxed">
                No policy change can lock you out.
              </p>

              <p className="text-lg leading-relaxed">
                No outage can silence your thoughts.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">The AI Difference</h2>
              <p className="text-lg leading-relaxed">
                "But how can AI help if nothing leaves my device?" Simple: the AI comes to you. Memori runs locally, using your processing power to understand your patterns without sending your data anywhere.
              </p>

              <p className="text-lg leading-relaxed">
                This creates something rare: an AI companion that truly knows you because it only knows you. No averages from millions of strangers. No generic advice. Just growth and insights based on your unique journey.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">Building Trust Through Transparency</h2>
              <p className="text-lg leading-relaxed">
                We're committed to open-sourcing Memori because trust shouldn't require blind faith. You'll be able to see exactly how data is handled, verify our privacy claims, and even run your own modified version if you want.
              </p>

              <p className="text-lg leading-relaxed">
                Local-first isn't just a technical choice — it's a values choice. It says your inner world deserves the same protection as your physical home. It says growth shouldn't require surveillance.
              </p>

              <p className="text-lg leading-relaxed font-bold text-mint">
                In a world that profits from your data, keeping it local is a revolutionary act.
              </p>
            </div>
          </Card>

          {/* Author info */}
          <Card 
            className="bg-dark border border-gray/30 p-6 font-vt323"
            style={{ borderRadius: '0', borderStyle: 'dashed' }}
          >
            <p className="text-gray/70 text-sm">
              This post is part of our development blog series. Join our Discord to discuss ideas and follow development progress.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}