import React from "react";
import { Clock, MapPin, Briefcase } from "lucide-react";

const NowSection = () => {
  return (
    <section id="now" className="py-20 px-4 relative bg-secondary/30 section-divider">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-muted-foreground">Now</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 display-font">
              What I’m focused on <span className="text-primary">right now</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Building design‑forward web experiences, refining component systems, and shipping
              performance‑tuned products for startups and founders.
            </p>
          </div>

          <div className="glass-card p-6 space-y-5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="font-semibold">Open for select freelance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Typical timeline</p>
                <p className="font-semibold">2–6 weeks per project</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">Lagos, Nigeria · Remote worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowSection;
