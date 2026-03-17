// "use client";

// const projects = [
//   { title: "Mars", role: "Designation", image: "/HomeLoan.jpg" },
//   { title: "Everyday Humans", role: "Designation", image: "/A2Z.jpg" },
//   { title: "Rocket Squared", role: "Designation", image: "/ABC.jpg" },
//   { title: "Panda Logo", role: "Designation", image: "/Foolish.jpg" },
//   { title: "Fusion Dynamics", role: "Designation", image: "/HomeLoan.jpg" },
// ];

// export default function Books() {
//   return (
//     <section className="py-20 overflow-hidden bg-mist-600">

//       <div className="flex justify-center items-center py-10">
//   <h2 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-gray-800 relative">
//     BIBLIOGRAPHY

//     <span className="block w-16 h-[1px] bg-gray-400 mx-auto mt-4"></span>
//   </h2>
// </div>
//       <div className="marquee">

//         <div className="marquee-track">

//           {[...projects, ...projects].map((project, index) => (
//             <div key={index} className="min-w-[250px] mx-4">

//               <div className="group cursor-pointer">

//                 <div className="overflow-hidden rounded-xl">
//                   <img
//                     src={project.image}
//                     className="w-full h-[320px] object-cover rounded-xl
//                     group-hover:scale-105 transition duration-500"
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-500 text-sm">
//                     {project.role}
//                   </p>
//                 </div>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BooksPremium() {
  const containerRef = useRef(null);

  const books = [
    {
      title: "The ABC of Real Estate in India",
      desc: "A practical guide to understanding real estate fundamentals in India.",
      image: "/ABC.jpg",
    },
    {
      title: "A-2-Z of Real Estate in India",
      desc: "Comprehensive insights into real estate strategies and investment.",
      image: "/A2Z.jpg",
    },
    {
      title: "Money & Financial Reality",
      desc: "Explores financial systems and the psychology of money.",
      image: "/Foolish.jpg",
    },
    {
      title: "Understanding Home Loans",
      desc: "A simple breakdown of home loan strategies and planning.",
      image: "/HomeLoan.jpg",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".book-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          x: 400,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="Books" ref={containerRef} className="relative bg-mist-600 ">

    <div className="flex justify-center items-center py-10 mb-6">
        <h2 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-gray-800 relative">
          BIBLIOGRAPHY
          <span className="block w-16 h-px bg-gray-400 mx-auto mt-4"></span>
        </h2>
      </div>

      {books.map((book, index) => (
        <div
          key={index}
          className="h-screen sticky top-0 flex items-center justify-center"
          style={{ zIndex: 10 + index }}
        >

          <div
            className="book-card w-[90%] md:w-[70%]
            bg-white/10 backdrop-blur-xl border border-white/20
            rounded-2xl shadow-2xl p-6 md:p-12"
          >

            <div className="flex flex-col md:flex-row items-center gap-10">

              {/* IMAGE */}
              <div className="w-full md:w-1/2 h-fit overflow-hidden rounded-xl">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-fit  object-cover 
                  transition duration-700 hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="w-full md:w-1/2 text-white space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-5xl font-semibold leading-tight">
                  {book.title}
                </h2>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {book.desc}
                </p>
              </div>

            </div>

          </div>

        </div>
      ))}

    </section>
  );
}