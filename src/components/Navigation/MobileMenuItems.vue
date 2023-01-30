<template>
  <Transition :name="menu_animated">
    <div v-if="menu_isOpen" :class="[menuVisible]">
      <nav class="flex h-full items-center justify-center">
        <menu-item itemClass="mobileMenu" />
      </nav>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import tailwindConfig from "tailwindcss/defaultConfig";
import { useMenuStore } from "@/stores/menu";
import MenuItem from "@/components/Shared/MenuItem.vue";

defineProps({
  menu_isOpen: {
    type: Boolean,
    required: true,
  },
});
const mdBreakpoint =
  Number(tailwindConfig.theme.screens.md.replace("px", "")) || Number(768);
const menuStore = useMenuStore();
const screenBreakpoint = computed(() => menuStore.windowWidth > mdBreakpoint);

const menuVisible = computed(() => {
  return screenBreakpoint.value
    ? "left-0 right-0 h-[30vh] w-full justify-center bg-brand-darkblue flex"
    : "absolute right-0 bottom-0 h-full w-full rounded-[40px] bg-brand-darkblue";
});
const menu_animated = computed(() => {
  return screenBreakpoint.value ? "showTabletMenu" : "showHandyMenu";
});
</script>

<style scoped>
@keyframes showHandyMenu {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes showTabletMenu {
  0% {
    height: 0;
  }
  100% {
    height: 30vh;
  }
}

.showHandyMenu-enter-active {
  animation: showHandyMenu 0.6s ease-in-out;
}
.showHandyMenu-leave-active {
  animation: showHandyMenu 0.6s reverse ease-in-out;
}
.showTabletMenu-enter-active {
  animation: showTabletMenu 0.6s ease-in-out;
}
.showTabletMenu-leave-active {
  animation: showTabletMenu 0.6s reverse ease-in-out;
}
</style>
