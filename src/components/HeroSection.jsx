import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-3">
              {" "}
              Ayodeji Daniel
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-4">
              {" "}
              Obamiyi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I turn ideas into cool digital experiences. From sleek web apps to smooth
            mobile interfaces, I build products that look good and work even
            better. I write code that users love, teams smiling and deadlines happy
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
                View My Work
            </a>            
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
