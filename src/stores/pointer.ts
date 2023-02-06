import { defineStore } from "pinia";
import { ref } from "vue";
export const MOUSEOVER = "MOUSEOVER";
export const MOUSELEAVE = "MOUSELEAVE";

export const usePointerStore = defineStore("pointer", () => {
  const resizedEl = ref(false);

  const MOUSEOVER = () => (resizedEl.value = true);
  const MOUSELEAVE = () => (resizedEl.value = false);

  return {
    resizedEl,
    MOUSEOVER,
    MOUSELEAVE,
  };
});
