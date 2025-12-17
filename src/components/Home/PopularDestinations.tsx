const destinations = [
  "Bali",
  "Paris",
  "Dubai",
  "Maldives",
  "Tokyo",
  "Rome",
];

export default function PopularDestinations() {
  return (
    <section className="py-28 bg-linear-to-br from-sky-100 via-cyan-50 to-emerald-50">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold mb-16 text-gray-900">
        Popular Destinations
      </h2>

      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {destinations.map((d, i) => (
          <div
            key={d}
            className="
              group
              relative
              rounded-3xl
              bg-white/30 backdrop-blur-xl
              border border-white/40
              p-10
              text-center
              shadow-lg
              transition-all duration-500 ease-out
              hover:-translate-y-4 hover:shadow-2xl
              animate-in fade-in slide-in-from-bottom-6
            "
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Accent Ring */}
            <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-sky-400/20 via-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <h3 className="relative z-10 text-2xl font-semibold text-gray-900">
              {d}
            </h3>
            <p className="relative z-10 mt-2 text-sm text-gray-700">
              Find travel buddies & experiences
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
