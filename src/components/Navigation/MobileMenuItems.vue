<template>
  <Transition :name="screenBreakpoint ? 'showTabletMenu' : 'showHandyMenu'">
    <div
      :class="[
        mobileMenuVisible,
        {
          'h-screen-1/2': screenBreakpoint,
          'text-3xl': screenBreakpoint,
          'text-4xl': !screenBreakpoint,
        },
      ]"
      v-if="menu_isOpen"
    >
      <nav class="flex h-full items-center justify-center bg-brand-darkblue">
        <menu-item liClass="mobileMenu" />
      </nav>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import MenuItem from "@/components/Shared/MenuItem.vue";

import breakpoints from "@/composables/breakpoints";
import mobileMenuSize from "@/composables/mobileMenuSize";

const { screenBreakpoint } = breakpoints();
const { mobileMenuVisible } = mobileMenuSize();

defineProps({
  menu_isOpen: {
    type: Boolean,
    required: true,
  },
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
    height: 50vh;
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
