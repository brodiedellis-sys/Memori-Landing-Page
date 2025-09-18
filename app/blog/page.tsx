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
  },
  {
    title: "The Art of Pixelated Design in Modern Apps",
    excerpt: "How retro aesthetics create focus and nostalgia in an age of overwhelming digital interfaces.",
    date: "2025-01-10", 
    readTime: "3 min read",
  },
  {
    title: "AI Journaling: Reflection Without Surveillance",
    excerpt: "Designing AI companions that help you grow while respecting your privacy and autonomy.",
    date: "2025-01-05",
    readTime: "7 min read",
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
          <h1 className="text-6xl font-bold text-blue mb-4">MEMORI BLOG</h1>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Thoughts on privacy, design, and the future of digital journaling
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:gap-12 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-dark border-gray p-8 crt-glow hover:border-mint transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-3xl text-mint mb-3 hover:text-blue cursor-pointer transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-lg text-gray mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex gap-4 text-sm text-gray/70">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Button 
                  variant="outline" 
                  className="border-gray text-gray hover:bg-gray hover:text-dark font-vt323 text-sm self-start sm:self-center"
                >
                  READ MORE →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <Card className="bg-dark border-pink p-8 text-center mt-16 max-w-2xl mx-auto crt-glow">
          <h2 className="text-3xl text-pink mb-4">MORE POSTS COMING SOON</h2>
          <p className="text-lg text-gray mb-6">
            We're preparing more insights about building privacy-focused tools and retro design patterns.
          </p>
          <p className="text-sm text-gray/70">
            This blog is ready for future MDX integration and dynamic content loading.
          </p>
        </Card>
      </div>
      </div>
      <Footer />
    </>
  );
}
