"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/app/_utils/cn";
import Link from "next/link";

type FloatingNavProps = {
  navItems: {
    name: string;
    link: string;
  }[];
};

export default function FloatingNav({ navItems }: FloatingNavProps) {
  return (
    <AnimatePresence mode="wait">
      <div
        className={cn(
          "fixed inset-x-0 top-7 z-[5000] mx-auto hidden max-w-fit items-center justify-center space-x-4 rounded-full border border-gray-100 bg-white px-8 py-2 shadow md:flex",
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 font-medium text-zinc-600 transition duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600",
            )}
          >
            <span className="block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </AnimatePresence>
  );
}
