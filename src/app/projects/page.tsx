"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ArticleHub – Backend APIs",
    description:
      "JWT-authenticated article and comments service. 10+ REST endpoints, role-based access, nested comments with indexes, pagination and filtering.",
    link: "https://github.com/srivastav2006/ArticleHub",
  },
  {
    title: "React Chat App",
    description:
      "Firebase Google OAuth, realtime messaging with Firestore listeners, presence indicators, and cloud storage integration.",
    link: "https://github.com/srivastav2006/react-chat-app",
  },
  {
    title: "SPASS – SecurePass Extension",
    description:
      "Chrome extension with AES-based encryption, cross-device sync, and autofill for 50+ sites. Lightweight UI and <1s startup.",
    link: "https://github.com/srivastav2006/SPASS",
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center text-neutral-100 bg-gradient-to-br from-black/70 via-zinc-800 to-blue-700">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="max-w-6xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mt-2 mb-10 text-center"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 md:p-7 hover:border-blue-400/40 hover:bg-white/10 transition shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
              <p className="mt-3 text-neutral-300 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-blue-400 group-hover:underline">
                View on GitHub →
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
