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
    <path d="M30 0C30 0 5 20 5 50C5 65 16 78 30 80C44 78 55 65 55 50C55 20 30 0 30 0Z" fill="currentColor" opacity="0.6" />
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
    <path d="M20 0C20 0 2 15 2 32C2 42 10 50 20 50C30 50 38 42 38 32C38 15 20 0 20 0Z" fill="currentColor" opacity="0.5" />
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
    <path d="M60 40C60 40 40 10 25 5C15 2 5 8 5 18C5 30 20 40 35 42C45 43 55 40 60 40Z" fill="currentColor" opacity="0.5" />
    <path d="M60 70C60 70 80 45 95 42C105 40 115 48 112 58C108 70 90 75 75 72C65 70 60 68 60 70Z" fill="currentColor" opacity="0.45" />
    <path d="M60 100C60 100 42 78 28 76C18 75 10 82 12 92C15 103 32 108 45 104C54 101 60 98 60 100Z" fill="currentColor" opacity="0.4" />
    <path d="M60 125C60 125 75 108 88 107C96 107 102 114 99 122C95 132 80 135 70 130C63 127 60 125 60 125Z" fill="currentColor" opacity="0.35" />
  </motion.svg>
);

const GrassIcon = ({ className = "", style = {}, delay = 0 }: { className?: string; style?: React.CSSProperties; delay?: number }) => (
  <motion.svg
    className={className}
    style={{ ...style, transformOrigin: 'bottom center', filter: 'blur(1px)' }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={sproutVariant(delay, 1.2)}
    initial="hidden"
    animate="visible"
  >
    <path
      d="M5,2c.82.82,5.61,2.88,6,18,0,.65,0,1.31,0,2h3C14,2.12,7,2,5,2ZM19,5a7,7,0,0,0-5.56,3,16.3,16.3,0,0,1,1.12,4C15.74,6.79,18.39,5.61,19,5ZM2,9c.77.77,4.72,3.09,5,12,0,.32,0,.66,0,1h3C10,13.52,7.5,9.22,2,9ZM22,9c-2,0-7,2.25-7,13h3C18,13,21.12,9.88,22,9Z"
      fill="currentColor"
      opacity="0.2"
    />
  </motion.svg>
);

const GrassStrip = ({ position, delay = 0 }: { position: 'bottom' | 'top'; delay?: number }) => {
  const isTop = position === 'top';
  // Use many small icons tiled across with negative spacing to guarantee no gaps
  const items = 50;

  return (
    <div
      className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 w-full overflow-hidden`}
      style={{
        height: '30px',
        transform: isTop ? 'rotate(180deg)' : undefined,
        transformOrigin: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '110%',
          marginLeft: '-5%',
          height: '100%',
        }}
      >
        {Array.from({ length: items }).map((_, i) => {
          const animations = ['animate-breeze', 'animate-breeze-slow', 'animate-breeze-fast'];
          const anim = animations[i % 3];
          return (
            <motion.svg
              key={i}
              className={`text-forest ${anim}`}
              style={{
                flex: '0 0 auto',
                width: `${110 / items}%`,
                height: '100%',
                marginLeft: i === 0 ? 0 : '-0.8%',
                transformOrigin: 'bottom center',
                filter: 'blur(1px)',
              }}
              viewBox="0 0 24 24"
              fill="none"
              variants={sproutVariant(delay + i * 0.03, 1.2)}
              initial="hidden"
              animate="visible"
            >
              <path
                d="M5,2c.82.82,5.61,2.88,6,18,0,.65,0,1.31,0,2h3C14,2.12,7,2,5,2ZM19,5a7,7,0,0,0-5.56,3,16.3,16.3,0,0,1,1.12,4C15.74,6.79,18.39,5.61,19,5ZM2,9c.77.77,4.72,3.09,5,12,0,.32,0,.66,0,1h3C10,13.52,7.5,9.22,2,9ZM22,9c-2,0-7,2.25-7,13h3C18,13,21.12,9.88,22,9Z"
                fill="currentColor"
                opacity="0.2"
              />
            </motion.svg>
          );
        })}
      </div>
    </div>
  );
};

const AnimatedLeaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true" style={{ zIndex: 0 }}>
      {/* Left side */}
      <Branch className="absolute -left-10 top-20 w-24 h-36 text-forest animate-breeze-slow" delay={0.2} />
      <SmallLeaf className="absolute left-2 bottom-1/4 w-5 h-7 text-forest animate-breeze-fast" delay={1.4} />

      {/* Right side */}
      <Branch className="absolute -right-10 top-40 w-24 h-36 text-forest animate-breeze scale-x-[-1]" delay={0.5} />
      <SmallLeaf className="absolute right-2 bottom-1/3 w-5 h-7 text-forest animate-breeze" delay={1.6} />

      {/* Corners */}
      <SmallLeaf className="absolute left-4 top-8 w-4 h-5 text-forest animate-breeze-fast rotate-45" delay={1.2} />
      <SmallLeaf className="absolute right-4 bottom-8 w-4 h-5 text-forest animate-breeze-slow -rotate-12" delay={1.8} />

      {/* Continuous grass strips */}
      <GrassStrip position="bottom" delay={0.5} />
      <GrassStrip position="top" delay={0.7} />
    </div>
  );
};

export default AnimatedLeaves;
