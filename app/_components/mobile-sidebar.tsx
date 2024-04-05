import Link from "next/link";
import { navItems } from "@/app/_components/header";
import ResumeButton from "@/app/_components/resume-button";
import { useMobileNavStore } from "@/app/_store/mobile-nav-store";

export default function MobileSidebar() {
  const { close } = useMobileNavStore((state) => ({
    close: state.close,
  }));

  return (
    <div className="mt-8 space-y-4">
      <div className=" font-bold tracking-wide text-zinc-500">MENU</div>
      <div className="flex flex-col gap-y-1 *:text-3xl *:font-medium">
        {navItems.map((navItem) => (
          <Link
            key={navItem.name}
            href={navItem.link}
            onClick={close}
            className="border-l-2 border-transparent py-3 transition-spacing duration-300 ease-in-out hover:border-blue-600 hover:pl-5 hover:text-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
          >
            {navItem.name}
          </Link>
        ))}
      </div>
      <div className="!mt-12 flex justify-center">
        <ResumeButton className="mx-auto !block" />
      </div>
    </div>
  );
}
