"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import FloatingNav from "@/app/_components/floating-nav";
import ResumeButton from "@/app/_components/resume-button";
import MobileNav from "@/app/_components/mobile-nav";
import { useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import { useIsInsideMobileNavigation } from "@/app/_providers/mobile-nav-provider";

export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
];

type HeaderProps = {};

const Header = forwardRef<any, HeaderProps>(function Header(props, ref) {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  let isInsideMobileNavigation = useIsInsideMobileNavigation();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (current > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <header ref={ref} className="fixed z-50 w-full">
      <div
        className={clsx(
          isScrolled ? "backdrop-blur" : "",
          isInsideMobileNavigation
            ? "bg-white shadow-sm !backdrop-filter-none"
            : "",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-8 xl:px-0">
          <Link
            href="/"
            className="text-lg font-bold text-zinc-800 transition duration-300 hover:text-blue-600 md:text-xl"
          >
            @handikaharianto
          </Link>
          <FloatingNav navItems={navItems} />
          <MobileNav />
          <ResumeButton />
        </nav>
      </div>
    </header>
  );
});

export default Header;
