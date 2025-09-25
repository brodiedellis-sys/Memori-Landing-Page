export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray font-vt323">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Terminal-style copyright */}
          <div className="text-gray/70 text-lg">
            <span className="text-mint">{'>'}</span> Memori © 2025
          </div>

          {/* Contact Link */}
          <div className="flex items-center">
            <a 
              href="https://discord.gg/zPGGFPXfty" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-blurple transition-colors text-lg"
            >
              Contact
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
