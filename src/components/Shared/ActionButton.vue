<template>
  <button :class="buttonClass">
    {{ text }}
    <slot name="icon"></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  btn_style: {
    type: String || Array,
    required: true,
    default: "mobileMenuButton",
    validator(value: string) {
      return [
        "laptop_modeChangerButton",
        "mobileMenuButton",
        "mobile_modeChangerButton",
      ].includes(value);
    },
  },
  text: {
    type: String,
    required: false,
  },
});

const { btn_style } = toRefs(props);
const buttonClass = computed(() => {
  return { [btn_style.value]: true };
});
</script>

<style scoped>
.mobileMenuButton {
  @apply absolute bottom-[2vh] right-[2vh] z-50 transform rounded-full bg-brand-darkblue text-brand-creamy shadow-creamy transition-transform duration-200 ease-in-out;
}

.mobile_modeChangerButton {
  @apply px-4 py-[2vh];
}
.laptop_modeChangerButton {
  @apply ml-[5vw];
}
</style>
