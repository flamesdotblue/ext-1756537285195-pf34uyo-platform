import { Github, Linkedin, Mail, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t-4 border-black bg-neutral-900 text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-500 text-black px-2 py-1 font-black tracking-wider text-sm border-2 border-black shadow-[4px_4px_0_0_#000]">
                DEV
              </div>
              <div className="font-extrabold">RetroBlocks</div>
            </div>
            <p className="max-w-lg text-neutral-300">
              A retro, blocky, gamified portfolio experience. Built with React, Tailwind, Framer Motion, and an interactive Spline grid for tactile delight.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-neutral-800 border-2 border-black px-3 py-2 shadow-[3px_3px_0_0_#000] text-xs font-bold">
              <Star size={14} className="text-yellow-400" />
              Open to freelance and product collabs
            </div>
          </div>

          <div>
            <h3 className="font-black mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-red-400" href="#home">Home</a></li>
              <li><a className="hover:text-red-400" href="#skills">Skills</a></li>
              <li><a className="hover:text-red-400" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black mb-3">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> you@retroblocks.dev</li>
              <li>
                <div className="flex items-center gap-3">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-neutral-800 border-2 border-black px-3 py-2 shadow-[3px_3px_0_0_#000] hover:text-red-400">
                    <Github size={16} /> GitHub
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-neutral-800 border-2 border-black px-3 py-2 shadow-[3px_3px_0_0_#000] hover:text-red-400">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} RetroBlocks • Built with ❤️ and a dash of 8-bit vibes</p>
          <p>Deployed on Vercel • Interactive cover by Spline</p>
        </div>
      </div>
    </footer>
  );
}
