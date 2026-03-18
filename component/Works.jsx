// export default function Positions() {
//   const roles = [
//     {
//       title: "Founder & CEO",
//       company: "Loanwalle.com",
//       desc: "Leading a fintech platform focused on simplifying loan accessibility and financial decision-making.",
//     },
//     {
//       title: "Investor",
//       company: "Multiple Ventures",
//       desc: "Actively investing in startups across finance sectors.",
//     },
//     {
//       title: "Author",  
//       company: "Published Works",
//       desc: "Authored books focused on real estate, finance, and wealth-building strategies.",
//     },
//     {
//       title: "Business Strategist",
//       company: "Independent",
//       desc: "Advising businesses on growth, scalability, and long-term strategic positioning.",
//     },
//   ];

//   return (
//     <section
//       id="work"
//       className="px-4 sm:px-6 md:px-20 py-20 bg-mist-600"
//     >

//       {/* HEADING */}
//       <div className="text-center mb-14">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-[0.2em] text-gray-800">
//           POSITIONS
//         </h2>
//         <div className="w-12 md:w-16 h-px bg-gray-400 mx-auto mt-4"></div>
//       </div>

//       {/* GRID */}
//       <div className="grid gap-6 sm:gap-8 md:grid-cols-2">

//         {roles.map((role, index) => (
//           <div
//             key={index}
//             className="
//               bg-white/10 backdrop-blur-xl border border-white/20
//               rounded-2xl shadow-xl
//               p-6 md:p-8
//               hover:scale-[1.02] transition duration-300
//             "
//           >

//             <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
//               {role.title}
//             </h3>

//             <p className="text-gray-300 mt-1 text-sm sm:text-base">
//               {role.company}
//             </p>

//             <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
//               {role.desc}
//             </p>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }

"use client"; // Add this at the top for Next.js App Router

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Positions() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2 
  });

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const roles = [
    {
      title: "Founder & CEO",
      company: "Loanwalle.com",
      desc: "Leading a fintech platform focused on simplifying loan accessibility and financial decision-making.",
      icon: "🚀",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Investor",
      company: "Multiple Ventures",
      desc: "Actively investing in startups across finance sectors.",
      icon: "💎",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Author",
      company: "Published Works",
      desc: "Authored books focused on real estate, finance, and wealth-building strategies.",
      icon: "📚",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Business Strategist",
      company: "Independent",
      desc: "Advising businesses on growth, scalability, and long-term strategic positioning.",
      icon: "📊",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: mounted && !isMobile ? 0.15 : 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      y: mounted && !isMobile ? 30 : 20, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: mounted && !isMobile ? 100 : 80,
        damping: mounted && !isMobile ? 12 : 15,
      },
    },
  };

  const headingVariants = {
    hidden: { 
      scale: mounted && !isMobile ? 0.9 : 0.95, 
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: mounted && !isMobile ? 200 : 150,
        damping: 20,
      },
    },
  };

  // Responsive animation settings
  const shouldAnimateBackground = mounted && !isMobile;
  const shouldAnimateParticles = mounted && !isMobile;

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 bg-gradient-to-br bg-mist-500 overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated Background Elements - Hidden on mobile for performance */}
      {shouldAnimateBackground && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-blue-100/30 rounded-full blur-2xl lg:blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-purple-100/30 rounded-full blur-2xl lg:blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </>
      )}

      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-14"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-gray-800 px-2">
            POSITIONS
          </h2>
          <motion.div
            className="h-px bg-gray-400 mx-auto mt-3 sm:mt-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: isMobile ? "3rem" : "4rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          />
        </motion.div>

        {/* GRID - Responsive grid layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={!isMobile ? { 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              } : {}}
              whileTap={isMobile ? { scale: 0.98 } : {}}
              className="group relative h-full"
            >
              {/* Glow Effect - Only on desktop */}
              {!isMobile && (
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${role.gradient} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
              
              {/* Main Card */}
              <div
                className={`
                  relative
                  bg-mist-400 backdrop-blur-md sm:backdrop-blur-xl 
                  border border-gray-200/50
                  rounded-xl sm:rounded-2xl
                  shadow-amber-50
                  shadow-lg sm:shadow-xl
                  p-4 sm:p-5 md:p-6 lg:p-8
                  h-full 
                  transition-all duration-300
                  overflow-hidden
                  ${isMobile ? 'active:bg-gray-50' : ''}
                `}
              >
                {/* Icon and Title Row */}
                <div className="flex items-start justify-between mb-2 sm:mb-3 lg:mb-4">
                  <motion.span
                    className="text-2xl sm:text-3xl lg:text-4xl"
                    animate={!isMobile ? {
                      rotate: [0, 8, -8, 0],
                    } : {}}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {role.icon}
                  </motion.span>
                  
                  {/* Shimmer Effect - Only on desktop */}
                  {!isMobile && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 1 }}
                    />
                  )}

                  {/* Mobile gradient dot */}
                  {isMobile && (
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.gradient}`} />
                  )}
                </div>

                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 pr-2">
                  {role.title}
                </h3>

                <motion.p
                  className="text-gray-600 mt-0.5 sm:mt-1 text-xs sm:text-sm lg:text-base font-medium"
                  whileHover={!isMobile ? { x: 3 } : {}}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {role.company}
                </motion.p>

                <motion.p
                  className="text-gray-700 mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-base leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={!isMobile ? { opacity: 1 } : {}}
                >
                  {role.desc}
                </motion.p>

                {/* Animated Bottom Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 sm:h-1 bg-gradient-to-r ${role.gradient}`}
                  initial={{ width: 0 }}
                  whileHover={!isMobile ? { width: "100%" } : {}}
                  whileTap={isMobile ? { width: "100%" } : {}}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Particles - Simplified for mobile, hidden on very small devices */}
        {shouldAnimateParticles && (
          <div className="hidden sm:block">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-blue-200/50 rounded-full"
                style={{
                  left: `${15 + (i * 20)}%`,
                  top: `${20 + (i * 15)}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Responsive padding adjustment for very small devices */}
      <style jsx>{`
        @media (max-width: 360px) {
          section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
}