import { create } from "zustand";

interface MobileNavState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useMobileNavStore = create<MobileNavState>()((set) => ({
  isOpen: false,
  open: () => set((state) => ({ isOpen: true })),
  close: () => set((state) => ({ isOpen: false })),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
