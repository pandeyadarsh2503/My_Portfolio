import type { Metadata } from "next";
import "./globals.css";
import CanvasBackground from "@/components/CanvasBackground";

export const metadata: Metadata = {
  title: "Phantom | Adarsh Pandey",
  description: "Creative Developer & AI/ML Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500&f[]=satoshi@400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap" />
      </head>
      <body className="antialiased">
        <div className="relative min-h-screen selection:bg-[#B19EEF] selection:text-black">
          {children}
        </div>
      </body>
    </html>
  );
}
