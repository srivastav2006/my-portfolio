"use client";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import ProjectCard from "@/components/ProjectCard";
import TechStackIcon from "@/components/TechStackIcon";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const MotionLink = motion(Link);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="fixed inset-0 -z-10 w-full h-full top-0 left-0">
        <ParticlesBackground />
      </div>
      {/* hero section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center w-full min-h-screen py-50 bg-gradient-to-r from-black/10 via-zinc-900 to-blue-900/60"
      >
        <div className="mx-auto max-w-5xl px-4">
          <motion.h1
            className="text-5xl lg:text-6xl sm:text-5xl font-bold tracking-tight"
            animate={{
              y: [0, -9, 0],
              scale: [1, 1.05, 1],
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            }}
          >
            Chagapuram Srivastav <br />
            <span className="bg-gradient-to-r from-blue-500 to-zinc-500 bg-clip-text text-transparent">
              Backend Developer • React • Competitive Programmer
            </span>
          </motion.h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            B.Tech IT @ IIIT Lucknow (CGPA 7.95). I build secure, well-tested backends with Node.js, Express, MongoDB (JWT/OAuth, pagination, indexing) and ship responsive UIs with React & Tailwind. Projects: ArticleHub (backend APIs), React Chat App (realtime), SPASS (Chrome extension).
          </p>

          <p className="mt-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-zinc-500 bg-clip-text text-transparent">
            Code. Optimize. Ship.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <MotionLink
              href="/projects"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-xl rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden"
            >
              <span className="relative z-10">Explore My Work</span>
              <span className="absolute inset-0 rounded-2xl border-[3px] border-transparent pointer-events-none animate-borderMagic"></span>
            </MotionLink>
          </div>
        </div>
      </motion.div>

      {/* about me section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-16 w-full px-4"
      >
        <div className="mx-auto max-w-5xl rounded-2xl backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-400/30 p-8 md:p-10 animate-float">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 text-center">
            Backend-focused developer and competitive programmer. Skilled in Node.js, Express.js, MongoDB, JWT/OAuth, React, TypeScript, Firebase, and Docker. CodeChef 3★ (Peak 1719), Codeforces Pupil (Peak 1257), GSSoC 2024 contributor. I like building reliable REST APIs, auth flows, and simple, fast UIs.
          </p>

          <div className="flex justify-center">
            <MotionLink
              whileTap={{ scale: 0.9 }}
              href="/about"
              className="inline-block bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold text-sm rounded-xl px-5 py-2 transition"
            >
              More About Me
            </MotionLink>
          </div>
        </div>
      </motion.div>

      {/* projects preview section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-16 w-full px-4"
      >
        <div className="mx-auto max-w-7xl rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-white/70  to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ProjectCard
              title="ArticleHub"
              desc="Backend service with JWT auth, role-based access, nested comments with indexing, and REST APIs."
              tech={["Node.js", "Express.js", "MongoDB", "JWT", "BCrypt"]}
            />
            <ProjectCard
              title="React Chat App"
              desc="Google OAuth, realtime Firestore messaging, presence, and cloud storage integration."
              tech={["React", "Firebase", "Tailwind CSS"]}
            />
            <ProjectCard
              title="SPASS - SecurePass"
              desc="AES encryption, cross-device sync, and autofill for 50+ websites with fast startup."
              tech={["JavaScript", "Chrome APIs", "HTML5", "CSS3"]}
            />
          </div>
        </div>
      </motion.div>

      {/* tech stack section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-16 mb-20 w-full px-4"
      >
        <div className="mx-auto max-w-5xl rounded-2xl backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-400/30 p-8 md:p-10 animate-float">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            <TechStackIcon src="/tech-icons/javascript.svg" name="JavaScript" alt="javascript" />
            <TechStackIcon src="/tech-icons/react.svg" name="React" alt="react" />
            <TechStackIcon src="/tech-icons/nextjs.svg" name="Next.js" alt="next.js" />
            <TechStackIcon src="/tech-icons/nodejs.svg" name="Node.js" alt="nodejs" />
            <TechStackIcon src="/tech-icons/python.svg" name="Python" alt="python" />
            <TechStackIcon src="/tech-icons/tailwindcss.svg" name="Tailwind CSS" alt="tailwind" />
            <TechStackIcon src="/tech-icons/git.svg" name="Git" alt="git" />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
