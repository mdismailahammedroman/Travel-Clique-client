import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
         <Image
        src="/backcover.jpg"        // ⬅️ local image (IMPORTANT)
        alt="Travel landscape"
        fill
        priority                // 🔥 LCP fix
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Find Your Perfect Travel Buddy
        </h1>
        <p className="mt-4 text-gray-200">
          Explore destinations, create plans, and connect with travelers worldwide.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Find Travel Buddies</Button>
          <Button size="lg" variant="outline" className="text-black hover:text-white hover:bg-gray-600 border-white">
            Explore Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}
