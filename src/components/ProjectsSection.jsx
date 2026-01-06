import { ArrowRight, ExternalLink, Github as GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "InterBit - AI Powered Interview Platform",
    description: "This is a comprehensive AI Interview Platform designed to help users prepare for technical interviews. It connects users with expert mentors and provides AI-driven interview experiences.",
    image: "/projects/project1.png",
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "Prisma", "Gemini API", "Vapi"],
    demoUrl: "https://interbit-frontend.onrender.com/",
    githubUrl: "https://github.com/Genrator79/InterBit",
  },
  {
    id: 2,
    title: "Eventra",
    description:
      "Event management platform where users can discover and register for upcoming events, while admins can create and manage event listings.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    demoUrl: "https://eventra-5j2m.onrender.com/",
    githubUrl: "https://github.com/Genrator79/Eventra",
  },
  {
    id: 3,
    title: "nstBuddy",
    description:
      "Assignment solution platform where students can search and view solutions, and developers can upload and manage solution content.",
    image: "/projects/project3.png",
    tags: ["React", "Google Spread Sgeet", "Tailwind", "Vite", "TypeScript"],
    demoUrl: "https://nstbuddy.tech",
    githubUrl: "https://github.com/CODERNSINGH/update-nstBuddy/tree/main",
  },
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Rana-NST-RU"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
