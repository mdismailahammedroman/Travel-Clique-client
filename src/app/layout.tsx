import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel-Clique | Find Your Travel Buddy",
  description:
    "Connect with travel buddies, explore destinations, and share adventures worldwide.",
};
// In your `RootLayout` file, it should look like this:

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the layout with ReduxProvider */}
        <main>{children}</main>
      </body>
    </html>
  );
}
