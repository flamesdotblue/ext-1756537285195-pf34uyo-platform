import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-transparent to-black/80" />

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-start justify-center gap-6 px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-neutral-900/70 border-2 border-black shadow-[6px_6px_0_0_#000] p-2 px-3 pointer-events-auto">
            <span className="text-xs font-black tracking-wider text-red-400">PLAYER 1 • ONLINE</span>
          </div>

          <h1 className="pointer-events-auto text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95] drop-shadow-[0_2px_0_#000]">
            <span className="bg-red-500 text-black px-2 py-1 border-2 border-black shadow-[6px_6px_0_0_#000]">RETRO</span>{' '}
            BLOCKS DEV
          </h1>

          <p className="pointer-events-auto max-w-2xl text-neutral-200 text-base sm:text-lg">
            I build crisp, game-inspired interfaces with modern tech. Tap the grid. Feel the ripple. Then level up your product with clean code and playful polish.
          </p>

          <div className="pointer-events-auto flex flex-wrap items-center gap-3">
            <a href="#skills" className="inline-flex items-center gap-2 bg-red-500 text-black px-5 py-3 text-sm sm:text-base font-black border-2 border-black shadow-[6px_6px_0_0_#000] active:shadow-[0_0_0_0_#000] active:translate-x-[6px] active:translate-y-[6px]">
              View Skills
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-neutral-950/80 text-white px-5 py-3 text-sm sm:text-base font-bold border-2 border-black shadow-[6px_6px_0_0_#000] hover:text-red-400">
              Contact
            </a>
          </div>

          <div className="pointer-events-none mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-300">
            <Stat label="Code XP" value="8 yrs" />
            <Stat label="Deploys" value="> 300" />
            <Stat label="Latency" value="~20ms" />
            <Stat label="Fun Factor" value="S+" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-neutral-900/70 border-2 border-black shadow-[4px_4px_0_0_#000] px-3 py-2">
      <div className="text-[10px] uppercase tracking-wider text-neutral-400">{label}</div>
      <div className="font-extrabold text-white">{value}</div>
    </div>
  );
}
