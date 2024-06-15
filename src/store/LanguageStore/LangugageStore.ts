import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { LanguageTypes } from "./types";
import i18n from "@/plugins/languagePlugin/languagePlugin";

const storageName = import.meta.env.VITE_STORAGE_NAME;

console.log(import.meta.env);

export const languageStore = defineStore({
  id: "language",
  state: () => ({
    language: useStorage(storageName, {
      flag: "us",
      language: "en",
      title: "English",
    } as LanguageTypes),
  }),
  getters: {
    getCurrentLanguage: (state) => {
      return state.language
    },
  },
  actions: {
    setLanguage(){
      i18n.global.locale.value = this.language.language;
    },
    getLanguage(language: any) {
      this.language = language;
    },
    changeCurrentLanguage(item: any) {
      this.language = item;
      i18n.global.locale.value = item.language.toLocaleLowerCase()
    },
  },
});
