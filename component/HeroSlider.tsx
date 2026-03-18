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

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import { motion, Variants } from "framer-motion";
// import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

// export default function HeroSlider() {
//   // Animation variants with proper TypeScript types
//   const textVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       y: 30
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier
//       }
//     }
//   };

//   // For staggered letter animation - using a different approach
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const letterVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       y: 50
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.2, 0.65, 0.3, 0.9]
//       }
//     }
//   };

//   const badgeVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       x: -20
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const roleVariants: Variants = {
//     hidden: {
//       opacity: 0
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         delay: 0.8
//       }
//     }
//   };

//   const descriptionVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       y: 20
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delay: 1.2
//       }
//     }
//   };

//   const ctaVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       y: 20
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delay: 1.4
//       }
//     }
//   };

//   // Split name into letters for staggered animation
//   const nameLetters = "Sachin Mittal".split("");

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Custom pagination styling */}
//       <style jsx global>{`
//         .swiper-pagination-bullet {
//           width: 40px !important;
//           height: 3px !important;
//           border-radius: 0 !important;
//           background: rgba(255,255,255,0.3) !important;
//           transition: all 0.4s ease !important;
//         }

//         .swiper-pagination-bullet-active {
//           background: white !important;
//           width: 60px !important;
//           box-shadow: 0 0 20px rgba(255,255,255,0.5) !important;
//         }

//         .swiper-pagination {
//           bottom: 40px !important;
//           display: flex !important;
//           justify-content: center !important;
//           gap: 8px !important;
//         }
//       `}</style>

//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         autoplay={{
//           delay: 6000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true
//         }}
//         pagination={{
//           clickable: true,
//           dynamicBullets: false
//         }}
//         loop={true}
//         speed={1500}
//         className="h-full"
//       >
//         {/* Slide 1 - Sachin Mittal */}
//         <SwiperSlide>
//           <div
//             className="h-screen bg-cover bg-center flex items-center relative"
//             style={{
//               backgroundImage: "url('/hero1.jpeg')",
//               backgroundAttachment: "fixed"
//             }}
//           >
//             {/* Premium gradient overlay */}
//             <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30"></div>

//             {/* Animated particles overlay (subtle) */}
//             <div className="absolute inset-0 opacity-20">
//               <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
//               <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//             </div>

//             <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={textVariants}
//                 className="text-white max-w-3xl"
//               >
//                 {/* Premium badge */}
//                 <motion.div
//                   variants={badgeVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="flex items-center gap-2 mb-6"
//                 >
//                   <Sparkles className="w-4 h-4 text-yellow-400" />
//                   <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-light">
//                     Visionary Leader
//                   </span>
//                 </motion.div>

//                 {/* Staggered name animation */}
//                 <motion.h1
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="text-5xl sm:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight"
//                 >
//                   {nameLetters.map((letter, index) => (
//                     <motion.span
//                       key={index}
//                       variants={letterVariants}
//                       className={letter === " " ? "mr-4" : "inline-block"}
//                     >
//                       {letter}
//                     </motion.span>
//                   ))}
//                 </motion.h1>

//                 {/* Role with elegant underline */}
//                 <motion.div
//                   variants={roleVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="mt-6 relative inline-block"
//                 >
//                   <p className="text-lg sm:text-xl text-white/80 font-light tracking-wide">
//                     Entrepreneur • Investor • Author
//                   </p>
//                   <motion.div
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{ delay: 1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
//                     className="absolute -bottom-2 left-0 w-full h-px bg-linear-to-r from-white/50 to-transparent"
//                   />
//                 </motion.div>

//                 {/* Description with fade */}
//                 <motion.p
//                   variants={descriptionVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="mt-8 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
//                 >
//                   Founder of Loanwalle.com with expertise in finance,
//                   business strategy, and entrepreneurship.
//                 </motion.p>

//                 {/* Premium CTA buttons */}
//                 <motion.div
//                   variants={ctaVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="mt-10 flex flex-wrap gap-4"
//                 >
//                   <a
//                     href="#contact"
//                     className="group px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
//                   >
//                     Contact Me
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </a>

//                   <a
//                     href="#about"
//                     className="group px-8 py-4 rounded-full border border-white/20 text-sm text-white hover:bg-white/10 transition-all duration-500 flex items-center gap-2"
//                   >
//                     <BookOpen className="w-4 h-4" />
//                     Learn More
//                   </a>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 - Building Businesses */}
//         <SwiperSlide>
//           <div
//             className="h-screen bg-cover bg-center flex items-center relative"
//             style={{
//               backgroundImage: "url('/hero2.jpeg')",
//               backgroundAttachment: "fixed"
//             }}
//           >
//             {/* Premium gradient overlay */}
//             <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30"></div>

//             {/* Animated particles overlay */}
//             <div className="absolute inset-0 opacity-20">
//               <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
//               <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-700"></div>
//             </div>

//             <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={textVariants}
//                 className="text-white max-w-3xl"
//               >
//                 {/* Premium badge */}
//                 <motion.div
//                   variants={badgeVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="flex items-center gap-2 mb-6"
//                 >
//                   <Sparkles className="w-4 h-4 text-blue-400" />
//                   <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-light">
//                     Innovation
//                   </span>
//                 </motion.div>

//                 {/* Main heading with elegant animation */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
//                   className="text-5xl sm:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight"
//                 >
//                   Building
//                   <br />
//                   <span className="bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
//                     Businesses
//                   </span>
//                 </motion.h1>

//                 {/* Industries with elegant styling */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6, duration: 0.6 }}
//                   className="mt-6 flex items-center gap-4"
//                 >
//                   <span className="text-sm uppercase tracking-[0.2em] text-white/50">Finance</span>
//                   <span className="w-1 h-1 bg-white/30 rounded-full"></span>
//                   <span className="text-sm uppercase tracking-[0.2em] text-white/50">Publishing</span>
//                   <span className="w-1 h-1 bg-white/30 rounded-full"></span>
//                   <span className="text-sm uppercase tracking-[0.2em] text-white/50">Ventures</span>
//                 </motion.div>

//                 {/* Description with elegant styling */}
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.8, duration: 0.6 }}
//                   className="mt-8 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
//                 >
//                   Leading ventures and investing in innovation
//                   across industries with a focus on sustainable growth.
//                 </motion.p>

//                 {/* Premium CTA */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1, duration: 0.6 }}
//                   className="mt-10"
//                 >
//                   <a
//                     href="#Books"
//                     className="group inline-flex items-center px-8 py-4 rounded-full border border-white/30 text-sm text-white hover:bg-white/10 transition-all duration-500 hover:border-white/50 gap-3"
//                   >
//                     <BookOpen className="w-4 h-4" />
//                     <span>View Published Books</span>
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </a>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>

//       {/* Elegant scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 1 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
//       >
//         <div className="flex flex-col items-center gap-2">
//           <span className="text-xs uppercase tracking-[0.3em] text-white/50">Scroll</span>
//           <div className="w-px h-16 bg-linear-to-b from-white/50 to-transparent"></div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import {
  motion,
  Variants,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  ChevronDown,
  Award,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse position for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Convert to range -1 to 1
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;

      mouseX.set(x);
      mouseY.set(y);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 100, rotateX: -30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.03,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const nameLetters = "Sachin Mittal".split("");

  const slides = [
    {
      id: 1,
      badge: "Visionary Leader",
      badgeIcon: Sparkles,
      badgeColor: "text-yellow-400",
      title: nameLetters,
      roles: ["Entrepreneur", "Investor", "Author"],
      description:
        "Founder of Loanwalle.com with expertise in finance, business strategy, and entrepreneurship.",
      ctaPrimary: { text: "Contact Me", icon: ArrowRight, link: "#contact" },
      ctaSecondary: { text: "Learn More", icon: BookOpen, link: "#about" },
      stats: [
        { value: "15+", label: "Years Experience", icon: Award },
        { value: "10+", label: "Companies Built", icon: TrendingUp },
        { value: "50+", label: "Investments", icon: Globe },
      ],
      image: "/hero1.jpeg",
      gradient: "from-amber-500/20 via-purple-500/20 to-blue-500/20",
    },
    {
      id: 2,
      badge: "Innovation",
      badgeIcon: Sparkles,
      badgeColor: "text-blue-400",
      title: "Building",
      subtitle: "Businesses",
      roles: ["Finance", "Publishing", "Ventures"],
      description:
        "Leading ventures and investing in innovation across industries with a focus on sustainable growth.",
      ctaPrimary: { text: "View Books", icon: BookOpen, link: "#books" },
      stats: [
        { value: "5", label: "Published Books", icon: BookOpen },
        { value: "100+", label: "Team Members", icon: Users },
        { value: "3", label: "Continents", icon: Globe },
      ],
      image: "/hero2.jpeg",
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Custom styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 40px !important;
          height: 4px !important;
          border-radius: 0 !important;
          background: rgba(255, 255, 255, 0.2) !important;
          transition: all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        }

        .swiper-pagination-bullet-active {
          background: white !important;
          width: 80px !important;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.3) !important;
        }

        .swiper-pagination {
          bottom: 30px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
          z-index: 20 !important;
        }

        @media (max-width: 768px) {
          .swiper-pagination-bullet {
            width: 30px !important;
            height: 3px !important;
          }
          .swiper-pagination-bullet-active {
            width: 50px !important;
          }
        }
      `}</style>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        loop={true}
        speed={2000}
        className="h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, slideIndex) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full overflow-hidden">
              {/* Background Image with Parallax */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  scale: useTransform(mouseXSpring, [-1, 1], [1.1, 0.9]),
                  x: useTransform(mouseXSpring, [-1, 1], [-50, 50]),
                  y: useTransform(mouseYSpring, [-1, 1], [-50, 50]),
                }}
              />

              {/* Animated Gradient Overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`}
                animate={{
                  background: [
                    `linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)`,
                    `linear-gradient(225deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)`,
                    `linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)`,
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Animated Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>

              {/* Floating Particles */}
              {mounted && !isMobile && (
                <>
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/20 rounded-full"
                      initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                      }}
                      animate={{
                        y: [null, -30, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </>
              )}

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 max-w-7xl mx-auto">
                  <motion.div
                    key={slideIndex}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-white max-w-4xl"
                  >
                    {/* Premium Badge */}
                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 blur-md rounded-full" />
                        <slide.badgeIcon
                          className={`relative w-4 h-4 sm:w-5 sm:h-5 ${slide.badgeColor}`}
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/60 font-light">
                        {slide.badge}
                      </span>
                      <div className="w-8 sm:w-12 h-px bg-white/20 ml-2" />
                    </motion.div>

                    {/* Title with Staggered Animation */}
                    {slideIndex === 0 ? (
                      <motion.h1
                        variants={containerVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tight"
                      >
                        {(Array.isArray(slide.title)
                          ? slide.title
                          : slide.title.split("")
                        ).map((letter: string, index: number) => (
                          <motion.span
                            key={index}
                            custom={index}
                            variants={letterVariants}
                            className={
                              letter === " " ? "mr-2 sm:mr-4" : "inline-block"
                            }
                            style={{
                              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                            }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </motion.h1>
                    ) : (
                      <>
                        <motion.h1
                          variants={itemVariants}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tight"
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.h2
                          variants={itemVariants}
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tight mt-2"
                        >
                          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            {slide.subtitle}
                          </span>
                        </motion.h2>
                      </>
                    )}

                    {/* Roles with Elegant Separators */}
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 sm:mt-6"
                    >
                      {slide.roles.map((role, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em] text-white/50">
                            {role}
                          </span>
                          {index < slide.roles.length - 1 && (
                            <span className="w-1 h-1 bg-white/30 rounded-full ml-2 sm:ml-4" />
                          )}
                        </div>
                      ))}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      variants={itemVariants}
                      className="mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-xl"
                    >
                      {slide.description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10"
                    >
                      <motion.a
                        href={slide.ctaPrimary.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black text-xs sm:text-sm font-medium overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {slide.ctaPrimary.text}
                          <slide.ctaPrimary.icon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>

                      <motion.a
                        href={slide.ctaSecondary?.link || "#"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all duration-500 flex items-center gap-2"
                      >
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                        Learn More
                      </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      variants={itemVariants}
                      className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12 max-w-lg"
                    >
                      {slide.stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5 }}
                          className="text-center"
                        >
                          <div className="flex justify-center mb-1 sm:mb-2">
                            <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white/40" />
                          </div>
                          <div className="text-base sm:text-lg lg:text-xl font-light text-white">
                            {stat.value}
                          </div>
                          <div className="text-[8px] sm:text-[10px] lg:text-xs uppercase tracking-wider text-white/40 mt-1">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Slide Number */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 right-8 text-white/20 text-6xl sm:text-8xl lg:text-9xl font-bold hidden md:block"
                style={{
                  textShadow: "0 0 30px rgba(255,255,255,0.1)",
                }}
              >
                0{slideIndex + 1}
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Scroll
          </span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
          />
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white via-white/50 to-transparent z-20"
        initial={{ width: "0%" }}
        animate={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </section>
  );
}
