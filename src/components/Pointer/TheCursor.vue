<template>
  <div
    ref="cursorRef"
    :style="{ left: x + 'px', top: y + 'px' }"
    :class="[
      'border-lg pointer-events-none absolute z-[999] h-10 w-10 rotate-45 rounded-full border  bg-theme-color-cursor mix-blend-difference transition-transform',
      { 'scale-[200%]': resizedEl },
    ]"
  ></div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import mouseMove from "@/utils/mouseMove";
import { useElementSize } from "@vueuse/core";
import { usePointerStore } from "@/stores/pointer";

const { clientx, clienty } = mouseMove();
const x = computed((): number => clientx.value - width.value / 2);
const y = computed((): number => clienty.value - height.value / 2);

const cursorRef = ref(null);
const { width, height } = useElementSize(cursorRef);

const pointerStore = usePointerStore();
const resizedEl = computed(() => pointerStore.resizedEl);
</script>
