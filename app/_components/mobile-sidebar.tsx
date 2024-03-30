import Link from "next/link";
import { navItems } from "@/app/_components/header";

export default function MobileSidebar() {
  return (
    <div className="mt-8 space-y-4">
      <div className=" font-bold tracking-wide text-zinc-500">MENU</div>
      <div className="flex flex-col gap-y-1 *:text-3xl *:font-medium">
        {navItems.map((navItem) => (
          <Link
            key={navItem.name}
            href={navItem.link}
            className="py-3 transition-all duration-300 ease-out hover:bg-zinc-100/70 hover:pl-5"
          >
            {navItem.name}
          </Link>
        ))}
      </div>
      {/* TODO: Add resume button here */}
    </div>
  );
}
