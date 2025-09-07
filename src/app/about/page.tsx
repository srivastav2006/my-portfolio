"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-pink-900/20 animate-colorShift">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl w-full space-y-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Srivastav in a Nutshell
          </span>
        </h2>

        {/* Bio */}
        <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-400/30 p-6 md:p-8 animate-float">
          <p className="mb-4 text-lg text-muted-foreground">
            I&apos;m Chagapuram Srivastav, a backend-focused developer and competitive programmer, pursuing B.Tech in IT at IIIT Lucknow (CGPA 7.95). I enjoy building secure, scalable services and clean UIs.
          </p>
          <p className="mb-4 text-lg text-muted-foreground">
            <span className="font-medium">Tech</span>: Node.js, Express.js, MongoDB, JWT/OAuth, React, TypeScript, Tailwind, Firebase, Docker, GitHub Actions. Comfortable with C++, Python, Java, SQL.
          </p>
          <p className="text-lg text-muted-foreground">
            <span className="font-medium">What I&apos;m into</span>: well-tested REST APIs, authentication, indexing and pagination, and building responsive UIs that just work.
          </p>
        </div>

        {/* Education */}
        <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/30 p-6 md:p-8 animate-float">
          <h3 className="text-2xl font-semibold mb-3">Education</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <span className="font-medium">Indian Institute of Information Technology Lucknow</span> — B.Tech in IT (CGPA: 7.95), Aug 2023 - May 2027
            </li>
            <li>
              <span className="font-medium">Srichaitanya Junior College</span> — Intermediate, 97.9%, June 2021 - July 2023
            </li>
            <li>
              <span className="font-medium">Sri Chaitanya School</span> — Matriculation, 100%, June 2019 - May 2021
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-400/30 p-6 md:p-8 animate-float">
          <h3 className="text-2xl font-semibold mb-3">Achievements</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Global Rank 275 in CodeChef Starters 185 (Div 3)</li>
            <li>CodeChef 3★ (Peak 1719), Codeforces Pupil (Peak 1257)</li>
            <li>GSSoC 2024 contributor (Google Auth, responsive React pages)</li>
            <li>JEE Mains 2023: 98.4 percentile (IIIT Lucknow)</li>
            <li>500+ algorithmic problems across Codeforces, CodeChef, LeetCode, GfG</li>
          </ul>
        </div>
      </motion.section>
    </main>
  );
}
