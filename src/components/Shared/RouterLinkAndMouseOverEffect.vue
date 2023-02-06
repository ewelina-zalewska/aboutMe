<template>
  <router-link
    :to="{ path: pathName }"
    @mouseover="MOUSEOVER"
    @mouseleave="MOUSELEAVE"
  >
    <slot></slot>
  </router-link>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import { usePointerStore } from "@/stores/pointer";
const pointerStore = usePointerStore();
const MOUSEOVER = () => pointerStore.MOUSEOVER();
const MOUSELEAVE = () => pointerStore.MOUSELEAVE();

defineProps({
  pathName: {
    type: String as PropType<string>,
    required: true,
    default: "/",
  },
});
</script>
