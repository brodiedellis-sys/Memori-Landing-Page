import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray font-vt323">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Terminal-style copyright */}
          <div className="text-gray/70 text-lg">
            <span className="text-mint">></span> memori © 2025
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/about" 
              className="text-gray hover:text-mint transition-colors text-lg"
            >
              ABOUT
            </Link>
            <Link 
              href="/blog" 
              className="text-gray hover:text-mint transition-colors text-lg"
            >
              BLOG
            </Link>
            <a 
              href="#" 
              className="text-gray hover:text-blue transition-colors text-lg"
            >
              GITHUB
            </a>
            <a 
              href="mailto:contact@memori.dev" 
              className="text-gray hover:text-pink transition-colors text-lg"
            >
              CONTACT
            </a>
          </div>

          {/* Status indicator */}
          <div className="flex items-center space-x-2 text-gray/70">
            <div className="w-2 h-2 bg-mint rounded-full animate-pulse"></div>
            <span className="text-sm">BUILDING...</span>
          </div>
        </div>

        {/* Terminal-style divider */}
        <div className="mt-6 pt-4 border-t border-gray/20">
          <div className="text-center text-gray/50 text-sm">
            <span className="text-mint">[</span> 
            LOCAL-FIRST • PRIVACY-FOCUSED • OPEN-SOURCE 
            <span className="text-mint">]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
