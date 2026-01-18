import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Food Delivery Web App",
    description:
      "A web application for ordering food from local restaurants in Darkmode.",
    imageUrl: "/projects/project1.png   ",
    tags: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    DemoUrl: "https://food-ordering-webapp-7hsi.onrender.com/",
    GitHubUrl: "https://github.com/Danayodeji/food-ordering-webapp",
  },

  {
    id: 2,
    title: "my Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    imageUrl: "/projects/project2.png   ",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    DemoUrl: "https://myportfolio.com",
    GitHubUrl: "https://github.com/Danayodeji/daniel-obamiyi-dev",
  },
  {
    id: 3,
    title: "Food Delivery Web App",
    description:
      "A web application for ordering food from local restaurants in Light mode.",
    imageUrl: "/projects/project3.png   ",
    tags: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    DemoUrl: "https://food-ordering-webapp-7hsi.onrender.com/",
    GitHubUrl: "https://github.com/Danayodeji/food-ordering-webapp",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p>Here are some of the projects I have worked on recently.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* tag */}
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span key={key} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Title and Description */}
              <div className="p-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Link to Project Repo on GitHub */}
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
