<template>
  <Transition name="showMenu">
    <div
      v-if="menuStore.MENU_VISIBILITY"
      class="absolute right-0 bottom-0 h-screen w-full rounded-[40px] bg-brand-darkblue"
    >
      <nav class="flex h-full items-center justify-center">
        <ul class="text-4xl text-brand-creamy">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.text"
            class="flex justify-center py-[10%]"
          >
            <router-link :to="menuItem.url" @click="menuStore.CHANGE_VISIBILITY"
              >{{ menuItem.text.toUpperCase() }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { MenuItem } from "@/components/Navigation/types";
import { useMenuStore } from "@/stores/menu";
const menuStore = useMenuStore();

const menuItems = ref<MenuItem[]>([
  { text: "Home", url: "/" },
  { text: "About Me", url: "/aboutme" },
  { text: "Projects", url: "/projects" },
  { text: "Contact", url: "/contact" },
]);
</script>

<style scoped>
.showMenu-enter-active,
.showMenu-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.showMenu-enter-from,
.showMenu-leave-to {
  opacity: 0;
}
</style>
