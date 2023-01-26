<template>
  <li
    v-for="menuItem in menuItems"
    :key="menuItem.text"
    class="flex justify-center py-[10%]"
  >
    <router-link :to="menuItem.url"
      >{{ menuItem.text.toUpperCase() }}
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { MenuItem } from "@/components/Navigation/types";

const menuItems = ref<MenuItem[]>([
  { text: "Home", url: "/" },
  { text: "About Me", url: "/aboutme" },
  { text: "Projects", url: "/projects" },
  { text: "Contact", url: "/contact" },
]);
</script>
