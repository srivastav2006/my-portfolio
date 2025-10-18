"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MindfulMate – AI Mental Health Companion",
    description:
      "AI-powered chatbot using GPT-4o and LangChain RAG with FastAPI backend, MongoDB, and Weaviate vector DB. Features journaling, meditation, mood tracking with 1,000+ interactions and 90% sentiment accuracy.",
    link: "https://github.com/srivastav2006/MindfulMate",
    tech: ["React", "TypeScript", "FastAPI", "MongoDB", "LangChain", "GPT-4o", "Weaviate"],
  },
  {
    title: "ArticleHub – Backend APIs",
    description:
      "JWT-authenticated article and comments service. 10+ REST endpoints handling 5,000+ articles and 20,000+ comments with role-based access, indexing, pagination, and 30% improved query performance.",
    link: "https://github.com/srivastav2006/ArticleHub",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "BCrypt", "MVC"],
  },
  {
    title: "Dockerized Packet Sniffer + Basic IDS",
    description:
      "Distributed intrusion detection system using Docker and Scapy with containerized sniffer nodes and centralized IDS collector for scalable network monitoring and security analysis.",
    link: "https://github.com/srivastav2006/Dockerized-Packet-Sniffer",
    tech: ["Docker", "Python", "Scapy", "Docker Compose", "Linux"],
  },
  {
    title: "React Chat App",
    description:
      "Firebase Google OAuth, realtime messaging with Firestore listeners, presence indicators, and cloud storage integration.",
    link: "https://github.com/srivastav2006/react-chat-app",
    tech: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "SPASS – SecurePass Extension",
    description:
      "Chrome extension with AES-based encryption, cross-device sync, and autofill for 50+ sites. Lightweight UI and <1s startup.",
    link: "https://github.com/srivastav2006/SPASS",
    tech: ["JavaScript", "Chrome APIs", "AES Encryption"],
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
        className="max-w-7xl w-full"
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
              className="group rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 md:p-7 hover:border-blue-400/40 hover:bg-white/10 transition shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-3">{project.title}</h3>
              <p className="mt-2 text-neutral-300 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techName) => (
                  <span
                    key={techName}
                    className="bg-blue-600/20 text-blue-300 text-xs font-medium px-2 py-1 rounded"
                  >
                    {techName}
                  </span>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 text-blue-400 group-hover:underline">
                View on GitHub →
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
