<template>
  <header>
    <mobile-menu-items
      :menu_isOpen="menu_isOpen"
      class="bg-brand-darkblue text-brand-creamy"
    />
  </header>
  <action-button
    @click="change_isOpen"
    btn_style="mobileMenuButton"
    :class="[rotateIcon, buttonSize]"
  >
    <template v-slot:icon>
      <font-awesome-icon :icon="caretIcon" aria-hidden="false" />
    </template>
  </action-button>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import mobileMenuSize from "@/composables/mobileMenuSize";
import ActionButton from "@/components/Shared/ActionButton.vue";
import MobileMenuItems from "@/components/Navigation/MobileMenuItems.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const { buttonSize } = mobileMenuSize();

const menu_isOpen = ref(false);
const change_isOpen = () => (menu_isOpen.value = !menu_isOpen.value);

watch(route, () => (menu_isOpen.value = false));

const caretIcon = computed(() =>
  menu_isOpen.value ? ["fas", "fa-xmark"] : ["fas", "fa-bars"]
);

const rotateIcon = computed(() =>
  menu_isOpen.value ? "rotate-180" : "rotate-0"
);
</script>
