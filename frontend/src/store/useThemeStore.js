import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("connect-sphere-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("connect-sphere-theme", theme);
    set({ theme });
  },
}));
