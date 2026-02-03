import React from "react";
import { Sparkles, Layers, Rocket } from "lucide-react";

const highlights = [
  {
    title: "Design‑forward builds",
    description:
      "I craft clean, modern UI systems that feel tailored to each product — not generic templates.",
    icon: Sparkles,
  },
  {
    title: "Engineering depth",
    description:
      "From APIs to responsive layouts, I build reliable systems that scale and stay fast.",
    icon: Layers,
  },
  {
    title: "Launch‑ready mindset",
    description:
      "I focus on impact, polish, and performance so every release looks and feels premium.",
    icon: Rocket,
  },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-20 px-4 relative section-divider">
      <div className="container max-w-5xl mx-auto">
        <div className="glass-card p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-sm text-muted-foreground">Why clients choose me</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground display-font">
                A polished, product‑ready approach
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="pill">UI/UX Focused</span>
              <span className="pill">Full‑Stack</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="gradient-border p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg display-font">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
