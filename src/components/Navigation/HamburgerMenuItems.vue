<template>
  <Transition name="showMenu">
    <div
      v-if="menu_visibility"
      class="absolute right-0 bottom-0 h-screen w-full rounded-[40px] bg-brand-darkblue"
    >
      <nav class="flex h-full items-center justify-center">
        <ul class="text-4xl text-brand-creamy">
          <menu-item type="mobileMenu" />
        </ul>
      </nav>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import MenuItem from "@/components/Shared/MenuItem.vue";
defineProps({
  menu_visibility: {
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
