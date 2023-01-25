<template>
  <hamburger-menu-is-opened :isOpen="isOpen" />

  <action-button @click="open" type="menuButton" :class="rotateIcon">
    <template v-slot:icon>
      <font-awesome-icon :icon="caretIcon" aria-hidden="false" />
    </template>
  </action-button>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import HamburgerMenuIsOpened from "@/components/Navigation/HamburgerMenuIsOpened.vue";

let isOpen = ref(false);

const open = () => {
  isOpen.value = !isOpen.value;
};

const caretIcon = computed(() =>
  isOpen.value ? ["fas", "fa-xmark"] : ["fas", "fa-bars"]
);

const rotateIcon = computed(() => (isOpen.value ? "rotate-180" : "rotate-0"));
</script>
