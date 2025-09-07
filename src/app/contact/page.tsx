"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Me</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Got a question, opportunity, or want to collaborate? Feel free to
            reach out!
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Email</h3>
              <p className="text-lg text-muted-foreground">
                You can reach me at{" "}
                <a
                  href="mailto:srivastav3306@gmail.com"
                  className="text-blue-400 font-medium hover:underline"
                >
                  srivastav3306@gmail.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-400">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="https://www.linkedin.com/in/srivastav3/"
                  className="px-4 py-2 rounded-xl border border-blue-500 hover:bg-blue-500 hover:text-white transition text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/srivastav2006"
                  className="px-4 py-2 rounded-xl border border-blue-500 hover:bg-blue-500 hover:text-white transition text-sm"
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
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition text-sm"
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
