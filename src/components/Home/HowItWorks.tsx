export default function HowItWorks() {
  const steps = [
    { title: "Sign Up", desc: "Create your free account" },
    { title: "Create a Plan", desc: "Add destination & dates" },
    { title: "Find a Buddy", desc: "Match with like-minded travelers" },
  ];

  return (
    <section className="py-28 bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold mb-16 text-gray-900">
        How It Works
      </h2>

      <div className="container mx-auto grid md:grid-cols-3 gap-10 px-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className="
              group
              relative
              rounded-3xl
              bg-white/35 backdrop-blur-xl
              border border-white/40
              p-10
              text-center
              shadow-lg
              transition-all duration-500 ease-out
              hover:-translate-y-4 hover:shadow-2xl
              animate-in fade-in slide-in-from-bottom-6
            "
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Gradient Glow */}
            <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-orange-300/30 via-amber-300/30 to-yellow-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Step Number */}
            <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-amber-500 text-white text-xl font-bold shadow-md transition-transform duration-300 group-hover:scale-110">
              {i + 1}
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-xl font-semibold text-gray-900">
              {s.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 mt-3 text-gray-700 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
