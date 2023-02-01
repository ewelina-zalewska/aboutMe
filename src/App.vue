<template>
  <div
    class="fixed right-0 bottom-0 h-screen w-full bg-brand-creamy font-sans text-brand-darkblue lg:bg-brand-darkblue lg:text-brand-creamy"
  >
    <the-cursor />
    <main-nav />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TheCursor from "@/components/Shared/TheCursor.vue";
import MainNav from "@/components/Navigation/MainNav.vue";
</script>
