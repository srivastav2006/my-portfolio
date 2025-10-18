import { Download } from "lucide-react";

export const Footer = () => (
    <footer className="bg-gradient-to-r from-black via-zinc-900 to-blue-900 py-4 px-3 text-center text-sm text-white" role="contentinfo">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Chagapuram Srivastav. All Rights Reserved.</p>
        
        <div className="flex gap-4">
          <a
            href="/api/resume"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-xl px-4 py-1.5 transition text-xs"
          >
            <Download size={14} /> Resume
          </a>
          <a
            href="https://www.linkedin.com/in/srivastav3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-xl px-4 py-1.5 transition text-xs"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/srivastav2006"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-xl px-4 py-1.5 transition text-xs"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );