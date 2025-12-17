import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import PopularDestinations from "./PopularDestinations";
import RecommendedMatches from "./RecommendedMatches";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

export default function HomePage() {
  const isLoggedIn = true; // mock auth

  return (
    <main>
      <Hero />
      <HowItWorks />
      <PopularDestinations />
      {isLoggedIn && <RecommendedMatches />}
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
