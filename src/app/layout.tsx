import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chandni Tiwari - Interior Designer",
  description: "Professional Interior Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}