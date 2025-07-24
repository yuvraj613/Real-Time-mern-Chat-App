import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "coffee", // Default theme instead of localStorage
  setTheme: (theme) => {
    // Remove localStorage usage for compatibility
    set({ theme });
  },
}));
