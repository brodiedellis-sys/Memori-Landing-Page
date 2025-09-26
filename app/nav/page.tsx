import Link from "next/link";
import Image from "next/image";

export default function MobileNavPage() {
  return (
    <div className="min-h-screen bg-dark text-cream font-vt323 px-4 py-8">
      {/* Back button */}
      <div className="mb-8">
        <Link href="/" className="text-gray hover:text-mint transition-colors text-lg">
          <span className="text-mint">{'←'}</span> BACK TO HOME
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl text-mint mb-4">NAVIGATION</h1>
        <div className="pixel-border-thin mx-auto w-32 h-1 bg-mint"></div>
      </div>

      {/* Navigation Links - Stacked vertically */}
      <div className="space-y-6 max-w-md mx-auto">
        <Link 
          href="/"
          className="block text-center py-6 pixel-border bg-dark/50 hover:bg-mint/10 transition-colors text-2xl"
        >
          <span className="text-mint">{'>'}</span> HOME
        </Link>
        
        <Link 
          href="/features"
          className="block text-center py-6 pixel-border bg-dark/50 hover:bg-mint/10 transition-colors text-2xl"
        >
          <span className="text-mint">{'>'}</span> FEATURES
        </Link>
        
        <Link 
          href="/roadmap"
          className="block text-center py-6 pixel-border bg-dark/50 hover:bg-mint/10 transition-colors text-2xl"
        >
          <span className="text-mint">{'>'}</span> ROADMAP
        </Link>
        
        <Link 
          href="/blog"
          className="block text-center py-6 pixel-border bg-dark/50 hover:bg-mint/10 transition-colors text-2xl"
        >
          <span className="text-mint">{'>'}</span> BLOG
        </Link>
        
        <Link 
          href="/faq"
          className="block text-center py-6 pixel-border bg-dark/50 hover:bg-mint/10 transition-colors text-2xl"
        >
          <span className="text-mint">{'>'}</span> FAQ
        </Link>

        {/* Discord Link */}
        <div className="pt-8">
          <a
            href="https://discord.gg/zPGGFPXfty"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-6 pixel-border bg-blurple/20 hover:bg-blurple/30 transition-colors text-2xl"
          >
            <div className="flex items-center justify-center space-x-4">
              <Image src="/Discord button.png" alt="Join Discord" width={48} height={48} />
              <span className="text-blurple">JOIN DISCORD</span>
            </div>
          </a>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="mt-16 text-center">
        <div className="text-gray/70 text-lg">
          <span className="text-mint">{'>'}</span> Memori © 2025
        </div>
        <div className="mt-4 flex items-center justify-center space-x-2 text-gray/70">
          <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
          <span className="text-sm">BUILDING...</span>
        </div>
      </div>
    </div>
  );
}