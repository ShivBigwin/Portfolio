export default function Positions() {
  const roles = [
    {
      title: "Founder & CEO",
      company: "Loanwalle.com",
      desc: "Leading a fintech platform focused on simplifying loan accessibility and financial decision-making.",
    },
    {
      title: "Investor",
      company: "Multiple Ventures",
      desc: "Actively investing in startups across finance sectors.",
    },
    {
      title: "Author",
      company: "Published Works",
      desc: "Authored books focused on real estate, finance, and wealth-building strategies.",
    },
    {
      title: "Business Strategist",
      company: "Independent",
      desc: "Advising businesses on growth, scalability, and long-term strategic positioning.",
    },
  ];

  return (
    <section
      id="work"
      className="px-4 sm:px-6 md:px-20 py-20 bg-mist-600"
    >

      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-[0.2em] text-gray-800">
          POSITIONS
        </h2>
        <div className="w-12 md:w-16 h-px bg-gray-400 mx-auto mt-4"></div>
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">

        {roles.map((role, index) => (
          <div
            key={index}
            className="
              bg-white/10 backdrop-blur-xl border border-white/20
              rounded-2xl shadow-xl
              p-6 md:p-8
              hover:scale-[1.02] transition duration-300
            "
          >

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              {role.title}
            </h3>

            <p className="text-gray-300 mt-1 text-sm sm:text-base">
              {role.company}
            </p>

            <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
              {role.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}