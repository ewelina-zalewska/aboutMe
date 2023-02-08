<template>
  <div
    class="fixed right-0 bottom-0 h-screen w-full bg-theme-bg-color font-sans text-theme-text-color"
  >
    <the-cursor v-if="!isMobile()" />
    <main-nav />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TheCursor from "@/components/Pointer/TheCursor.vue";
import MainNav from "@/components/Navigation/MainNav.vue";

const isMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};
</script>
