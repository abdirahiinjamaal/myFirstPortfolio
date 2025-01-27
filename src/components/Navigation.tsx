import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import {  Menu,  X } from "lucide-react";

export const Navigation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-silver/30 origin-[0%] z-50"
        style={{ scaleX }}
      />
      <header className="fixed top-0 left-0 right-0 z-40">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-xl font-bold hover:text-slate transition-colors"
            >
              Portfolio
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#projects"
                className="hover:text-slate transition-colors"
              >
                Projects
              </a>
              <a href="#skills" className="hover:text-slate transition-colors">
                Skills
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-silver/10 hover:bg-silver/20 rounded-full transition-colors"
              >
                Contact
              </a>
            </div>
            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setToggle((prev) => !prev)}
            >
              {toggle ? <X /> : <Menu />}
            </button>
          </div>
          {/* Mobile Navigation Menu */}
          {toggle && (
            <motion.div
              className="mt-4 backdrop-blur-2xl items-start  rounded-lg  md:hidden   flex flex-col gap-4 px-4 py-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="#projects"
                className="text-white hover:text-slate transition-colors"
                onClick={() => setToggle(false)} // Close the menu on click
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-white hover:text-slate transition-colors"
                onClick={() => setToggle(false)} // Close the menu on click
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-white px-4 py-2 bg-silver/10 hover:bg-silver/20 rounded-full transition-colors"
                onClick={() => setToggle(false)} // Close the menu on click
              >
                Contact
              </a>
            </motion.div>
          )}
        </nav>
      </header>
    </>
  );
};
