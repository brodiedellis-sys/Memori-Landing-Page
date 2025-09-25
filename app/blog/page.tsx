import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    title: "Building Memori: Why Local-First Matters",
    excerpt: "Exploring the philosophy behind keeping your digital thoughts truly private and secure on your own device.",
    date: "2025-01-15",
    readTime: "5 min read",
    slug: "local-first",
  },
  {
    title: "Why Pixels?",
    excerpt: "In a world of infinite gradients, smooth animations, and hyper-realistic interfaces, why choose pixels? The answer isn't nostalgia — it's focus.",
    date: "2025-01-10", 
    readTime: "3 min read",
    slug: "why-pixels",
  },
  {
    title: "AI Journaling: Reflection Without Surveillance",
    excerpt: "The promise of AI-assisted journaling is profound: imagine a companion that remembers your patterns, celebrates your growth, and offers insights tailored to your journey.",
    date: "2025-01-05",
    readTime: "7 min read",
    slug: "ai-journaling",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-dark text-gray font-vt323 pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gold mb-4">MEMORI BLOG</h1>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Thoughts on privacy, design, and the future of digital journaling
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="bg-darkSepia border border-cream p-6 font-vt323 hover:border-mint transition-colors cursor-pointer"
              style={{ borderRadius: '0', borderStyle: 'dashed' }}
            >
              <a href={`/blog/${post.slug}`} className="block">
                <div className="flex items-center gap-2 text-gray/70 text-sm mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-mint mb-4 hover:text-gold transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="text-mint hover:text-gold transition-colors text-sm">
                  Read more →
                </div>
              </a>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <Card className="bg-dark border border-pink p-8 text-center mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl text-pink mb-4">MORE POSTS COMING SOON</h2>
          <p className="text-lg text-gray mb-6">
            We're preparing more insights about building privacy-focused tools and retro design patterns.
          </p>
        </Card>
      </div>
      </div>
      <Footer />
    </>
  );
}
