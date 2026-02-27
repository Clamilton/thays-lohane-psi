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

const GRASS_PATH = "M541.496,170.872c24.279,93.636-2.229,195.572-2.602,197.141c0.067-0.497,0.66-7.822,0.66-7.822c7.784-62.902-11.188-98.379-11.188-98.379c12.805,54.42-10.824,85.45-24.681,98.379c-5.192,4.839-9.056,8.97-9.056,8.97c-0.401,0-0.755-6.531-1.052-8.97c-9.313-76.806,34.779-174.64,34.779-174.64c-28.21,25.073-45.298,106.669-52.814,151.565c8.961-75.659-5.852-110.504-5.852-110.504c5.852,63.275-8.846,115.209-15.014,133.579c-1.549,4.628-2.582,8.97-2.582,8.97c-0.717,0-1.357-6.34-1.97-8.97c-10.595-45.737-5.364-158.518-5.364-158.518c-10.519,26.307-16.85,80.363-20.234,119.599c0.02-66.517-20.837-106.402-20.837-106.402c22.004,85.068-7.334,140.798-7.334,140.798c5.861-76.261-14.669-95.328-14.669-95.328c15.166,31.565-19.067,93.875-19.067,93.875c-13.196-82.132,19.067-198.011,19.067-198.011c-19.536,27.53-31.002,96.438-37.007,146.536c-0.641-63.639-27.215-87.87-27.215-87.87c26.708,64.537-0.307,143.734-0.307,143.734c2.937-76.262-16.141-112.943-16.141-112.943c2.399,33.67-24.739,93.885-34.607,114.521c-2.171,4.523-3.529,8.97-3.529,8.97c-0.564,0-1.042-6.436-1.482-8.97c-9.859-56.648,10.28-177.585,10.28-177.585c-23.084,17.958-37.198,145.675-40.383,177.595c-0.459,4.6-0.688,8.97-0.688,8.97c-0.134,0-0.287-6.541-0.43-8.97c-3.041-49.581-2.706-104.595-2.706-104.595c-9.706,10.653-17.356,113.555-17.404,113.555l0.258-8.97c6.311-128.128-16.39-170.241-16.39-170.241c11.111,62.95-8.951,145.637-15.568,170.241c-1.243,4.638-2.027,8.97-2.027,8.97c-1.454,0-2.697-6.302-3.787-8.97c-15.405-37.771,3.787-124.781,3.787-124.781c-17.71,22.759-23.763,62.94-25.733,93.014c1.626-154.119-10.939-204.484-10.939-204.484c9.037,55.577-10.375,202.151-15.118,236.251c-0.277,2.009-0.249,1.798,0,0h-0.382c3.509-51.886-13.837-145.312-13.837-145.312c0,40.727-9.352,120.918-12.307,145.312c-0.555,4.59-0.889,8.97-0.889,8.97c-1.501-2.993-2.228-6.502-3.223-8.97c-22.348-66.393,3.223-177.585,3.223-177.585C63.075,228.018,59.393,332,59.039,360.181c-0.029,2.171-0.038,2.764,0,0c0,0,1.74,10.787-3.031,0c-16.361-35.353,3.93-145.312,3.93-145.312c-20.101,21.363-28.276,118.068-30.083,145.312c-0.296,4.542-0.669,8.97-0.669,8.97c-0.498,0-1.042-6.55-1.454-8.97c-15.96-93.588,31.336-197.246,31.336-197.246C12.145,192.273,0,369.141,0,369.141v80.68h573.75v-89.64l0,0C573.836,196.012,541.496,170.872,541.496,170.872z";

const GrassStrip = ({ position, delay = 0 }: { position: 'bottom' | 'top'; delay?: number }) => {
  const isTop = position === 'top';

  return (
    <div
      className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 w-full`}
      style={{
        height: '45px',
        transform: isTop ? 'rotate(180deg)' : undefined,
        transformOrigin: 'center',
        overflow: 'hidden',
      }}
    >
      <motion.svg
        className="text-forest w-full h-full"
        viewBox="0 0 573.75 449.821"
        preserveAspectRatio="none"
        variants={sproutVariant(delay, 1.5)}
        initial="hidden"
        animate="visible"
        style={{ filter: 'blur(0.3px)' }}
      >
        <path d={GRASS_PATH} fill="currentColor" opacity="0.35" />
      </motion.svg>
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
