import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')] bg-cover bg-center">
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
          <Button size="lg" variant="outline" className="text-white border-white">
            Explore Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}
