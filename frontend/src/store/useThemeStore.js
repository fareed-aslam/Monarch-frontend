import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("monarch-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("monarch-theme", theme);
    set({ theme });
  },
}));
