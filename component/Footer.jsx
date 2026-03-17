export default function Footer() {
  return (
    <section className="">
      
      <div className="
        bg-white/10 backdrop-blur-xl border border-white/20 
        rounded-2xl shadow-xl 
        p-6 sm:p-8 md:p-10
      ">

        <div className="
          flex flex-col 
          md:flex-row md:justify-between 
          gap-10 md:gap-6
          text-center md:text-left
        ">

          {/* LEFT - BRAND */}
          <div className="max-w-sm mx-auto md:mx-0">
            <h2 className="text-xl sm:text-2xl font-semibold text-mist-300">
              Sachin Mittal
            </h2>

            <p className="text-mist-400 mt-3 text-sm sm:text-base leading-relaxed">
              Entrepreneur, Investor & Author. Building impactful ventures
              across finance, media, and business strategy.
            </p>
          </div>

          {/* CENTER - NAV */}
          <div className="flex flex-col gap-2 sm:gap-3 text-gray-600">
            <h3 className="font-semibold text-mist-300 mb-2 text-sm sm:text-base">
              Navigation
            </h3>

            <a href="#about" className="text-mist-400 hover:text-white transition text-sm sm:text-base">
              About
            </a>
            <a href="#Books" className="text-mist-400 hover:text-white transition text-sm sm:text-base">
              Books
            </a>
            <a href="#work" className="text-mist-400 hover:text-white transition text-sm sm:text-base">
              Work
            </a>
            <a href="#contact" className="text-mist-400 hover:text-white transition text-sm sm:text-base">
              Contact
            </a>
          </div>

          {/* RIGHT - SOCIAL */}
          <div className="flex flex-col gap-2 sm:gap-3 text-gray-600">
            <h3 className="font-semibold text-mist-300 mb-2 text-sm sm:text-base">
              Connect
            </h3>

            <a href="#" className="text-mist-400 hover:text-white transition text-sm sm:text-base">
              LinkedIn
            </a>
            <a href="#" className="text-mist-400 hover:text-white transition text-sm sm:text-base">
              Twitter
            </a>
            <a href="#" className="text-mist-400 hover:text-white transition text-sm sm:text-base">
              Email
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="
          border-t border-gray-300 
          mt-8 md:mt-10 pt-5 md:pt-6 
          text-center text-gray-500 
          text-xs sm:text-sm
        ">
          © {new Date().getFullYear()} Sachin Mittal. All rights reserved.
        </div>

      </div>

    </section>
  );
}