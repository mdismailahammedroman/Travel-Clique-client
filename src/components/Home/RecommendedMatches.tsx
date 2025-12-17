export default function RecommendedMatches() {
  return (
    <section className="py-28 bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold mb-16 text-gray-900">
        Recommended Travel Buddies
      </h2>

      <div className="container mx-auto grid md:grid-cols-3 gap-10 px-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="
              group
              relative
              rounded-3xl
              bg-white/35 backdrop-blur-xl
              border border-white/40
              p-8
              shadow-lg
              transition-all duration-500 ease-out
              hover:-translate-y-4 hover:shadow-2xl
              animate-in fade-in slide-in-from-bottom-6
            "
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Soft Glow */}
            <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-emerald-300/30 via-teal-300/30 to-cyan-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Avatar */}
            <div className="relative z-10 mx-auto mb-4 h-16 w-16 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
              T{i}
            </div>

            {/* Name */}
            <h3 className="relative z-10 text-lg font-semibold text-gray-900 text-center">
              Traveler #{i}
            </h3>

            {/* Bio */}
            <p className="relative z-10 mt-2 text-sm text-gray-700 text-center">
              Loves adventure & group travel
            </p>

            {/* Tags */}
            <div className="relative z-10 mt-4 flex justify-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                Adventure
              </span>
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700">
                Group Trips
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
