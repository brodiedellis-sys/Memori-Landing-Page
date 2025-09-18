import { Card } from "@/components/ui/card";

const features = [
  {
    title: "MEMORY",
    description: "Entries are remembered, tagged, and linked into patterns.",
    icon: "🧠",
    color: "text-mint",
    borderColor: "border-mint",
  },
  {
    title: "REFLECTION", 
    description: "Conversations help you notice themes in your life.",
    icon: "💭",
    color: "text-blue",
    borderColor: "border-blue",
  },
  {
    title: "DIGEST",
    description: "Weekly summaries reveal recurring habits and moods.",
    icon: "📊",
    color: "text-pink", 
    borderColor: "border-pink",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-dark font-vt323">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray mb-4">
            [ FEATURES ]
          </h2>
          <p className="text-xl text-gray/70 max-w-2xl mx-auto">
            Three core capabilities that make Memori your ideal digital companion
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`bg-dark ${feature.borderColor} p-8 text-center crt-glow hover:scale-105 transition-all duration-300`}
            >
              {/* Pixel icon */}
              <div className="mb-6 flex justify-center">
                <div className="text-6xl p-4 bg-dark border-2 border-gray/30">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-3xl font-bold ${feature.color} mb-4`}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative pixels */}
              <div className="flex justify-center mt-6 space-x-2">
                <div className={`w-3 h-3 ${feature.color.replace('text-', 'bg-')}`}></div>
                <div className="w-2 h-2 bg-gray/50"></div>
                <div className={`w-3 h-3 ${feature.color.replace('text-', 'bg-')}`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className={`w-4 h-4 ${
                  i % 3 === 0 ? 'bg-mint' : i % 3 === 1 ? 'bg-blue' : 'bg-pink'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
