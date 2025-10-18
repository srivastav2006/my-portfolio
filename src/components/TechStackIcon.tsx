import Image from "next/image";
import { motion } from "framer-motion";

type TechStackIconProps = {
  src: string;
  name: string;
};

const TechStackIcon = ({ src, name }: TechStackIconProps) => (
  <motion.div
    whileHover={{ y: 2, scale: 0.9 }}
    className="flex flex-col items-center text-center"
    role="img"
    aria-label={`${name} technology icon`}
  >
    <Image
      src={src}
      alt={`${name} logo`}
      width={64}
      height={64}
      className="w-16 h-16 mb-4"
      loading="lazy"
    />
    <span className="font-semibold text-lg">{name}</span>
  </motion.div>
);

export default TechStackIcon;
