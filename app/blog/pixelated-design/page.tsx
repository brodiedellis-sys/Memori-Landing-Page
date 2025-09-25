import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function BlogPost2() {
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
              The Art of Pixelated Design in Modern Apps
            </h1>
            <div className="flex items-center gap-4 text-gray/70 text-lg mb-6">
              <span>January 10, 2025</span>
              <span>•</span>
              <span>3 min read</span>
            </div>
            <p className="text-xl text-gray leading-relaxed">
              How retro aesthetics create focus and nostalgia in an age of overwhelming digital interfaces.
            </p>
          </header>

          {/* Article Content */}
          <Card 
            className="bg-darkSepia border border-cream p-8 font-vt323 mb-8"
            style={{ borderRadius: '0', borderStyle: 'dashed' }}
          >
            <div className="prose prose-lg text-gray space-y-6">
              <p className="text-lg leading-relaxed">
                In a world of infinite gradients, smooth animations, and hyper-realistic interfaces, why are we choosing pixels? The answer lies not in nostalgia, but in focus.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">The Paradox of Modern Design</h2>
              <p className="text-lg leading-relaxed">
                Today's apps are beautiful - almost too beautiful. Every button has a subtle shadow, every transition is buttery smooth, every element begs for attention. But beauty without purpose becomes noise, and noise is the enemy of reflection.
              </p>

              <p className="text-lg leading-relaxed">
                When you're trying to process deep thoughts or work through complex emotions, the last thing you need is a distractingly gorgeous interface. You need something that gets out of the way and lets your mind breathe.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">Pixels as Clarity</h2>
              <p className="text-lg leading-relaxed">
                Pixelated design strips away the unnecessary. Sharp edges mean clear boundaries. Limited colors mean focused attention. Bitmap fonts mean honest communication without typographic manipulation.
              </p>

              <p className="text-lg leading-relaxed">
                There's something profoundly honest about pixels. They don't pretend to be something they're not. A pixel is a pixel—direct, unambiguous, real. In an age of digital deception, this honesty feels revolutionary.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">The Memory Connection</h2>
              <p className="text-lg leading-relaxed">
                Many of us have deep, positive memories associated with pixelated interfaces. Early computers, classic games, digital art—these experiences shaped our relationship with technology during formative years.
              </p>

              <p className="text-lg leading-relaxed">
                But nostalgia alone isn't enough. We're not trying to recreate the past; we're using its visual language to create something new. Memori's pixel aesthetic serves the present: it creates calm in chaos, focus in distraction, clarity in complexity.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">Constraints Breed Creativity</h2>
              <p className="text-lg leading-relaxed">
                Working within pixel limitations forces better decisions. Every element must earn its place. Every color must serve a purpose. There's no room for decoration—only communication.
              </p>

              <p className="text-lg leading-relaxed">
                This constraint extends to the user experience. When your interface can't rely on flashy effects, it must rely on clear hierarchy, logical flow, and purposeful interaction. The result is often more usable, not less.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">Building for Reflection</h2>
              <p className="text-lg leading-relaxed">
                Journaling is an intimate act. It requires mental space, emotional safety, and visual calm. Pixelated design creates this environment naturally—it's humble enough not to compete with your thoughts, structured enough to support your process.
              </p>

              <p className="text-lg leading-relaxed font-bold text-mint">
                In a world of infinite visual noise, sometimes the most radical design choice is simplicity.
              </p>
            </div>
          </Card>

          {/* Author info */}
          <Card 
            className="bg-dark border border-gray/30 p-6 font-vt323"
            style={{ borderRadius: '0', borderStyle: 'dashed' }}
          >
            <p className="text-gray/70 text-sm">
              This post is part of our development blog series. Join our Discord to discuss design philosophy and see behind-the-scenes development.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}