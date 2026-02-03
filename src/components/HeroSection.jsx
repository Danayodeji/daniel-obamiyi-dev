import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="absolute inset-0 -z-10">
        <div className="orb w-72 h-72 bg-primary/30 -top-12 -left-10" />
        <div className="orb w-80 h-80 bg-accent/40 bottom-10 right-0" />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="pill opacity-0 animate-fade-in-delay-1">Full‑Stack Developer</span>
              <span className="pill opacity-0 animate-fade-in-delay-2">Lagos, Nigeria</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight display-font">
              <span className="opacity-0 animate-fade-in-delay-2">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-3">
                {" "}
                Ayodeji Daniel
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-4">
                {" "}
                Obamiyi
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-4">
              I build distinct, high‑performing web experiences that feel crafted, not
              generic. From product‑focused landing pages to full‑stack apps, I turn
              ideas into interfaces people remember.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 opacity-0 animate-fade-in-delay-5">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Let’s Talk
              </a>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6 text-left">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-primary/15 flex items-center justify-center text-primary font-bold">
                AD
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Currently building</p>
                <p className="text-lg font-semibold">Design‑forward web products</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="gradient-border p-4">
                <p className="text-2xl font-bold">3+</p>
                <p className="text-sm text-muted-foreground">Years shipping</p>
              </div>
              <div className="gradient-border p-4">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm text-muted-foreground">Projects delivered</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Web apps with clean UI systems
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                API‑driven experiences & dashboards
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Performance & accessibility focus
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary'/>
      </div>
    </section>
  );
};

export default HeroSection;
