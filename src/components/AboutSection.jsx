import React from "react";
import { Briefcase, Code, Layout, Server } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4 section-divider">
      <div className="relative">
        {" "}
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 display-font">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold ">Full‑Stack Developer</h3>
              <p className="text-muted-foreground">
                I’m a full‑stack developer with 3+ years of experience building
                fast, accessible, and scalable web apps. I mainly work with
                JavaScript, React, Node.js, and Python, and I love creating
                smooth user experiences backed by reliable systems.
              </p>
              <p className="text-muted-foreground">
                Over the years, I’ve gained a solid understanding of both
                frontend and backend technologies, enabling me to deliver
                end-to-end solutions that truly address client needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  {" "}
                  Get In Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-ayodeji-obamiyi/"
                  target="_blank"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  {" "}
                  View my LinkedIn
                </a>
              </div>
            </div>
            {/* Right side */}
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      creating responsive and dynamic websites using modern
                      frameworks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Layout className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Frontend Engineering
                    </h4>
                    <p className="text-muted-foreground">
                      building intuitive user interfaces with a focus on
                      performance and accessibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Backend Development
                    </h4>
                    <p className="text-muted-foreground">
                      designing robust server-side applications and APIs to
                      handle data and business logic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
