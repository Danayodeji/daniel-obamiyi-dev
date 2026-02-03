import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Food Delivery Web App",
    description:
      "A web application for ordering food from local restaurants in Darkmode.",
    imageUrl: "/projects/project1.png",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "CSS"],
    DemoUrl: "https://food-ordering-webapp-inky.vercel.app",
    GitHubUrl: "https://github.com/Danayodeji/food-ordering-webapp",
    featured: true,
    problem: "People struggled to quickly find open restaurants at night and complete checkout without friction.",
    solution: "Built a dark‑mode first UI with fast search, clear cards, and a streamlined cart/checkout flow.",
    metrics: ["Checkout flow ↓ 2 steps", "Search speed ↑", "Conversion focus"],
  },

  {
    id: 2,
    title: "my Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    imageUrl: "/projects/project2.png",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    DemoUrl: "https://myportfolio.com",
    GitHubUrl: "https://github.com/Danayodeji/daniel-obamiyi-dev",
    problem: "Needed a memorable personal brand and a single place to showcase work and skills clearly.",
    solution: "Designed a bold, motion‑driven layout with focused sections and a clean content hierarchy.",
    metrics: ["Bounce rate ↓", "Time on page ↑", "Brand clarity"],
  },
  {
    id: 3,
    title: "Food Delivery Web App",
    description:
      "A web application for ordering food from local restaurants in Light mode.",
    imageUrl: "/projects/project3.png",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "CSS"],
    DemoUrl: "https://food-ordering-webapp-inky.vercel.app",
    GitHubUrl: "https://github.com/Danayodeji/food-ordering-webapp",
    problem: "Users wanted a daytime‑friendly experience that kept the same clarity as the dark UI.",
    solution: "Implemented a light theme with high contrast, soft surfaces, and consistent product cards.",
    metrics: ["Readability ↑", "Contrast AA", "UI consistency"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative section-divider">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 display-font">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-muted-foreground">A few recent builds that show how I blend clean UI with solid engineering.</p>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-12 text-left">
          {projects.map((project, key) => (
            <div
              key={key}
              className={`group glass-card overflow-hidden card-hover ${project.featured ? "md:col-span-4" : "md:col-span-2"}`}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* tag */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, key) => (
                      <span key={key} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.featured && (
                    <span className="pill">Featured</span>
                  )}
                </div>
              
                {/* Title and Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 gap-3 mb-5">
                  <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Problem</p>
                    <p className="text-sm text-foreground/90">{project.problem}</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Solution</p>
                    <p className="text-sm text-foreground/90">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.metrics?.map((metric) => (
                    <span key={metric} className="pill">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Link to Project Repo */}
                <div className="flex justify-between">
                  <a
                    href={project.DemoUrl}
                    target="_blank"
                    rel={project.DemoUrl ? "noopener noreferrer" : ""}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="inline-block mr-1 h-4 w-4" />
                    Demo
                  </a>
                  <a
                    href={project.GitHubUrl}
                    target="_blank"
                    rel={project.GitHubUrl ? "noopener noreferrer" : ""}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github className="inline-block mr-1 h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to my personal GitHub */}
        <div className="mt-12 text-center">
            <a href="https://github.com/Danayodeji" target="_blank" rel="noopener noreferrer" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check out more on my GitHub! <ArrowRight size={16} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
