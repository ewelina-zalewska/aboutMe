<template>
  <button
    type="button"
    @mouseover="MOUSEOVER"
    @mouseleave="MOUSELEAVE"
    :class="[buttonClass, animatedBtn, resizedBtn]"
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
  animatedBtn: {
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
  @apply absolute bottom-[2vh] right-[2vh] z-[100] h-14 w-14 rounded-full border border-theme-text-color-menu bg-theme-bg-color-menu text-theme-text-color-menu transition-transform;
}

.mobile_modeChangerButton {
  @apply basis-1/2 p-[2vh];
}
.laptop_modeChangerButton {
  @apply ml-[5vw] min-w-[25px];
}
</style>
