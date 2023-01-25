<template>
  <Transition name="showMenu">
    <nav
      v-if="isOpen"
      class="absolute right-0 bottom-0 h-screen w-full rounded-[40px] bg-brand-darkblue"
    >
      <hamburger-menu-items />
    </nav>
  </Transition>
</template>

<script lang="ts" setup>
import HamburgerMenuItems from "@/components/Navigation/HamburgerMenuItems.vue";

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
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
