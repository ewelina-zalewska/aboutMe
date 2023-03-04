import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import getEnglish from "@/composables/getEnglish";
import getGerman from "@/composables/getGerman";

export const SET_URL = "SET_URL";
export const IS_ENGLISH = "IS_ENGLISH";

export const useLanguageStore = defineStore("language", () => {
  const { en } = getEnglish();
  const { de } = getGerman();

  const languages = ref<string[]>(["EN", "DE"]);
  const selectedLanguage = ref("");

  const lang = computed(() => selectedLanguage.value.toLowerCase());
  const IS_ENGLISH = () => lang.value === "en";

  const SET_URL = (language: string) => {
    localStorage.setItem("selected-language", language);
    selectedLanguage.value = language;
  };

  const GET_URL = () => {
    return localStorage.getItem("selected-language");
  };

  onMounted(() => {
    const initSelectedUrl = GET_URL() || "EN";
    SET_URL(initSelectedUrl);
  });

  return {
    languages,
    selectedLanguage,
    lang,
    SET_URL,
    IS_ENGLISH,
    en,
    de,
  };
});
