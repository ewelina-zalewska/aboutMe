<template>
  <div v-if="isLoading">
    <the-preloader />
  </div>
  <div v-else>
    <web-page-to-small-size v-if="isSmallSize" />
    <web-page-container v-if="!isSmallSize" />
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from "vue";
import ThePreloader from "@/components/LoaderEvents/ThePreloader.vue";
import WebPageContainer from "@/components/AboutMe/WebPageContainer.vue";
import WebPageToSmallSize from "@/components/AboutMe/WebPageToSmallSize.vue";
import { useDarkThemeStore } from "@/stores/darkTheme";
import breakpoints from "@/composables/breakpoints";
const darkThemeStore = useDarkThemeStore();
const { isSmallSize } = breakpoints();

const isLoading = ref(true);

onMounted(() =>
  nextTick(() => {
    const initUserTheme =
      darkThemeStore.GET_THEME() || darkThemeStore.GET_MEDIA_PREFERENCE();
    darkThemeStore.SET_THEME(initUserTheme);
    // isLoading.value = false;
    setTimeout(() => {
      isLoading.value = false;
    }, 3000);
  })
);
</script>
