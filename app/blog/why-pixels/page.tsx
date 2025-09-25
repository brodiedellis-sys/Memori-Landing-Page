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
              Why Pixels?
            </h1>
            <div className="flex items-center gap-4 text-gray/70 text-lg mb-6">
              <span>January 10, 2025</span>
              <span>•</span>
              <span>3 min read</span>
            </div>
            <p className="text-xl text-gray leading-relaxed">
              In a world of infinite gradients, smooth animations, and hyper-realistic interfaces, why choose pixels? The answer isn't nostalgia — it's focus.
            </p>
          </header>

          {/* Article Content */}
          <Card 
            className="bg-darkSepia border border-cream p-8 font-vt323 mb-8"
            style={{ borderRadius: '0', borderStyle: 'dashed' }}
          >
            <div className="prose prose-lg text-gray space-y-6">
              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">The Paradox of Modern Design</h2>
              <p className="text-lg leading-relaxed">
                Today's apps are beautiful — sometimes too beautiful. Subtle shadows, buttery transitions, endless flourishes. Every element demands attention. But beauty without purpose becomes noise, and noise is the enemy of reflection.
              </p>

              <p className="text-lg leading-relaxed">
                When you're processing deep thoughts or navigating complex emotions, the last thing you need is a dazzling interface. You need something quiet enough to let your mind breathe.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">Pixels as Clarity</h2>
              <p className="text-lg leading-relaxed">
                Pixelated design strips away the unnecessary.
              </p>
              
              <p className="text-lg leading-relaxed">
                Sharp edges mean clear boundaries.
              </p>
              
              <p className="text-lg leading-relaxed">
                Limited colors mean focused attention.
              </p>
              
              <p className="text-lg leading-relaxed">
                Bitmap fonts mean honest communication, free from typographic tricks.
              </p>

              <p className="text-lg leading-relaxed">
                Pixels don't pretend. A pixel is a pixel — direct, unambiguous, real. In an age of digital deception, that honesty feels revolutionary.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">The Memory Connection</h2>
              <p className="text-lg leading-relaxed">
                Many of us grew up with pixels: early computers, classic games, digital art. These memories shape how we feel about technology.
              </p>

              <p className="text-lg leading-relaxed">
                But Memori's design isn't about chasing nostalgia. It borrows the language of the past to serve the present — creating calm in chaos, focus in distraction, clarity in complexity.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">Constraints Breed Creativity</h2>
              <p className="text-lg leading-relaxed">
                Pixels force discipline. Every element must earn its place. Every color must serve a purpose. There's no space for decoration without meaning.
              </p>

              <p className="text-lg leading-relaxed">
                The same is true of the experience: when an interface can't hide behind flashy effects, it must rely on clarity, hierarchy, and logic. The result is often more usable, not less.
              </p>

              <h2 className="text-2xl font-bold text-mint mt-8 mb-4">Building for Reflection</h2>
              <p className="text-lg leading-relaxed">
                Journaling is intimate. It requires mental space, emotional safety, and visual calm. Pixelated design creates this environment naturally — humble enough not to compete with your thoughts, structured enough to support them.
              </p>

              <p className="text-lg leading-relaxed font-bold text-mint">
                In a world of infinite visual noise, the most radical design choice is simplicity.
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