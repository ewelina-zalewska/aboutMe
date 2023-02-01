<template>
  <the-logo v-if="!menuVisible" />
  <mobile-menu-button v-if="!menuVisible" />
  <laptop-menu v-if="menuVisible" />
</template>

<script lang="ts" setup>
import TheLogo from "@/components/Navigation/TheLogo.vue";
import MobileMenuButton from "@/components/Navigation/MobileMenuButton.vue";
import LaptopMenu from "@/components/Navigation/LaptopMenu.vue";

import mobileMenuSize from "@/composables/mobileMenuSize";
const { menuVisible } = mobileMenuSize();
</script>
