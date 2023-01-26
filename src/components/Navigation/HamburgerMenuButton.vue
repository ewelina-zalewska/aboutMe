<template>
  <hamburger-menu-items />

  <action-button
    @click="menuStore.CHANGE_VISIBILITY()"
    type="menuButton"
    :class="rotateIcon"
  >
    <template v-slot:icon>
      <font-awesome-icon :icon="caretIcon" aria-hidden="false" />
    </template>
  </action-button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import HamburgerMenuItems from "@/components/Navigation/HamburgerMenuItems.vue";

import { useMenuStore } from "@/stores/menu";
const menuStore = useMenuStore();

const caretIcon = computed(() =>
  menuStore.MENU_VISIBILITY ? ["fas", "fa-xmark"] : ["fas", "fa-bars"]
);

const rotateIcon = computed(() =>
  menuStore.MENU_VISIBILITY ? "rotate-180" : "rotate-0"
);
</script>
