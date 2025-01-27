import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-charcoal to-charcoal/95 text-silver min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden bg-silver/10 aspect-square"
          >
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-slate inline-block px-4 py-1.5 bg-silver/10 backdrop-blur-sm rounded-full text-sm">
                Full-Stack Developer
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-white">John Doe</span>
              </h1>
              <p className="text-lg text-slate leading-relaxed">
                A passionate developer focused on creating beautiful and functional web applications. 
                With expertise in modern technologies, I bring ideas to life through clean code and 
                intuitive design.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 bg-white text-charcoal font-medium rounded-full hover:bg-white/90 transition-colors flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-silver/10 hover:bg-silver/20 rounded-full transition-colors"
              >
                Contact Me
              </motion.a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-silver/10 rounded-full hover:bg-silver/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-silver/10 rounded-full hover:bg-silver/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;