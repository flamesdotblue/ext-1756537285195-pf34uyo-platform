import { Rocket, Github, Linkedin } from 'lucide-react';

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-red-500 text-black px-2 py-1 font-black tracking-wider text-sm shadow-[4px_4px_0_0_#000] border-2 border-black">
            DEV
          </div>
          <div className="font-extrabold tracking-tight text-white group-hover:text-red-400 transition-colors">
            RetroBlocks
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#skills" className="text-sm hover:text-red-400 transition-colors">Skills</a>
          <a href="#contact" className="text-sm hover:text-red-400 transition-colors">Contact</a>
          <div className="w-px h-6 bg-neutral-700" />
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#skills" className="inline-flex items-center gap-2 bg-red-500 text-black px-4 py-2 font-bold border-2 border-black shadow-[4px_4px_0_0_#000] active:shadow-[0_0_0_0_#000] active:translate-x-[4px] active:translate-y-[4px]">
            <Rocket size={18} />
            Start
          </a>
        </nav>
      </div>
    </header>
  );
}
