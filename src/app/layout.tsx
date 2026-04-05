import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subhash Chand | Strategic Criminal Defense",
  description: "7th Semester BALLB. 6+ Court Residencies. Criminal Litigation Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-slate-950 text-slate-200 selection:bg-legal-gold selection:text-slate-950">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
