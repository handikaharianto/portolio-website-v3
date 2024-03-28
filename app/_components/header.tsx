"use client";

import Link from "next/link";
import FloatingNav from "@/app/_components/floating-nav";
import MobileSidebar from "@/app/_components/mobile-navbar";
import ResumeButton from "@/app/_components/resume-button";
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header ref={ref} className="fixed z-50 w-full md:static">
      <nav className="mx-auto flex max-w-7xl items-center justify-between bg-white/90 px-6 py-4 shadow-sm backdrop-blur md:py-8 md:shadow-none md:backdrop-filter-none xl:px-0">
        <Link href="/" className="text-lg font-bold md:text-xl">
          @handikaharianto_
        </Link>
        <FloatingNav navItems={navItems} />
        {/* <MobileSidebar isOpen={isOpen} toggleDialog={setIsOpen} /> */}
        <ResumeButton />
      </nav>
    </motion.header>
  );
});

export default Header;
