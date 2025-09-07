import Image from "next/image";
import { motion } from "framer-motion";

type TechStackIconProps = {
  src: string;
  alt: string;
  name: string;
};

const TechStackIcon = ({ src, alt, name }: TechStackIconProps) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="flex flex-col items-center text-center group"
  >
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={64}
        height={64}
        className="w-16 h-16 mb-4 filter group-hover:drop-shadow-lg transition-all duration-300"
      />
      <div className="absolute inset-0 w-16 h-16 mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <span className="font-semibold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">{name}</span>
  </motion.div>
);

export default TechStackIcon;
