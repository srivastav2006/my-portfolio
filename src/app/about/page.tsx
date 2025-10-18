"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center">
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
            I&apos;m Chagapuram Srivastav, a backend-focused developer and competitive programmer, pursuing B.Tech in IT at IIIT Lucknow (CGPA 8.35). I specialize in building secure, scalable backend services and AI-powered applications.
          </p>
          <p className="mb-4 text-lg text-muted-foreground">
            <span className="font-medium">Tech Stack</span>: Node.js, Express.js, FastAPI, MongoDB, Redis, MySQL, React (TypeScript), Tailwind CSS, Docker, AWS, Azure, CI/CD (GitHub Actions, Jenkins). Proficient in C++, Python, Java, and Bash scripting.
          </p>
          <p className="text-lg text-muted-foreground">
            <span className="font-medium">What I&apos;m into</span>: Building production-ready REST APIs, implementing AI/ML solutions with LangChain and GPT-4o, distributed systems, performance optimization, and competitive programming.
          </p>
        </div>

        {/* Education */}
        <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/30 p-6 md:p-8 animate-float">
          <h3 className="text-2xl font-semibold mb-3">Education</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <span className="font-medium">Indian Institute of Information Technology Lucknow</span> — B.Tech in IT (CGPA: 8.35/10), Aug 2023 - May 2027
            </li>
            <li className="ml-4 mt-2">
              <span className="font-medium">Relevant Coursework:</span> Data Structures & Algorithms, OOP, Operating Systems, DBMS, Computer Networks, Distributed Systems, Software Engineering, Web Services, RESTful APIs
            </li>
            <li className="mt-3">
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
            <li>Global Rank 48 in CodeChef Starters 204 (Div 3) and Rank 281 in Starters 196 (Div 3)</li>
            <li>CodeChef 4★ Coder, Codeforces Specialist</li>
            <li>GSSoC 2024 contributor (Google OAuth, responsive React components, code reviews)</li>
            <li>JEE Mains 2023: Top 1.6% of 1.2M+ candidates (IIIT Lucknow admission)</li>
            <li>600+ algorithmic problems solved across Codeforces, CodeChef, LeetCode, GeeksforGeeks</li>
            <li>Member, Axios (Web Development Club) – IIIT Lucknow</li>
          </ul>
        </div>
      </motion.section>
    </main>
  );
}
