<template>
  <web-page-to-small-size v-if="isSmallSize" />
  <web-page-container v-if="!isSmallSize" />
</template>

<script lang="ts" setup>
import WebPageContainer from "@/components/AboutMe/WebPageContainer.vue";
import WebPageToSmallSize from "@/components/AboutMe/WebPageToSmallSize.vue";
import breakpoints from "@/composables/breakpoints";
const { isSmallSize } = breakpoints();
</script>

<style>
* {
  cursor: none !important;
}
</style>
