import Head from "next/head";
import HomePage from "@/components/Home/homePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel-Clique | Find Your Travel Buddy</title>
        <meta
          name="description"
          content="Connect with travel buddies, explore top destinations, create travel plans, and share adventures worldwide."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Travel-Clique | Find Your Travel Buddy" />
        <meta
          property="og:description"
          content="Connect with travel buddies, explore destinations, and share adventures worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="https://yourdomain.com/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel-Clique | Find Your Travel Buddy" />
        <meta
          name="twitter:description"
          content="Connect with travel buddies, explore destinations, and share adventures worldwide."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.png"
        />
      </Head>

      <main className="antialiased">
       <HomePage/>
      </main>
    </>
  );
}
