<template>
  <hamburger-menu-items :menu_visibility="menu_visibility" />

  <action-button
    @click="change_visibility"
    type="menuButton"
    :class="rotateIcon"
  >
    <template v-slot:icon>
      <font-awesome-icon :icon="caretIcon" aria-hidden="false" />
    </template>
  </action-button>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import HamburgerMenuItems from "@/components/Navigation/HamburgerMenuItems.vue";

import { useRoute } from "vue-router";
const route = useRoute();

const menu_visibility = ref(false);

const change_visibility = () =>
  (menu_visibility.value = !menu_visibility.value);

watch(route, () => (menu_visibility.value = false));

const caretIcon = computed(() =>
  menu_visibility.value ? ["fas", "fa-xmark"] : ["fas", "fa-bars"]
);

const rotateIcon = computed(() =>
  menu_visibility.value ? "rotate-180" : "rotate-0"
);
</script>
