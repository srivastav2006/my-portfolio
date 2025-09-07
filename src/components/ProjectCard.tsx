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
        className="bg-white/10 border border-white/50 backdrop-blur rounded-lg p-6 hover:shadow-2xl hover:border-blue-500/50 transition-shadow h-full mx-4 md:m-0"
      >
        <div className="h-1 w-10 bg-gradient-to-r from-blue-600 to-blue-400 mb-4 rounded"></div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white/80 mb-4">{desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((techName) => (
            <span
              key={techName}
              className="bg-blue-600/20 text-blue-400 text-xs font-medium px-2 py-1 rounded"
            >
              {techName}
            </span>
          ))}
        </div>

        <MotionLink
          whileTap={{ scale: 0.9 }}
          href="/projects"
          className="inline-block bg-blue-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-blue-600"
        >
          View Projects
        </MotionLink>
      </div>
    </motion.div>
  );
};

export default ProjectCard;