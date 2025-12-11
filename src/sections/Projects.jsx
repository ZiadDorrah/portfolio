import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Schoolify",
    description:
      "Schoolify is an innovative and user-friendly platform designed to streamline and enhance the management of school-related tasks. The project provides students, teachers, and administrators with features like class schedules, assignments, grading, and more.",
    image: "/projects/project4.png",
    tags: ["React.js", "Laravel", "MySQL", "Tailwind"],
    link: "#",
    github: "https://github.com/ZiadDorrah/Schoolify-Frontend",
  },
  {
    title: "NextMeals",
    description:
      "NextMeals is a full-stack recipe and meal-sharing web application built with Next.js, providing a fast, SEO-friendly, and fully responsive user experience. The app allows users to browse meals, view detailed cooking instructions, and add their own recipes through a clean and modern interface.",
    image: "/projects/project1.png",
    tags: ["Next.js", "Better-sqlite3", "Slugify", "Tailwind"],
    link: "#",
    github: "https://github.com/ZiadDorrah/NextMeals",
  },
  {
    title: "To-do App",
    description:
      "A modern and responsive task management application designed to help users organize their daily activities efficiently. The app delivers a smooth user experience with clean UI components and animated interactions.",
    image: "/projects/project2.png",
    tags: ["React.js", "React-router-dom", "Redux", "Bootstrap", "Motion"],
    link: "#",
    github: "https://github.com/ZiadDorrah/movies-project",
  },
  {
    title: "React Poster",
    description:
      "React Poster is a simple yet powerful full-stack posting application that allows users to create, view, and manage posts through a clean and modern interface. The frontend is built with React.js and React-Router-DOM, while the backend is handled using Node.js to provide fast and reliable API endpoints.",
    image: "/projects/project3.png",
    tags: ["React.js", "Node.js", "React-router-dom"],
    link: "#",
    github: "#",
  },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a
              href="https://github.com/ZiadDorrah?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
            </a>
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
