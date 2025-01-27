import { motion } from "framer-motion";
import { ExternalLink, Github, RouterIcon } from "lucide-react";
import { FaHtml5, FaJs, FaCss3, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter, SiSupabase } from "react-icons/si";

const projects = [
  {
    title: "E-commerce ",
    description:
      "A modern e-commerce web built with html , css  and javascript",
    tech: [
      { name: "html5", icon: <FaHtml5 /> },
      { name: "css3", icon: <FaCss3 /> },
      { name: "Javascript", icon: <FaJs /> },
    ],
    github: "#",
    live: "#",
    image: "/placeholder.svg",
  },
  {
    title: "Jop portal",
    description: "find and land your career jop ",
    tech: [
      { name: "TailwindCss", icon: <RiTailwindCssFill /> },
      { name: "React js", icon: <FaReact /> },
    ],
    github: "#",
    live: "#",
    image: "/placeholder.svg",
  },
  {
    title: "Task manager ",
    description: "let's build task manager with react and supabase",
    tech: [
      { name: "React js", icon: <FaReact /> },
      { name: "Tailwindcss", icon: <RiTailwindCssFill /> },
      { name: "React Router v6", icon: <SiReactrouter /> },
      {name:'Supabase',icon:<SiSupabase/>}
    ],
    github: "#",
    live: "#",
    image: "/placeholder.svg",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-slate inline-block mb-4 px-4 py-1.5 bg-silver/30 backdrop-blur-sm rounded-full text-sm">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-slate max-w-xl mx-auto">
            A selection of my recent work, showcasing web development expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-silver/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <>
                    <span
                      key={i}
                      className="text-xs flex items-center gap-3 px-3 py-1 bg-silver/10 rounded-full"
                    >
                      {tech.name}
                      <span> {tech.icon}</span>
                    </span>
                  </>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm hover:text-slate transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm hover:text-slate transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
