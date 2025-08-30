import { motion } from 'framer-motion';
import { Code, Wrench, Blocks, Shapes } from 'lucide-react';

const skills = [
  { name: 'HTML5', color: 'from-red-500 to-red-400' },
  { name: 'CSS3', color: 'from-rose-500 to-rose-400' },
  { name: 'JavaScript', color: 'from-orange-500 to-orange-400' },
  { name: 'TypeScript', color: 'from-amber-500 to-amber-400' },
  { name: 'React', color: 'from-yellow-500 to-yellow-400' },
  { name: 'Vite', color: 'from-lime-500 to-lime-400' },
  { name: 'Tailwind', color: 'from-emerald-500 to-emerald-400' },
  { name: 'Framer Motion', color: 'from-teal-500 to-teal-400' },
  { name: 'Three.js', color: 'from-cyan-500 to-cyan-400' },
  { name: 'Spline', color: 'from-sky-500 to-sky-400' },
  { name: 'Node.js', color: 'from-blue-500 to-blue-400' },
  { name: 'Vercel', color: 'from-indigo-500 to-indigo-400' },
];

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.1, type: 'spring', damping: 18, stiffness: 140 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-[0_2px_0_#000]">
              Skill Grid
            </h2>
            <p className="text-neutral-300 mt-2 max-w-2xl">
              Blocky, responsive tiles with hover power-ups and scroll-in animations.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-neutral-300">
            <Badge icon={<Code size={14} />} label="Clean Code" />
            <Badge icon={<Wrench size={14} />} label="DX First" />
            <Badge icon={<Blocks size={14} />} label="Composable" />
            <Badge icon={<Shapes size={14} />} label="Design Systems" />
          </div>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((s) => (
            <motion.li key={s.name} variants={item}>
              <SkillTile name={s.name} color={s.color} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function SkillTile({ name, color }) {
  return (
    <motion.div
      whileHover={{ y: -6, x: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="group relative"
    >
      <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-black" />
      <div className={`relative border-2 border-black bg-gradient-to-br ${color} text-black p-5 shadow-[0_0_0_0_#000]`}> 
        <div className="flex items-center justify-between">
          <span className="text-xs font-black tracking-widest">LVL UP</span>
          <span className="text-xs font-black">+5</span>
        </div>
        <div className="mt-4 text-2xl font-extrabold leading-none">{name}</div>
        <div className="mt-2 text-xs text-black/70">Hover to boost</div>
      </div>
    </motion.div>
  );
}

function Badge({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-none bg-neutral-900 border-2 border-black px-2 py-1 shadow-[3px_3px_0_0_#000] text-xs font-bold">
      {icon}
      <span>{label}</span>
    </div>
  );
}
