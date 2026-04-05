import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subhash Chand | Strategic Criminal Defense",
  description: "Final Year Candidate. 6+ Court Residencies. Criminal Litigation Specialist.",
  icons: {
    icon: "/profile-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-[#050505] text-white selection:bg-legal-gold selection:text-[#050505]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
