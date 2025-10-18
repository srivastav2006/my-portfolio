import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chagapuram Srivastav | Portfolio",
  description:
    "Backend Engineer & AI/ML Developer. Specializing in Node.js, Express, FastAPI, MongoDB, React, and distributed systems. IIIT Lucknow undergrad (CGPA 8.35). CodeChef 4★, Codeforces Specialist.",
  keywords: ["Backend Engineer", "AI/ML Developer", "Node.js", "Express", "FastAPI", "MongoDB", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "Chagapuram Srivastav" }],
  openGraph: {
    title: "Chagapuram Srivastav | Portfolio",
    description: "Backend Engineer & AI/ML Developer. Specializing in Node.js, Express, FastAPI, MongoDB, React, and distributed systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main className="flex-1">
          {children} <Analytics />
        </main>

        <Footer />
      </body>
    </html>
  );
}
