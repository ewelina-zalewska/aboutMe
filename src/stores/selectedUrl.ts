import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const SET_URL = "SET_URL";

export const useSelectedUrlStore = defineStore("selectedUrl", () => {
  const selectedUrl = ref("");

  const SET_URL = (itemUrl: string) => {
    localStorage.setItem("selected-url", itemUrl);
    // if (!selectedUrl.value) selectedUrl.value = "/";
    selectedUrl.value = itemUrl;
  };

  const GET_URL = () => {
    return localStorage.getItem("selected-url");
  };

  onMounted(() => {
    const initSelectedUrl = GET_URL() || "/";
    SET_URL(initSelectedUrl);
  });

  return {
    selectedUrl,
    SET_URL,
  };
});
