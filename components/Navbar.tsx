import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark/90 backdrop-blur-sm border-b border-gray z-50 font-vt323">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-mint hover:text-blue transition-colors">
            MEMORI
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray hover:text-mint transition-colors text-lg"
            >
              HOME
            </Link>
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
              className="text-gray hover:text-mint transition-colors text-lg"
            >
              GITHUB
            </a>
          </div>

          {/* CTA Button */}
          <Button className="bg-mint text-dark hover:bg-mint/80 font-vt323 text-lg pixel-border hidden md:block">
            JOIN WAITLIST
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray hover:text-mint text-2xl">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
