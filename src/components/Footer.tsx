import { Download } from "lucide-react";

export const Footer = () => (
    <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-pink-900 py-4 px-3 text-center text-sm text-white animate-colorShift">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Chagapuram Srivastav. All Rights Reserved.</p>
        
        <div className="flex gap-4">
          <a
            href="/api/resume"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white rounded-xl px-4 py-1.5 transition-all duration-300 text-xs"
          >
            <Download size={14} /> Resume
          </a>
          <a
            href="https://www.linkedin.com/in/srivastav3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white rounded-xl px-4 py-1.5 transition-all duration-300 text-xs"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/srivastav2006"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-emerald-500 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white rounded-xl px-4 py-1.5 transition-all duration-300 text-xs"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );