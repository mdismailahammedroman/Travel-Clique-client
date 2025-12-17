export default function WhyChooseUs() {
  const features = [
    {
      title: "Trusted Community",
      desc: "Verified travelers and authentic profiles",
    },
    {
      title: "Smart Matching",
      desc: "AI-powered recommendations tailored for you",
    },
    {
      title: "Secure Chat",
      desc: "Private and safe in-app messaging",
    },
    {
      title: "Global Travelers",
      desc: "Connect with travelers worldwide",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-16 text-gray-900">
        Why Choose Travel-Clique?
      </h2>

      <div className="container mx-auto grid md:grid-cols-4 gap-10 px-4">
        {features.map((item, i) => (
          <div
            key={item.title}
            className="
              group
              relative
              rounded-3xl
              bg-white/30 backdrop-blur-xl
              border border-white/40
              p-8
              text-center
              shadow-lg
              transition-all duration-500 ease-out
              hover:scale-105 hover:rotate-[0.5deg] hover:shadow-2xl
              animate-in fade-in zoom-in-90
            "
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Animated Glow Ring */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-400/30 via-violet-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon Bubble */}
            <div className="relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-bold text-lg shadow-md transition-transform duration-300 group-hover:scale-110">
              {i + 1}
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-lg font-semibold text-gray-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 mt-3 text-sm text-gray-700 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
