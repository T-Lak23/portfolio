import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Tilak- Portfolio",
  description: "Welcome to my portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} overflow-x-hidden leading-8 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
