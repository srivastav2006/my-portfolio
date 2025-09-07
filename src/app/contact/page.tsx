"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-pink-900/20 animate-colorShift">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-purple-400/30 p-8 md:p-10 animate-float">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Contact Me</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Got a question, opportunity, or want to collaborate? Feel free to
            reach out!
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Email</h3>
              <p className="text-lg text-muted-foreground">
                You can reach me at{" "}
                <a
                  href="mailto:srivastav3306@gmail.com"
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium hover:underline"
                >
                  srivastav3306@gmail.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="https://www.linkedin.com/in/srivastav3/"
                  className="px-4 py-2 rounded-xl border border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/srivastav2006"
                  className="px-4 py-2 rounded-xl border border-emerald-500 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="/api/resume"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 text-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
