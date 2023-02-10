<template>
  <action-button
    @click="darkThemeStore.TOGGLE_THEME()"
    :btnClass="modeChangerStyle"
  >
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
import { computed } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import mobileMenuSize from "@/composables/mobileMenuSize";
import { useDarkThemeStore } from "@/stores/darkTheme";

const { modeChangerStyle } = mobileMenuSize();
const darkThemeStore = useDarkThemeStore();

const userTheme = computed(() => darkThemeStore.userTheme);
const isSwitched = computed(
  () =>
    userTheme.value === "light-theme" && "text-theme-color-bulb animate-pulse"
);
</script>
