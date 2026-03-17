export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-20 py-20 bg-mist-600 "
    >

      {/* HEADING */}
      <div className="text-center mb-12 mt-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-[0.2em] text-gray-800">
          CONTACT
        </h2>
        <div className="w-12 md:w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* CARD */}
      <div
        className="
          max-w-5xl mx-auto
          bg-white/10 backdrop-blur-xl border border-white/20
          rounded-2xl shadow-2xl
          p-6 sm:p-8 md:p-12
        "
      >

        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT INFO */}
          <div className="w-full md:w-1/2 text-white space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              Let’s Connect
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Whether it's business, investment opportunities, or collaboration —
              feel free to reach out.
            </p>

            <div className="space-y-3 text-sm sm:text-base text-gray-300">
              <p>📧 info@sachinmittal.com</p>
              <p>📍 Vasant Vihar,New Delhi, India</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="w-full md:w-1/2 space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full px-4 py-3 rounded-lg
                bg-white/10 border border-white/20
                text-white placeholder-gray-400
                focus:outline-none focus:border-white/40
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full px-4 py-3 rounded-lg
                bg-white/10 border border-white/20
                text-white placeholder-gray-400
                focus:outline-none focus:border-white/40
              "
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="
                w-full px-4 py-3 rounded-lg
                bg-white/10 border border-white/20
                text-white placeholder-gray-400
                focus:outline-none focus:border-white/40
              "
            />

            <button
              className="
                w-full py-3 rounded-lg
                bg-white text-black font-medium
                hover:bg-gray-200 transition
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}