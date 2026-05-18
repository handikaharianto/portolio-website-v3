import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const sofiaSans = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "handikaharianto",
  description:
    "I'm a Full Stack Developer and Software Engineering student at Concordia University who's passionate about making web applications look pretty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sofiaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
