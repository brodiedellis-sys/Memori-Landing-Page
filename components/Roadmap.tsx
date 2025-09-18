import { Card } from "@/components/ui/card";

const roadmapItems = [
  {
    phase: "NOW",
    title: "Local-first journaling core",
    description: "Basic AI-assisted journaling with local storage and privacy-first design.",
    status: "building",
    color: "text-mint",
    bgColor: "bg-mint/10",
    borderColor: "border-mint",
  },
  {
    phase: "NEXT",
    title: "Weekly digests & pattern recognition", 
    description: "AI-powered insights into your journaling patterns and recurring themes.",
    status: "planned",
    color: "text-blue",
    bgColor: "bg-blue/10",
    borderColor: "border-blue",
  },
  {
    phase: "FUTURE",
    title: "Mobile apps & optional sync",
    description: "Cross-platform apps with encrypted, user-controlled synchronization.",
    status: "vision",
    color: "text-pink",
    bgColor: "bg-pink/10", 
    borderColor: "border-pink",
  },
];

export default function Roadmap() {
  return (
    <section className="py-20 bg-dark font-vt323">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray mb-4">
            [ ROADMAP ]
          </h2>
          <p className="text-xl text-gray/70 max-w-2xl mx-auto">
            Our journey to build the perfect AI journaling companion
          </p>
        </div>

        {/* Roadmap timeline */}
        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline connector */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray/30"></div>
              )}
              
              <Card className={`${item.bgColor} ${item.borderColor} p-8 crt-glow`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Phase indicator */}
                  <div className="flex-shrink-0">
                    <div className={`${item.color} text-2xl font-bold mb-2`}>
                      {item.phase}
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 ${
                        item.status === 'building' ? 'bg-mint animate-pulse' :
                        item.status === 'planned' ? 'bg-blue' : 'bg-pink/50'
                      }`}></div>
                      <span className="text-sm text-gray/70 uppercase">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-3xl font-bold ${item.color} mb-4`}>
                      {item.title}
                    </h3>
                    <p className="text-gray text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Quest-style decoration */}
                  <div className="flex-shrink-0 hidden md:block">
                    <div className="grid grid-cols-2 gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`w-3 h-3 ${item.color.replace('text-', 'bg-')}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <div className="inline-block bg-dark border border-gray p-6 crt-glow">
            <div className="text-gray mb-2">
              <span className="text-mint">></span> Want to influence our roadmap?
            </div>
            <div className="text-gray/70">
              Join our community and share your ideas for the future of Memori.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
