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
    style={{ ...style, transformOrigin: 'bottom center', filter: 'blur(1.5px)' }}
    viewBox="0 0 30 60"
    fill="none"
    variants={sproutVariant(delay, 1)}
    initial="hidden"
    animate="visible"
  >
    <path
      d="M15 60C15 60 8 35 3 20C0 10 5 0 15 5C25 0 30 10 27 20C22 35 15 60 15 60Z"
      fill="currentColor"
      opacity="0.25"
    />
  </motion.svg>
);

const GrassCluster = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div className={`absolute ${className}`} style={{ filter: 'blur(2px)' }}>
    <motion.svg
      style={{ transformOrigin: 'bottom center' }}
      viewBox="0 0 100 40"
      fill="none"
      className="w-full h-full text-forest"
      variants={sproutVariant(delay, 1.2)}
      initial="hidden"
      animate="visible"
    >
      <path d="M5 40C5 40 8 20 15 12C18 9 22 10 20 18C18 25 10 40 5 40Z" fill="currentColor" opacity="0.2" />
      <path d="M20 40C20 40 22 15 30 8C34 5 38 7 35 16C32 24 25 40 20 40Z" fill="currentColor" opacity="0.25" />
      <path d="M38 40C38 40 40 18 48 10C52 6 56 8 53 17C50 26 42 40 38 40Z" fill="currentColor" opacity="0.2" />
      <path d="M55 40C55 40 58 20 65 13C68 10 72 12 70 19C67 27 60 40 55 40Z" fill="currentColor" opacity="0.22" />
      <path d="M72 40C72 40 74 16 82 9C86 6 90 8 87 17C84 25 77 40 72 40Z" fill="currentColor" opacity="0.18" />
      <path d="M88 40C88 40 90 22 95 15C97 12 100 14 98 20C96 28 92 40 88 40Z" fill="currentColor" opacity="0.2" />
    </motion.svg>
  </div>
);

const AnimatedLeaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Left side - pushed further to edges */}
      <Branch className="absolute -left-10 top-20 w-24 h-36 text-forest animate-breeze-slow" delay={0.2} />
      <SmallLeaf className="absolute left-2 bottom-1/4 w-5 h-7 text-forest animate-breeze-fast" delay={1.4} />

      {/* Right side - pushed further to edges */}
      <Branch className="absolute -right-10 top-40 w-24 h-36 text-forest animate-breeze scale-x-[-1]" delay={0.5} />
      <SmallLeaf className="absolute right-2 bottom-1/3 w-5 h-7 text-forest animate-breeze" delay={1.6} />

      {/* Corners only - away from text */}
      <SmallLeaf className="absolute left-4 top-8 w-4 h-5 text-forest animate-breeze-fast rotate-45" delay={1.2} />
      <SmallLeaf className="absolute right-4 bottom-8 w-4 h-5 text-forest animate-breeze-slow -rotate-12" delay={1.8} />

      {/* Grass clusters around the edges - blurred shadow effect */}
      <GrassCluster className="bottom-0 left-0 w-28 h-10 animate-breeze" delay={0.6} />
      <GrassCluster className="bottom-0 right-0 w-32 h-10 animate-breeze-slow" delay={0.9} />
      <GrassCluster className="bottom-0 left-1/4 w-24 h-8 animate-breeze-fast" delay={1.1} />
      <GrassCluster className="bottom-0 right-1/4 w-20 h-8 animate-breeze" delay={1.3} />
      <GrassCluster className="top-0 left-8 w-20 h-8 rotate-180 animate-breeze-slow" delay={0.7} />
      <GrassCluster className="top-0 right-8 w-24 h-8 rotate-180 animate-breeze" delay={1.0} />

      {/* Grass blades scattered at edges */}
      <GrassBlade className="absolute bottom-0 left-[15%] w-6 h-12 text-forest animate-breeze" delay={1.5} />
      <GrassBlade className="absolute bottom-0 right-[15%] w-5 h-10 text-forest animate-breeze-slow" delay={1.7} />
      <GrassBlade className="absolute bottom-0 left-[45%] w-4 h-8 text-forest animate-breeze-fast" delay={1.9} />
      <GrassBlade className="absolute bottom-0 right-[40%] w-5 h-9 text-forest animate-breeze" delay={2.1} />
    </div>
  );
};

export default AnimatedLeaves;
