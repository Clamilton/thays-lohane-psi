import { motion } from "framer-motion";

const sproutVariant = (delay: number, duration: number = 1.5) => ({
  hidden: { scale: 0, opacity: 0, rotate: -20 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      delay,
      duration,
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  },
});

const Leaf = ({ className = "", style = {}, delay = 0 }: { className?: string; style?: React.CSSProperties; delay?: number }) => (
  <motion.svg
    className={className}
    style={{ ...style, transformOrigin: 'bottom center' }}
    viewBox="0 0 60 80"
    fill="none"
    variants={sproutVariant(delay)}
    initial="hidden"
    animate="visible"
  >
    <path
      d="M30 0C30 0 5 20 5 50C5 65 16 78 30 80C44 78 55 65 55 50C55 20 30 0 30 0Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path d="M30 10V70" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M30 25C22 30 15 38 12 48" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path d="M30 35C38 40 45 48 48 55" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path d="M30 45C24 48 18 54 16 60" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </motion.svg>
);

const SmallLeaf = ({ className = "", style = {}, delay = 0 }: { className?: string; style?: React.CSSProperties; delay?: number }) => (
  <motion.svg
    className={className}
    style={{ ...style, transformOrigin: 'bottom center' }}
    viewBox="0 0 40 50"
    fill="none"
    variants={sproutVariant(delay, 1.2)}
    initial="hidden"
    animate="visible"
  >
    <path
      d="M20 0C20 0 2 15 2 32C2 42 10 50 20 50C30 50 38 42 38 32C38 15 20 0 20 0Z"
      fill="currentColor"
      opacity="0.5"
    />
    <path d="M20 8V45" stroke="currentColor" strokeWidth="1" opacity="0.35" />
  </motion.svg>
);

const Branch = ({ className = "", style = {}, delay = 0 }: { className?: string; style?: React.CSSProperties; delay?: number }) => (
  <motion.svg
    className={className}
    style={{ ...style, transformOrigin: 'bottom center' }}
    viewBox="0 0 120 160"
    fill="none"
    variants={sproutVariant(delay, 2)}
    initial="hidden"
    animate="visible"
  >
    <path d="M60 160V40" stroke="currentColor" strokeWidth="2" opacity="0.3" />
    <path
      d="M60 40C60 40 40 10 25 5C15 2 5 8 5 18C5 30 20 40 35 42C45 43 55 40 60 40Z"
      fill="currentColor"
      opacity="0.5"
    />
    <path
      d="M60 70C60 70 80 45 95 42C105 40 115 48 112 58C108 70 90 75 75 72C65 70 60 68 60 70Z"
      fill="currentColor"
      opacity="0.45"
    />
    <path
      d="M60 100C60 100 42 78 28 76C18 75 10 82 12 92C15 103 32 108 45 104C54 101 60 98 60 100Z"
      fill="currentColor"
      opacity="0.4"
    />
    <path
      d="M60 125C60 125 75 108 88 107C96 107 102 114 99 122C95 132 80 135 70 130C63 127 60 125 60 125Z"
      fill="currentColor"
      opacity="0.35"
    />
  </motion.svg>
);

const GrassBlade = ({ className = "", style = {}, delay = 0 }: { className?: string; style?: React.CSSProperties; delay?: number }) => (
  <motion.svg
    className={className}
    style={{ ...style, transformOrigin: 'bottom center', filter: 'blur(1px)' }}
    viewBox="0 0 20 50"
    fill="none"
    variants={sproutVariant(delay, 1)}
    initial="hidden"
    animate="visible"
  >
    <path
      d="M10 50C10 50 7 30 5 18C4 10 8 2 10 4C12 2 16 10 15 18C13 30 10 50 10 50Z"
      fill="currentColor"
      opacity="0.15"
    />
  </motion.svg>
);

const GrassCluster = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div className={`absolute ${className}`} style={{ filter: 'blur(1.5px)' }}>
    <motion.svg
      style={{ transformOrigin: 'bottom center' }}
      viewBox="0 0 120 30"
      fill="none"
      className="w-full h-full text-forest"
      variants={sproutVariant(delay, 1.2)}
      initial="hidden"
      animate="visible"
    >
      <path d="M8 30Q9 18 12 10Q13 7 14 12Q15 20 13 30" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.12" />
      <path d="M25 30Q27 14 30 7Q31 4 32 9Q33 18 30 30" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.15" />
      <path d="M45 30Q46 16 50 9Q51 6 52 11Q53 20 50 30" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.1" />
      <path d="M62 30Q64 17 67 11Q68 8 69 13Q70 22 67 30" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.13" />
      <path d="M80 30Q81 15 85 8Q86 5 87 10Q88 19 85 30" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.11" />
      <path d="M98 30Q99 19 102 12Q103 9 104 14Q105 22 102 30" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.14" />
    </motion.svg>
  </div>
);

const AnimatedLeaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true" style={{ zIndex: 0 }}>
      {/* Left side - pushed further to edges */}
      <Branch className="absolute -left-10 top-20 w-24 h-36 text-forest animate-breeze-slow" delay={0.2} />
      <SmallLeaf className="absolute left-2 bottom-1/4 w-5 h-7 text-forest animate-breeze-fast" delay={1.4} />

      {/* Right side - pushed further to edges */}
      <Branch className="absolute -right-10 top-40 w-24 h-36 text-forest animate-breeze scale-x-[-1]" delay={0.5} />
      <SmallLeaf className="absolute right-2 bottom-1/3 w-5 h-7 text-forest animate-breeze" delay={1.6} />

      {/* Corners only - away from text */}
      <SmallLeaf className="absolute left-4 top-8 w-4 h-5 text-forest animate-breeze-fast rotate-45" delay={1.2} />
      <SmallLeaf className="absolute right-4 bottom-8 w-4 h-5 text-forest animate-breeze-slow -rotate-12" delay={1.8} />

      {/* Bottom grass clusters - continuous coverage */}
      <GrassCluster className="bottom-0 left-0 w-28 h-10 animate-breeze" delay={0.6} />
      <GrassCluster className="bottom-0 left-[10%] w-24 h-9 animate-breeze-fast" delay={0.8} />
      <GrassCluster className="bottom-0 left-[20%] w-26 h-10 animate-breeze-slow" delay={1.0} />
      <GrassCluster className="bottom-0 left-[32%] w-24 h-8 animate-breeze" delay={1.1} />
      <GrassCluster className="bottom-0 left-[44%] w-28 h-9 animate-breeze-fast" delay={0.7} />
      <GrassCluster className="bottom-0 left-[56%] w-24 h-10 animate-breeze-slow" delay={1.2} />
      <GrassCluster className="bottom-0 left-[68%] w-26 h-8 animate-breeze" delay={0.9} />
      <GrassCluster className="bottom-0 left-[80%] w-24 h-9 animate-breeze-fast" delay={1.3} />
      <GrassCluster className="bottom-0 right-0 w-32 h-10 animate-breeze-slow" delay={0.5} />

      {/* Top grass clusters - continuous coverage */}
      <GrassCluster className="top-0 left-0 w-24 h-8 rotate-180 animate-breeze-slow" delay={0.7} />
      <GrassCluster className="top-0 left-[12%] w-20 h-8 rotate-180 animate-breeze" delay={0.9} />
      <GrassCluster className="top-0 left-[24%] w-24 h-9 rotate-180 animate-breeze-fast" delay={1.1} />
      <GrassCluster className="top-0 left-[38%] w-22 h-8 rotate-180 animate-breeze-slow" delay={0.8} />
      <GrassCluster className="top-0 left-[50%] w-24 h-8 rotate-180 animate-breeze" delay={1.0} />
      <GrassCluster className="top-0 left-[64%] w-20 h-9 rotate-180 animate-breeze-fast" delay={1.2} />
      <GrassCluster className="top-0 left-[76%] w-24 h-8 rotate-180 animate-breeze" delay={0.6} />
      <GrassCluster className="top-0 right-0 w-28 h-8 rotate-180 animate-breeze-slow" delay={1.0} />

      {/* Grass blades scattered at edges for extra density */}
      <GrassBlade className="absolute bottom-0 left-[8%] w-5 h-10 text-forest animate-breeze" delay={1.5} />
      <GrassBlade className="absolute bottom-0 left-[18%] w-6 h-12 text-forest animate-breeze-slow" delay={1.6} />
      <GrassBlade className="absolute bottom-0 left-[30%] w-4 h-9 text-forest animate-breeze-fast" delay={1.7} />
      <GrassBlade className="absolute bottom-0 left-[42%] w-5 h-10 text-forest animate-breeze" delay={1.8} />
      <GrassBlade className="absolute bottom-0 left-[55%] w-4 h-8 text-forest animate-breeze-slow" delay={1.9} />
      <GrassBlade className="absolute bottom-0 left-[65%] w-6 h-11 text-forest animate-breeze-fast" delay={2.0} />
      <GrassBlade className="absolute bottom-0 left-[78%] w-5 h-9 text-forest animate-breeze" delay={2.1} />
      <GrassBlade className="absolute bottom-0 right-[8%] w-5 h-10 text-forest animate-breeze-slow" delay={1.4} />
    </div>
  );
};

export default AnimatedLeaves;
