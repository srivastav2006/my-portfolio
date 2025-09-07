import { motion } from "framer-motion";

const MotionLink = motion.a;

type ProjectCardProps = {
  title: string;
  desc: string;
  tech: string[];
};
const ProjectCard = ({ title, desc, tech = [] }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-purple-400/30 backdrop-blur rounded-lg p-6 hover:shadow-2xl hover:border-purple-400/60 transition-all duration-300 h-full mx-4 md:m-0 animate-float"
      >
        <div className="h-1 w-10 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mb-4 rounded animate-pulse"></div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white/80 mb-4">{desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((techName) => (
            <span
              key={techName}
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-400/30 text-xs font-medium px-2 py-1 rounded"
            >
              {techName}
            </span>
          ))}
        </div>

        <MotionLink
          whileTap={{ scale: 0.9 }}
          href="/projects"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:scale-105"
        >
          View Projects
        </MotionLink>
      </div>
    </motion.div>
  );
};

export default ProjectCard;