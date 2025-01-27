import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-silver/30 origin-[0%] z-50"
        style={{ scaleX }}
      />
      <header className="fixed top-0 left-0 right-0 z-40">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-xl font-bold hover:text-slate transition-colors"
            >
              Portfolio
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#projects"
                className="hover:text-slate transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-slate transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-silver/10 hover:bg-silver/20 rounded-full transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};