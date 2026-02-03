import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "SQL", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "Python", level: 70, category: "backend" },
  { name: "Django", level: 60, category: "backend" },
  { name: "RESTful APIs", level: 75, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 70, category: "tools" },
  { name: "Docker", level: 65, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },

  // Other
  { name: "WordPress", level: 70, category: "other" },
  { name: "SEO", level: 60, category: "other" },
  { name: "Facebook Ads", level: 65, category: "other" },
  { name: "Google Analytics", level: 60, category: "other" },
  { name: "Google Ads", level: 60, category: "other" },  
  
];





const categories = ["all", "frontend", "backend", "tools", "other"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) =>
    activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 section-divider">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 display-font">
          My
          <span className="text-primary"> Skills</span>
        </h2>
        {/* category buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-4 py-2 rounded-full border transition-colors duration-300",
                activeCategory === category 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-secondary/70 text-foreground border-border hover:bg-secondary"
              )}

              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg text-left">
                  {skill.name}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out] transition-all"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
