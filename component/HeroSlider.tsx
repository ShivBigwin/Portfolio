// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay, Pagination } from "swiper/modules";

// export default function HeroSlider() {
//   return (
//     <section className="h-screen w-full overflow-hidden">

//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: 4000 }}
//         pagination={{ clickable: true }}
//         loop={true}
//         className="h-full"
//       >

//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div
//             className="h-screen bg-cover bg-center flex items-center"
//             style={{ backgroundImage: "url('/hero1.jpeg')" }}
//           >

//             <div className="bg-black/50 w-full h-full flex items-center px-8">
//               <div className="text-white max-w-2xl">

//                 <h1 className="text-5xl md:text-6xl font-bold">
//                   Sachin Mittal
//                 </h1>

//                 <p className="mt-6 text-lg">
//                   Entrepreneur • Investor • Author
//                 </p>

//                 <p className="mt-4">
//                   Founder of Loanwalle.com with expertise in finance,
//                   business strategy, and entrepreneurship.
//                 </p>

//               </div>
//             </div>

//           </div>
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           <div
//             className="h-screen bg-cover bg-center flex items-center"
//             style={{ backgroundImage: "url('/hero2.jpeg')" }}
//           >

//             <div className="bg-black/50 w-full h-full flex items-center px-8">
//               <div className="text-white max-w-2xl">

//                 <h1 className="text-5xl md:text-6xl font-bold">
//                   Building Businesses
//                 </h1>

//                 <p className="mt-6 text-lg">
//                   Finance • Media • Retail • Publishing
//                 </p>

//                 <p className="mt-4">
//                   Leading ventures and investing in innovation
//                   across industries.
//                 </p>

//               </div>
//             </div>

//           </div>
//         </SwiperSlide>

//       </Swiper>

//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion, Variants } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function HeroSlider() {
  // Animation variants with proper TypeScript types
  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier
      }
    }
  };

  // For staggered letter animation - using a different approach
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const badgeVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const roleVariants: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    }
  };

  const descriptionVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2
      }
    }
  };

  const ctaVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.4
      }
    }
  };

  // Split name into letters for staggered animation
  const nameLetters = "Sachin Mittal".split("");

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Custom pagination styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 40px !important;
          height: 3px !important;
          border-radius: 0 !important;
          background: rgba(255,255,255,0.3) !important;
          transition: all 0.4s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          background: white !important;
          width: 60px !important;
          box-shadow: 0 0 20px rgba(255,255,255,0.5) !important;
        }
        
        .swiper-pagination {
          bottom: 40px !important;
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
        }
      `}</style>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ 
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: false
        }}
        loop={true}
        speed={1500}
        className="h-full"
      >
        {/* Slide 1 - Sachin Mittal */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex items-center relative"
            style={{ 
              backgroundImage: "url('/hero1.jpeg')",
              backgroundAttachment: "fixed"
            }}
          >
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30"></div>
            
            {/* Animated particles overlay (subtle) */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-white max-w-3xl"
              >
                {/* Premium badge */}
                <motion.div
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-2 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-light">
                    Visionary Leader
                  </span>
                </motion.div>

                {/* Staggered name animation */}
                <motion.h1
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl sm:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight"
                >
                  {nameLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className={letter === " " ? "mr-4" : "inline-block"}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Role with elegant underline */}
                <motion.div
                  variants={roleVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 relative inline-block"
                >
                  <p className="text-lg sm:text-xl text-white/80 font-light tracking-wide">
                    Entrepreneur • Investor • Author
                  </p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute -bottom-2 left-0 w-full h-px bg-linear-to-r from-white/50 to-transparent"
                  />
                </motion.div>

                {/* Description with fade */}
                <motion.p
                  variants={descriptionVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-8 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
                >
                  Founder of Loanwalle.com with expertise in finance,
                  business strategy, and entrepreneurship.
                </motion.p>

                {/* Premium CTA buttons */}
                <motion.div
                  variants={ctaVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <a
                    href="#contact"
                    className="group px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                  >
                    Contact Me
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="#about"
                    className="group px-8 py-4 rounded-full border border-white/20 text-sm text-white hover:bg-white/10 transition-all duration-500 flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    Learn More
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Building Businesses */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex items-center relative"
            style={{ 
              backgroundImage: "url('/hero2.jpeg')",
              backgroundAttachment: "fixed"
            }}
          >
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30"></div>
            
            {/* Animated particles overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-white max-w-3xl"
              >
                {/* Premium badge */}
                <motion.div
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-2 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-light">
                    Innovation
                  </span>
                </motion.div>

                {/* Main heading with elegant animation */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-5xl sm:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight"
                >
                  Building
                  <br />
                  <span className="bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Businesses
                  </span>
                </motion.h1>

                {/* Industries with elegant styling */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-6 flex items-center gap-4"
                >
                  <span className="text-sm uppercase tracking-[0.2em] text-white/50">Finance</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                  <span className="text-sm uppercase tracking-[0.2em] text-white/50">Publishing</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                  <span className="text-sm uppercase tracking-[0.2em] text-white/50">Ventures</span>
                </motion.div>

                {/* Description with elegant styling */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-8 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
                >
                  Leading ventures and investing in innovation
                  across industries with a focus on sustainable growth.
                </motion.p>

                {/* Premium CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="mt-10"
                >
                  <a
                    href="#books"
                    className="group inline-flex items-center px-8 py-4 rounded-full border border-white/30 text-sm text-white hover:bg-white/10 transition-all duration-500 hover:border-white/50 gap-3"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Published Books</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Elegant scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="w-px h-16 bg-linear-to-b from-white/50 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}