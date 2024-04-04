import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

const sofiaSans = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "handikaharianto",
  description:
    "I'm a recent CS graduate and Full Stack Developer who's passionate about making web applications look pretty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sofiaSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
