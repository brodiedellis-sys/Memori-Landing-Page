import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQ() {
  const faqs = [
    {
      question: "Is Memori really free?",
      answer: "Yes! Memori's core features will always be free. We believe everyone deserves access to thoughtful, private journaling. The only paid features we'll EVER introduce are purely cosmetic - like custom themes, colors, or visual customizations. All functionality, AI assistance, privacy features, and core journaling capabilities will remain completely free forever. No paywalls for actual features, period."
    },
    {
      question: "How does privacy work?",
      answer: "Your privacy is our foundation, not an afterthought. Memori operates locally-first, meaning your journal entries stay on your device by default. We use end-to-end encryption for any optional cloud syncing. We never read, analyze, or sell your personal data. No ads, no tracking, no compromises. Your thoughts belong to you, period."
    },
    {
      question: "When can I use it?",
      answer: "Memori is currently in active development. Early supporters on our waitlist will get first access to the beta version, expected in Q1 2026. We're building something thoughtful and secure, which takes time. Join our Discord to follow development progress and get behind-the-scenes updates!"
    },
    {
      question: "What's the difference from other journaling apps?",
      answer: "Most journaling apps are either too simple (just text) or too complex (overwhelming features). Memori is designed specifically for deep reflection with AI that understands context, remembers your growth over time, and helps you discover patterns in your thinking. Plus, it works completely offline and respects your privacy - no cloud dependency or data harvesting."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark font-vt323">
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-dark to-darkSepia">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-mint mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xl text-gray max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Memori's vision, privacy, and future.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-darkSepia">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="bg-dark border border-cream p-8 font-vt323"
                style={{ borderRadius: '0', borderStyle: 'dashed' }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-mint mb-6">
                  Q: {faq.question}
                </h3>
                <p className="text-lg text-gray leading-relaxed">
                  A: {faq.answer}
                </p>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card 
              className="bg-darkSepia border border-mint max-w-2xl mx-auto p-8 font-vt323"
              style={{ borderRadius: '0', borderStyle: 'dashed' }}
            >
              <h3 className="text-3xl font-bold text-mint mb-4">
                Still have questions?
              </h3>
              <p className="text-lg text-gray mb-6">
                Join our Discord community to ask questions, share feedback, 
                and connect with other early supporters.
              </p>
              <a 
                href="https://discord.gg/zPGGFPXfty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blurple hover:bg-blurple/80 text-white px-8 py-3 font-vt323 text-lg transition-colors"
              >
                JOIN DISCORD
              </a>
            </Card>
          </div>

          {/* Terminal decoration */}
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-9 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={i}
                  className={`w-3 h-3 ${
                    i % 4 === 0 ? 'bg-mint' : 
                    i % 4 === 1 ? 'bg-blue' : 
                    i % 4 === 2 ? 'bg-pink' : 'bg-gray/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}