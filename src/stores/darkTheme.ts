import { defineStore } from "pinia";
import { ref } from "vue";

export const TOGGLE_THEME = "TOGGLE_THEME";
export const GET_MEDIA_PREFERENCE = "GET_MEDIA_PREFERENCE";
export const GET_THEME = "GET_THEME";
export const SET_THEME = "SET_THEME";

export const useDarkThemeStore = defineStore("darkTheme", () => {
  const userTheme = ref("dark-theme");

  const TOGGLE_THEME = () => {
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === "light-theme") {
      SET_THEME("dark-theme");
    } else {
      SET_THEME("light-theme");
    }
  };

  const SET_THEME = (theme: string) => {
    localStorage.setItem("user-theme", theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
  };

  const GET_MEDIA_PREFERENCE = () => {
    const hasDarkPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (hasDarkPreference) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
  };

  const GET_THEME = () => {
    return localStorage.getItem("user-theme");
  };

  return {
    userTheme,
    TOGGLE_THEME,
    GET_MEDIA_PREFERENCE,
    GET_THEME,
    SET_THEME,
  };
});
