import Navbar from "@/components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hadith Tech | Technology Podcast",
  description: "Explore insightful conversations with technology leaders, developers, and innovators. Hadith Tech brings you deep dives into the world of software development, AI, and tech innovation.",
  openGraph: {
    title: "Hadith Tech | Technology Podcast",
    description: "Explore insightful conversations with technology leaders and innovators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="py-2">{children}</main>
        <Footer />
        <div id="theRootElement"></div>
      </body>
    </html>
  );
}
