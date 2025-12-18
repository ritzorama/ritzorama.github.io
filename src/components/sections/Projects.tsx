import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "snak8s",
      description:
        "A visually interactive way to navigate Kubernetes resources in a game-like fashion.",
      tags: ["React", "Node.js", "Kanvas", "Meshery"],
      image: "https://raw.githubusercontent.com/ritzorama/snak8s/2e88da85806b6940cc6484c932bf76df3849d564/snk8s.png",
      githubUrl: "https://github.com/ritzorama/snak8s",
    },
    {
      title: "AI Content Generator",
      description:
        "An intelligent writing assistant powered by GPT that helps creators produce engaging content at scale.",
      tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      // liveUrl: "#",
      // githubUrl: "#",
    },
    {
      title: "Finance Dashboard",
      description:
        "A comprehensive financial analytics platform with real-time data visualization and predictive insights.",
      tags: ["React", "D3.js", "Python", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      // liveUrl: "#",
      // githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-display text-3xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button variant="hero" size="lg" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="hero-outline" size="lg" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
