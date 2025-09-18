import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-dark text-gray font-vt323 pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-mint mb-4">ABOUT MEMORI</h1>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Understanding the philosophy behind your pixelated AI journaling companion
          </p>
        </div>

        {/* Philosophy Section */}
        <Card className="bg-dark border-gray mb-12 p-8 crt-glow">
          <h2 className="text-4xl text-blue mb-6">[ PHILOSOPHY ]</h2>
          <div className="space-y-4 text-lg">
            <p>
              Memori believes that journaling should be a deeply personal, reflective practice. 
              In a world where our thoughts and memories are constantly harvested by algorithms, 
              we're building something different.
            </p>
            <p>
              Your journal entries are yours alone. They live on your device, grow with your experiences, 
              and help you understand patterns in your life without ever leaving your control.
            </p>
            <p>
              The pixelated aesthetic isn't just nostalgic—it's intentional. We're inspired by the 
              simplicity and focus of early computing, when tools were built to enhance human creativity 
              rather than extract value from it.
            </p>
          </div>
        </Card>

        {/* Privacy Section */}
        <Card className="bg-dark border-gray mb-12 p-8 crt-glow">
          <h2 className="text-4xl text-pink mb-6">[ PRIVACY ]</h2>
          <div className="space-y-4 text-lg">
            <p>
              <span className="text-mint">LOCAL-FIRST:</span> Your memories stay with you. Nothing is sent to the cloud.
            </p>
            <p>
              <span className="text-blue">ENCRYPTED:</span> All entries are encrypted on your device using industry-standard protocols.
            </p>
            <p>
              <span className="text-pink">TRANSPARENT:</span> Our code is open-source. You can verify exactly how your data is handled.
            </p>
            <p>
              <span className="text-mint">OPTIONAL SYNC:</span> Future versions will offer optional, encrypted sync—but always under your control.
            </p>
          </div>
        </Card>

        {/* Waitlist Section */}
        <Card className="bg-dark border-mint p-8 text-center crt-glow">
          <h2 className="text-4xl text-mint mb-6">JOIN THE WAITLIST</h2>
          <p className="text-lg mb-6">
            Be among the first to experience Memori when it launches.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="your.email@example.com"
              className="bg-dark border-gray text-gray placeholder-gray/50 font-vt323 text-lg pixel-border"
            />
            <Button className="bg-mint text-dark hover:bg-mint/80 font-vt323 text-lg pixel-border">
              JOIN WAITLIST
            </Button>
          </div>
        </Card>
      </div>
      </div>
      <Footer />
    </>
  );
}
