import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const CHANGE_VISIBILITY = "CHANGE_VISIBILITY";
export const MENU_VISIBILITY = "MENU_VISIBILITY";

export const useMenuStore = defineStore("menu", () => {
  const isOpen = ref(false);

  const CHANGE_VISIBILITY = () => {
    isOpen.value = !isOpen.value;
  };

  const MENU_VISIBILITY = computed(() => isOpen.value);
  return {
    isOpen,
    CHANGE_VISIBILITY,
    MENU_VISIBILITY,
  };
});
