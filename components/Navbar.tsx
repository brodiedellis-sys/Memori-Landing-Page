import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 sepia-nav z-50 font-vt323">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              className="text-cream hover:text-gold transition-colors text-lg hover:text-glow"
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="text-cream hover:text-gold transition-colors text-lg hover:text-glow"
            >
              Features
            </Link>
            <Link 
              href="/roadmap" 
              className="text-cream hover:text-gold transition-colors text-lg hover:text-glow"
            >
              Roadmap
            </Link>
            <Link 
              href="/blog" 
              className="text-cream hover:text-gold transition-colors text-lg hover:text-glow"
            >
              Blog
            </Link>
            <Link 
              href="/faq" 
              className="text-cream hover:text-gold transition-colors text-lg hover:text-glow"
            >
              FAQ
            </Link>
          </div>

          {/* CTA Button and Discord Button */}
          <div className="flex items-center gap-4">
            <a href="/#waitlist" className="sepia-btn text-lg golden-glow hidden md:block">
              JOIN WAITLIST
            </a>
            <a
              href="https://discord.gg/zPGGFPXfty"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image src="/Discord button.png" alt="Join Discord" width={64} height={64} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Link href="/nav" className="md:hidden text-cream hover:text-gold text-2xl">
            ☰
          </Link>
        </div>
      </div>
    </nav>
  );
}
