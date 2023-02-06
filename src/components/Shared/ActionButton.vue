<template>
  <button
    type="button"
    @mouseover="MOUSEOVER"
    @mouseleave="MOUSELEAVE"
    :class="[buttonClass, animate, resizedBtn]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs, type PropType } from "vue";

import { usePointerStore } from "@/stores/pointer";
const pointerStore = usePointerStore();
const MOUSEOVER = () => pointerStore.MOUSEOVER();
const MOUSELEAVE = () => pointerStore.MOUSELEAVE();

const props = defineProps({
  animate: {
    type: String as PropType<string>,
    required: false,
  },
  resizedBtn: {
    type: String as PropType<string>,
    required: false,
  },
  btnClass: {
    type: String as PropType<string>,
    required: true,
    validator(value: string) {
      return [
        "laptop_modeChangerButton",
        "mobileMenuButton",
        "mobile_modeChangerButton",
      ].includes(value);
    },
  },
});

const { btnClass } = toRefs(props);
const buttonClass = computed(() => {
  return { [btnClass.value]: true };
});
</script>

<style scoped>
.mobileMenuButton {
  @apply absolute bottom-[2vh] right-[2vh] z-[100] h-14 w-14 transform rounded-full bg-brand-darkblue text-brand-creamy shadow-creamy transition-transform duration-200 ease-in-out;
}

.mobile_modeChangerButton {
  @apply px-4 py-[2vh];
}
.laptop_modeChangerButton {
  @apply ml-[5vw];
}
</style>
