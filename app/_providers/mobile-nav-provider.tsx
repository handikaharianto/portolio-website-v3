import { createContext, useContext } from "react";

export const IsInsideMobileNavigationContext = createContext(false);

export function useIsInsideMobileNavigation() {
  return useContext(IsInsideMobileNavigationContext);
}
