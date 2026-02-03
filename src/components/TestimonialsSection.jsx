import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Product Lead",
    company: "Fintech Startup",
    quote:
      "Ayodeji brings a rare mix of design taste and engineering discipline. Our launch felt premium and stable from day one.",
  },
  {
    name: "Founder",
    company: "E‑commerce Brand",
    quote:
      "He simplified our UX and boosted conversions quickly. Communication was clear, and execution was fast.",
  },
  {
    name: "CTO",
    company: "SaaS Team",
    quote:
      "Clean code, thoughtful UI, and measurable results. We’d ship with him again without hesitation.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 relative section-divider">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 display-font">
          Trusted by teams who value <span className="text-primary">quality</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real feedback from people I’ve partnered with to build and launch products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          {testimonials.map((item, index) => (
            <div key={index} className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Quote className="h-4 w-4 text-primary" />
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Testimonial
                </p>
              </div>
              <p className="text-sm text-foreground/90 mb-6">“{item.quote}”</p>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{item.name}</p>
                <p className="text-muted-foreground">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
