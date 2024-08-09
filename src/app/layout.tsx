import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parallex Animation",
  description: "Created by Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cinzel.className}>{children}</body>
    </html>
  );
}
