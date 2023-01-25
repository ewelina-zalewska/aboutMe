<template>
  <button :class="buttonClass">
    {{ text }}
    <slot name="icon"></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
    default: "menuButton",
    validator(value: string) {
      return ["loginButton", "menuButton"].includes(value);
    },
  },
  text: {
    type: String,
    required: false,
  },
});

const { type } = toRefs(props);
const buttonClass = computed(() => {
  return { [type.value]: true };
});
</script>

<style scoped>
button {
  @apply absolute h-16 w-16 transform transition-transform duration-200 ease-in-out;
}

.logoButton {
  @apply left-[2vh] top-[2vh] z-40 bg-transparent text-3xl text-brand-darkblue;
}
.menuButton {
  @apply right-[2vh] bottom-[2vh] z-50 rounded-full bg-brand-darkblue text-3xl text-brand-creamy shadow-creamy;
}
</style>
