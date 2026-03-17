"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".about-card",
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 md:px-20 bg-mist-600"
      id="about"
    >
      
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
          Introduction
        </p>

        <h2 className="text-4xl md:text-6xl font-light tracking-widest text-gray-800 mt-2">
          ABOUT ME
        </h2>

        <div className="w-20 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* Content Card */}
      <div className="about-card max-w-6xl mx-auto 
        bg-white/10 backdrop-blur-xl border border-white/20
        rounded-2xl shadow-2xl p-8 md:p-12"
      >

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/profile.jpeg" // 👉 replace with your image
              className="w-full max-w-md mx-auto rounded-xl shadow-lg
              hover:scale-105 transition duration-700"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-gray-800 space-y-6">

            <h3 className="text-2xl md:text-4xl font-semibold leading-tight">
              Sachin Mittal
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              Founder at Loanwalle.com and an experienced entrepreneur with a
              strong background in finance, real estate, and business strategy.
              With leadership roles across multiple ventures, Sachin has built a
              reputation for innovation, strategic thinking, and execution.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              His journey spans across financial services, publishing, and
              entrepreneurship, backed by academic credentials from prestigious
              institutions and a passion for creating impactful ventures.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-4">

              <div>
                <p className="text-2xl font-semibold">10+</p>
                <p className="text-sm text-gray-700">Years Experience</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">15+</p>
                <p className="text-sm text-gray-700">Publications</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">5+</p>
                <p className="text-sm text-gray-700">Companies</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}