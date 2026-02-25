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

const AnimatedLeaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Left side */}
      <Branch className="absolute -left-6 top-20 w-28 h-40 text-forest animate-breeze-slow" delay={0.2} />
      <Leaf className="absolute left-8 top-1/3 w-8 h-10 text-forest animate-breeze" delay={0.8} />
      <SmallLeaf className="absolute left-16 bottom-1/4 w-6 h-8 text-forest animate-breeze-fast" delay={1.4} />

      {/* Right side */}
      <Branch className="absolute -right-6 top-40 w-28 h-40 text-forest animate-breeze scale-x-[-1]" delay={0.5} />
      <Leaf className="absolute right-12 top-1/4 w-10 h-12 text-forest animate-breeze-slow" delay={1.0} />
      <SmallLeaf className="absolute right-20 bottom-1/3 w-7 h-9 text-forest animate-breeze" delay={1.6} />

      {/* Scattered */}
      <SmallLeaf className="absolute left-1/4 top-16 w-5 h-6 text-forest animate-breeze-fast rotate-45" delay={1.2} />
      <Leaf className="absolute right-1/4 bottom-20 w-7 h-9 text-forest animate-breeze-slow -rotate-12" delay={1.8} />
      <SmallLeaf className="absolute left-1/3 bottom-16 w-5 h-7 text-forest animate-breeze rotate-[30deg]" delay={2.0} />
    </div>
  );
};

export default AnimatedLeaves;
