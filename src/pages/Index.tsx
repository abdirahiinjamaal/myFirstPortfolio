import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-charcoal to-charcoal/95 text-silver min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Column */}
          <div className="rounded-2xl overflow-hidden bg-silver/10 aspect-square">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Column */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="text-lg text-slate leading-relaxed">
              I'm a passionate developer focused on creating beautiful and functional web applications. 
              With expertise in modern technologies, I bring ideas to life through clean code and 
              intuitive design.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-silver/10 hover:bg-silver/20 rounded-full transition-colors">
                View Projects
              </button>
              <button className="px-6 py-3 bg-silver/10 hover:bg-silver/20 rounded-full transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;