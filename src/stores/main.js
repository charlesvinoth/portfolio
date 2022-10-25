import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    activeMenu: "home",
    darkTheme: false,
    projects: [
      {
        id: 1,
        name: "ezofis Enterprise",
        description: {
          short: "SaaS platform for Enterprise Content Management.",
          long: "ezofis Enterprise is a SaaS platform for Enterprise Content Management (ECM). Enterprise content management (ECM) — sometimes referred to as document management or records management — is the process of managing the entire lifecycle of an organization's content, including documents, spreadsheets, contracts and scanned images. The goal of an ECM solution is to reduce risk and improve productivity, efficiency and customer experience by eliminating paper-based tasks and enhancing process visibility.",
        },
        technologies: [
          "HTML",
          "CSS",
          "Sass",
          "JavaScript (ES6+)",
          "Vue.js",
          "Quasar.js",
          "Axios.js",
          "Vuex",
          "VueRouter",
          "Vee-Validate",
          "Fabric.js",
          "Crypto.js",
          "Lodash.js",
          "Day.js",
        ],
        link: "http://52.172.32.88/ezofis-web/",
        repository: "",
        screenshotsCount: 34,
        type: "WEB",
      },
      {
        id: 2,
        name: "ezofis Business",
        description: {
          short: "SaaS platform for Document Management System.",
          long: "ezofis Business is a SaaS platform for Document Management System (DMS). A document management system (DMS) is a software solution that enables an organization to automate the creation, storage, tracking and retrieval of its electronic documents within a single database platform. It's designed to maximize the efficient modification, digitization, filing and accessing of documents and images. DMS is the less advanced version of enterprise content management (ECM).",
        },
        technologies: [
          "HTML",
          "CSS",
          "JavaScript (ES6+)",
          "Vue.js",
          "Quasar.js",
          "Axios.js",
          "Vuex",
          "VueRouter",
          "Vuelidate",
          "Konva.js",
          "Date-fns",
        ],
        link: "https://cloud.ezofis.com/EZOFISSEARCH/signin",
        repository: "",
        screenshotsCount: 22,
        type: "WEB",
      },
      {
        id: 3,
        name: "ezofis Business Mobile",
        description: {
          short: "Mobile version of the ezofis Business web application.",
          long: "ezofis Business Mobile is the mobile version of the ezofis Business web application.",
        },
        technologies: ["Dart", "Flutter", "GetX", "Dio", "Material Design"],
        link: "https://play.google.com/store/apps/details?id=com.ezofis.ezofis_mobile",
        repository: "",
        screenshotsCount: 21,
        type: "MOBILE",
      },
      {
        id: 4,
        name: "ezofis Business v2 Prototype 1",
        description: {
          short: "Prototype v1 of the ezofis Business app.",
          long: "Prototype v1 of the ezofis Business app.",
        },
        technologies: [
          "HTML",
          "CSS",
          "Sass",
          "JavaScript (ES6+)",
          "Vue.js",
          "Quasar.js",
          "Konva.js",
        ],
        link: "https://ezofis-business-p1.netlify.app",
        repository: "",
        screenshotsCount: 24,
        type: "WEB",
      },
      {
        id: 5,
        name: "ezofis Business v2 Prototype 2",
        description: {
          short: "Prototype v2 of the ezofis Business app.",
          long: "Prototype v2 of the ezofis Business app.",
        },
        technologies: [
          "HTML",
          "CSS",
          "Sass",
          "JavaScript (ES6+)",
          "Vue.js",
          "Quasar.js",
          "Konva.js",
        ],
        link: "https://ezofis-business-p2.netlify.app",
        repository: "",
        screenshotsCount: 32,
        type: "WEB",
      },
      {
        id: 6,
        name: "Eterno Forms",
        description: {
          short: "Form builder prototype.",
          long: "Eterno Forms is a feature-rich web application for creating and managing forms.",
        },
        technologies: [
          "HTML",
          "CSS",
          "JavaScript (ES6+)",
          "Vue.js",
          "Quasar.js",
          "Chart.js",
        ],
        link: "https://eterno-forms.netlify.app/",
        repository: "https://github.com/charlesvinoth/eterno-forms",
        screenshotsCount: 12,
        type: "WEB",
      },
      {
        id: 7,
        name: "Sathiyam Oils",
        description: {
          short: "eCommerce mobile app for cold pressed oils.",
          long: "eCommerce mobile app for cold pressed oils.",
        },
        technologies: ["Dart", "Flutter", "GetX", "Dio", "Material Design"],
        link: "https://play.google.com/store/apps/details?id=com.sathiyam.sathiyam",
        repository: "",
        screenshotsCount: 13,
        type: "MOBILE",
      },
      {
        id: 8,
        name: "ezofis Design System",
        description: {
          short: "Reusable components and patterns library.",
          long: "ezofis Design System is a complete set of standards intended to manage design at scale using reusable components and patterns.",
        },
        technologies: [
          "HTML",
          "CSS",
          "JavaScript (ES6+)",
          "Vue.js",
          "Quasar.js",
        ],
        link: "https://ezofis-design-system.netlify.app/Components/Button",
        repository: "https://github.com/charlesvinoth/ezofis-design-system",
        screenshotsCount: 18,
        type: "WEB",
      },
      {
        id: 9,
        name: "Miscellaneous",
        description: {
          short: "Screenshots from various applications and prototypes.",
          long: "Screenshots from various applications and prototypes, that I have worked.",
        },
        technologies: [
          "HTML",
          "CSS",
          "JavaScript (ES6+)",
          "Vue.js",
          "Quasar.js",
          "Dart",
          "Flutter",
          "GetX",
          "Dio",
          "Material Design",
        ],
        link: "",
        repository: "",
        screenshotsCount: 20,
        type: "WEB",
      },
    ],
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
