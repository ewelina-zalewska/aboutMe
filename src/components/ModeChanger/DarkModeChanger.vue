<template>
  <action-button @click="toggleTheme()" :btnClass="modeChangerStyle">
    <template v-slot>
      <font-awesome-icon
        :icon="['fas', 'fa-lightbulb']"
        :class="isSwitched"
        aria-hidden="false"
      />
    </template>
  </action-button>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import mobileMenuSize from "@/composables/mobileMenuSize";
const { modeChangerStyle } = mobileMenuSize();

const userTheme = ref("light-theme");

const isSwitched = computed(
  () =>
    userTheme.value === "light-theme" && "text-theme-color-bulb animate-pulse"
);

const toggleTheme = () => {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
};

const setTheme = (theme: string) => {
  localStorage.setItem("user-theme", theme);
  userTheme.value = theme;
  document.documentElement.className = theme;
};

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
};

const getTheme = () => {
  return localStorage.getItem("user-theme");
};

onMounted(() => {
  const initUserTheme = getTheme() || getMediaPreference();
  setTheme(initUserTheme);
});
</script>
