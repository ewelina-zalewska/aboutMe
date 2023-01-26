<template>
  <div class="fixed right-0 bottom-0 h-screen w-full bg-brand-creamy text-lg">
    <the-logo />
    <hamburger-menu-button />
    <main-nav />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TheLogo from "@/components/Navigation/TheLogo.vue";
import HamburgerMenuButton from "@/components/Navigation/HamburgerMenuButton.vue";
import MainNav from "@/components/Navigation/MainNav.vue";
</script>
