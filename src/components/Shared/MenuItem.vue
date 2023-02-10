<template>
  <ul :class="['list-none', listClass]">
    <li
      :class="listItemClass"
      v-for="menuItem in menuItems"
      :key="menuItem.text"
    >
      <router-link-and-mouse-over-effect
        :pathName="menuItem.url"
        :class="[
          selectedUrlStore.selectedUrl === menuItem.url
            ? 'selectedMenuItem'
            : null,
          anchor,
        ]"
        @click="selectedUrlStore.SET_URL(menuItem.url)"
      >
        {{ menuItem.text.toUpperCase() }}
      </router-link-and-mouse-over-effect>
    </li>
    <div class="flex">
      <dark-mode-changer />
      <language-changer />
    </div>
  </ul>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, type PropType } from "vue";
import type { MenuItem } from "@/components/Navigation/types";
import RouterLinkAndMouseOverEffect from "@/components/Shared/RouterLinkAndMouseOverEffect.vue";
import DarkModeChanger from "@/components/ModeChanger/DarkModeChanger.vue";
import LanguageChanger from "@/components/ModeChanger/LanguageChanger.vue";
import { useSelectedUrlStore } from "@/stores/selectedUrl";

const selectedUrlStore = useSelectedUrlStore();

const menuItems = ref<MenuItem[]>([
  { text: "Home", url: "/" },
  { text: "About Me", url: "/aboutme" },
  { text: "Projects", url: "/projects" },
  { text: "Contact", url: "/contact" },
]);

const props = defineProps({
  list: {
    type: String as PropType<string>,
    required: true,
    validator(value: string) {
      return ["laptopMenu-list", "mobileMenu-list"].includes(value);
    },
  },
  listItem: {
    type: String as PropType<string>,
    required: true,
    validator(value: string) {
      return ["laptopMenu-listItem", "mobileMenu-listItem"].includes(value);
    },
  },
  anchor: {
    type: String as PropType<string>,
    required: false,
  },
});

const { list } = toRefs(props);
const listClass = computed(() => {
  return { [list.value]: true };
});

const { listItem } = toRefs(props);
const listItemClass = computed(() => {
  return { [listItem.value]: true };
});
</script>

<style scoped>
.selectedMenuItem {
  @apply relative;
}

:before,
:after {
  @apply absolute top-[50%] -right-[0.7em] h-[0.4em] w-[0.4em] -translate-y-[50%] rounded-full
  bg-brand-darkblue bg-theme-text-color-menu content-[""] lg:bg-theme-text-color;
}
:after {
  @apply -left-[0.7em];
}

.mobileMenu-list {
  @apply my-[5vh];
}
.laptopMenu-list {
  @apply flex h-full;
}
.mobileMenu-listItem {
  @apply flex justify-center py-[3%];
}

.laptopMenu-listItem {
  @apply ml-[5vw] h-full first:ml-0;
}
.laptopMenu-anchor {
  @apply flex h-full items-center py-2.5;
}
</style>
