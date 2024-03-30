import { Fragment, ReactNode } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

import { useMobileNavStore } from "@/app/_store/mobile-nav-store";
import Header from "@/app/_components/header";
import MobileSidebar from "@/app/_components/mobile-sidebar";
import {
  IsInsideMobileNavigationContext,
  useIsInsideMobileNavigation,
} from "@/app/_providers/mobile-nav-provider";

type IconProps = {
  className?: string;
  [key: string]: ReactNode;
};

function MenuIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M.5 1h9M.5 8h9M.5 4.5h9" />
    </svg>
  );
}

function XIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m1.5 1 7 7M8.5 1l-7 7" />
    </svg>
  );
}

export default function MobileNav() {
  let isInsideMobileNavigation = useIsInsideMobileNavigation();

  const { isOpen, toggle, close } = useMobileNavStore((state) => ({
    isOpen: state.isOpen,
    toggle: state.toggle,
    close: state.close,
  }));

  const ToggleIcon = isOpen ? XIcon : MenuIcon;

  return (
    <IsInsideMobileNavigationContext.Provider value={true}>
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 md:hidden"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <ToggleIcon className="w-2.5 stroke-zinc-900" />
      </button>
      {!isInsideMobileNavigation && (
        <Transition show={isOpen} as={Fragment}>
          <Dialog onClose={close} className="fixed inset-0 z-50 lg:hidden">
            <Transition.Child
              as={Fragment}
              enter="duration-300 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-200 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm" />
            </Transition.Child>

            <Dialog.Panel>
              <Transition.Child
                as={Fragment}
                enter="duration-300 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-200 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Header />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-500 ease-in-out"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="duration-500 ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <motion.div
                  layoutScroll
                  className="ring-zinc-900/7.5 fixed bottom-0 right-0 top-14 w-full overflow-y-auto bg-white px-4 pb-4 pt-6 shadow-lg shadow-zinc-900/10 min-[416px]:max-w-sm sm:px-6 sm:pb-10"
                >
                  <MobileSidebar />
                </motion.div>
              </Transition.Child>
            </Dialog.Panel>
          </Dialog>
        </Transition>
      )}
    </IsInsideMobileNavigationContext.Provider>
  );
}
