import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    activeMenu: "home",
    darkTheme: false,
  }),

  actions: {
    setActiveMenu(menu) {
      this.activeMenu = menu;
    },

    toggleTheme() {
      const html = document.querySelector("html");
      html.classList.remove(this.darkTheme ? "dark" : "light");
      html.classList.add(this.darkTheme ? "light" : "dark");

      this.darkTheme = !this.darkTheme;
    },
  },
});
