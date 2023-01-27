<template>
  <li
    class="menu"
    :class="menuClass"
    v-for="menuItem in menuItems"
    :key="menuItem.text"
  >
    <router-link :to="menuItem.url"
      >{{ menuItem.text.toUpperCase() }}
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from "vue";
import type { MenuItem } from "@/components/Navigation/types";

const props = defineProps({
  type: {
    type: String,
    required: true,
    default: "desktopMenu",
    validator(value: string) {
      return ["desktopMenu", "mobileMenu"].includes(value);
    },
  },
});

const { type } = toRefs(props);
const menuClass = computed(() => {
  return { [type.value]: true };
});

const menuItems = ref<MenuItem[]>([
  { text: "Home", url: "/" },
  { text: "About Me", url: "/aboutme" },
  { text: "Projects", url: "/projects" },
  { text: "Contact", url: "/contact" },
]);
</script>

<style scoped>
menu {
  @apply flex;
}

.mobileMenu {
  @apply justify-center py-[10%];
}
</style>
