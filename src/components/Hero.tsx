import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="text-slate inline-block mb-4 px-4 py-1.5 bg-silver/30 backdrop-blur-sm rounded-full text-sm">
          Full-Stack Developer
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Creating Digital
          <br />
          Experiences
        </h1>
        <p className="text-slate max-w-lg mx-auto mb-8 text-lg">
          Crafting elegant solutions through clean code and intuitive design
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-6 h-6 text-slate animate-bounce" />
      </motion.div>
    </section>
  );
};