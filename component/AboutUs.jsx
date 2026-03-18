// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function About() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       ".about-card",
//       {
//         opacity: 0,
//         y: 80,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//       }
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-24 px-6 md:px-20 bg-mist-600"
//       id="about"
//     >
      
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
//           Introduction
//         </p>

//         <h2 className="text-4xl md:text-6xl font-light tracking-widest text-gray-800 mt-2">
//           ABOUT ME
//         </h2>

//         <div className="w-20 h-px bg-gray-400 mx-auto mt-4"></div>
//       </div>

//       {/* Content Card */}
//       <div className="about-card max-w-6xl mx-auto 
//         bg-white/10 backdrop-blur-xl border border-white/20
//         rounded-2xl shadow-2xl p-8 md:p-12"
//       >

//         <div className="flex flex-col md:flex-row items-center gap-10">

//           {/* IMAGE */}
//           <div className="w-full md:w-1/2">
//             <img
//               src="/profile.jpeg" // 👉 replace with your image
//               className="w-full max-w-md mx-auto rounded-xl shadow-lg
//               hover:scale-105 transition duration-700"
//             />
//           </div>

//           {/* TEXT */}
//           <div className="w-full md:w-1/2 text-gray-800 space-y-6">

//             <h3 className="text-2xl md:text-4xl font-semibold leading-tight">
//               Sachin Mittal
//             </h3>

//             <p className="text-gray-700 leading-relaxed text-lg">
//               Founder at Loanwalle.com and an experienced entrepreneur with a
//               strong background in finance, real estate, and business strategy.
//               With leadership roles across multiple ventures, Sachin has built a
//               reputation for innovation, strategic thinking, and execution.
//             </p>

//             <p className="text-gray-700 leading-relaxed text-lg">
//               His journey spans across financial services, publishing, and
//               entrepreneurship, backed by academic credentials from prestigious
//               institutions and a passion for creating impactful ventures.
//             </p>

//             {/* Stats */}
//             <div className="flex gap-8 pt-4">

//               <div>
//                 <p className="text-2xl font-semibold">10+</p>
//                 <p className="text-sm text-gray-700">Years Experience</p>
//               </div>

//               <div>
//                 <p className="text-2xl font-semibold">15+</p>
//                 <p className="text-sm text-gray-700">Publications</p>
//               </div>

//               <div>
//                 <p className="text-2xl font-semibold">5+</p>
//                 <p className="text-sm text-gray-700">Companies</p>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BookOpen, Briefcase, Calendar, ChevronRight, Globe, Target, TrendingUp, Users, Zap } from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Refs for animations
  const statsRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(".about-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Main card entrance
      gsap.fromTo(".about-card",
        { opacity: 0, scale: 0.95, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image animation
      gsap.fromTo(".about-image",
        { opacity: 0, x: -30, rotateY: -10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text content animation
      gsap.fromTo(".about-text",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats animation with stagger
      gsap.fromTo(".stat-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Timeline items animation
      gsap.fromTo(".timeline-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "10+", label: "Years", icon: Calendar, color: "from-blue-500 to-cyan-500" },
    { value: "15+", label: "Publications", icon: BookOpen, color: "from-purple-500 to-pink-500" },
    { value: "5+", label: "Companies", icon: Briefcase, color: "from-amber-500 to-orange-500" },
    { value: "50+", label: "Team", icon: Users, color: "from-emerald-500 to-teal-500" },
  ];

  const timeline = [
    { year: "2015", event: "Founded First Venture", description: "Started journey in fintech" },
    { year: "2018", event: "Launched Loanwalle", description: "Revolutionized loan accessibility" },
    { year: "2020", event: "Published First Book", description: "Bestseller in finance" },
    { year: "2023", event: "Expanded Globally", description: "Operations across 3 continents" },
  ];

  const achievements = [
    { icon: Award, text: "Entrepreneur of the Year 2022", color: "text-yellow-500" },
    { icon: TrendingUp, text: "100% Growth Rate", color: "text-green-500" },
    { icon: Zap, text: "Innovation Award 2023", color: "text-purple-500" },
  ];

  return (
    <section
      ref={sectionRef}
      className=" bg-mist-700 relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden"
      id="about"
      // style={{
      //   background: "linear-gradient(135deg, #f5f7fa 0%, #e9edf5 100%)",
      // }}
    >
      {/* Animated Background Elements - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs - Hidden on mobile for performance */}
        {!isMobile && (
          <>
            <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-green-950 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </>
        )}
        
        {/* Grid Pattern - Subtle on all devices */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: isMobile ? '30px 30px' : '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 about-heading">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-gray-500 uppercase mb-2">
            Introduction
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-gray-800 mt-2 relative inline-block">
            ABOUT ME
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
          </h2>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="about-card relative group">
          {/* Glow Effect - Only on desktop */}
          {!isMobile && (
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
          )}
          
          <div className="relative bg-mist-500 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            
            {/* Decorative Header Gradient */}
            <div className="h-1.5 sm:h-2 w-full bg-gradient-to-r from-blue-50 via-purple-50 to-mist-300" />
            
            <div className="p-5 sm:p-6 lg:p-10 xl:p-12">
              
              {/* TOP SECTION - Image and Main Text */}
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-10 lg:mb-12 xl:mb-16">
                
                {/* IMAGE with modern styling */}
                <div className="w-full sm:w-3/4 lg:w-5/12 relative group about-image">
                  <div className="relative">
                    {/* Image Frame - Simplified for mobile */}
                    <div className={`${!isMobile ? 'absolute -inset-1 bg-gradient-to-r from-blue-50 via-purple-50 to-mist-300 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000' : ''}`} />
                    
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                      <img
                        src="/profile.jpeg"
                        alt="Sachin Mittal"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                      />
                      
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                      
                      {/* Social/professional badges */}
                      <div className="absolute bottom-3 left-3 flex gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] sm:text-xs font-medium text-gray-800">
                          CEO
                        </span>
                        <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] sm:text-xs font-medium text-gray-800">
                          Founder
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="w-full lg:w-7/12 space-y-4 sm:space-y-5 lg:space-y-6 about-text">
                  {/* Name with gradient */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      Sachin Mittal
                    </span>
                  </h3>

                  {/* Role badges - Scrollable on mobile */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["Entrepreneur", "Investor", "Author", "Strategist"].map((role, index) => (
                      <span
                        key={index}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  {/* Description with improved readability */}
                  <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                    <p className="text-sm sm:text-base lg:text-lg">
                      Founder at <span className="font-semibold text-gray-800">Loanwalle.com</span> and an experienced 
                      entrepreneur with a strong background in finance, real estate, and business strategy.
                    </p>
                    
                    <p className="text-sm sm:text-base lg:text-lg">
                      His journey spans across financial services, publishing, and entrepreneurship, 
                      backed by a passion for creating impactful ventures that transform industries.
                    </p>
                  </div>

                  {/* Achievements - Responsive grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4">
                    {achievements.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/60 rounded-lg sm:rounded-xl">
                        <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                        <span className="text-[10px] sm:text-xs text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* STATS SECTION - Responsive grid */}
              <div ref={statsRef} className="grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5  xl:gap-6 mb-10 lg:mb-12 xl:mb-16">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="stat-item group relative p-3 sm:p-4 bg-white/50 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2"
                  >
                    <div className="relative text-center">
                      <div className={`inline-block p-1.5 sm:p-2 bg-gradient-to-r ${stat.color} rounded-lg sm:rounded-xl mb-2 sm:mb-3`}>
                        <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <p className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800">{stat.value}</p>
                      <p className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500 uppercase tracking-wider mt-0.5 sm:mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* TIMELINE SECTION */}
              <div ref={timelineRef} className="mt-10 lg:mt-12 xl:mt-16">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-4 sm:mb-5 lg:mb-6 flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  Journey Timeline
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className="timeline-item group relative p-4 sm:p-5 lg:p-6 bg-white/50 rounded-xl sm:rounded-2xl hover:bg-white transition-all duration-500"
                    >
                      {/* Year badge */}
                      <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-blue-50 via-purple-50 to-mist-300 rounded-full text-[10px] sm:text-xs font-bold text-gray-700 shadow-lg">
                        {item.year}
                      </div>
                      
                      <div className="mt-3 sm:mt-4">
                        <h5 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2">
                          {item.event}
                        </h5>
                        <p className="text-[10px] sm:text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Decorative line */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA BUTTON */}
              <div className="text-center mt-8 sm:mt-10 lg:mt-12 xl:mt-16">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:from-gray-900 hover:to-black transition-all duration-500 hover:scale-105 hover:shadow-2xl text-xs sm:text-sm"
                >
                  <span className="font-medium">Let's Work Together</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Quote */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12 opacity-50 hover:opacity-100 transition duration-500">
          <p className="text-xs sm:text-sm text-gray-500 italic">
            "Building the future, one venture at a time"
          </p>
        </div>
      </div>
    </section>
  );
}