<template>
  <ul :class="ulClass">
    <li :class="listClass" v-for="menuItem in menuItems" :key="menuItem.text">
      <router-link :to="menuItem.url" :class="aClass"
        >{{ menuItem.text.toUpperCase() }}
      </router-link>
    </li>
    <action-button text="DE" :btn_style="modeChangerStyle" />
    <action-button text="SUN" :btn_style="modeChangerStyle" />
  </ul>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import type { MenuItem } from "@/components/Navigation/types";
import mobileMenuSize from "@/composables/mobileMenuSize";
const { modeChangerStyle } = mobileMenuSize();

const menuItems = ref<MenuItem[]>([
  { text: "Home", url: "/" },
  { text: "About Me", url: "/aboutme" },
  { text: "Projects", url: "/projects" },
  { text: "Contact", url: "/contact" },
]);

const props = defineProps({
  ulClass: {
    type: String,
    required: false,
  },
  liClass: {
    type: String,
    required: false,
    default: "laptopMenu",
    validator(value: string) {
      return ["laptopMenu", "mobileMenu"].includes(value);
    },
  },
  aClass: {
    type: String,
    required: false,
  },
});

const { liClass } = toRefs(props);
const listClass = computed(() => {
  return { [liClass.value]: true };
});
</script>

<style scoped>
.mobileMenu {
  @apply flex justify-center py-[2vh];
}

.laptopMenu {
  @apply ml-[5vw] h-full first:ml-0;
}
</style>
