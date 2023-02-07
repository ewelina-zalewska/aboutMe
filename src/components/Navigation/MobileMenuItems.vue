<template>
  <Transition name="showHandyMenu">
    <mobile-menu-logotyp v-if="menu_isOpen" />
  </Transition>
  <Transition
    :name="mobileScreenBreakpoint ? 'showTabletMenu' : 'showHandyMenu'"
  >
    <div
      v-if="menu_isOpen"
      :class="[
        'bg-brand-darkblue text-brand-creamy',
        mobileMenuVisible,
        {
          'text-4xl': !mobileScreenBreakpoint && !smallScreenBreakpoint,
          'text-3xl': mobileScreenBreakpoint && !smallScreenBreakpoint,
          'text-xl': smallScreenBreakpoint,
        },
      ]"
    >
      <nav class="flex items-center justify-center">
        <menu-item list="mobileMenu-list" listItem="mobileMenu-listItem" />
      </nav>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import MenuItem from "@/components/Shared/MenuItem.vue";
import MobileMenuLogotyp from "@/components/Navigation/MobileMenuLogotyp.vue";
import breakpoints from "@/composables/breakpoints";
import mobileMenuSize from "@/composables/mobileMenuSize";

const { mobileScreenBreakpoint, smallScreenBreakpoint } = breakpoints();
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
    max-height: 0;
  }
  100% {
    max-height: 100vh;
  }
}

.showHandyMenu-enter-active {
  animation: showHandyMenu 0.6s ease-in-out;
}
.showHandyMenu-leave-active {
  animation: showHandyMenu 0.6s reverse ease-in-out;
}
.showTabletMenu-enter-active {
  animation: showTabletMenu 1s linear;
}
.showTabletMenu-leave-active {
  animation: showTabletMenu 1s reverse linear;
}
</style>
