<template>
  <action-button
    btnClass="absolute left-[3vw] top-[3vw] z-[99] h-[10vw] max-h-[48px] w-[10vw] max-w-[48px] overflow-hidden rounded-[50%]  mix-blend-difference"
  >
    <template v-slot>
      <div class="relative h-full w-full">
        <div class="commonClass left-0 top-0 h-full w-[18%]"></div>
        <div
          class="commonClass right-[22%] top-[20%] h-[60%] w-[5%] rotate-[21deg]"
        ></div>
        <div class="commonClass left-[23%] top-0 h-[13%] w-[77%]"></div>
        <div
          class="commonClass top-[50%] left-0 h-[13%] w-[35%] -translate-y-1/2"
        ></div>
        <div class="commonClass bottom-0 left-[23%] h-[13%] w-[77%]"></div>
        <div
          class="commonClass top-0 left-[50%] h-[25%] w-[13%] -translate-x-1/2"
        ></div>
        <div
          class="commonClass right-[50%] bottom-0 h-[25%] w-[13%] translate-x-1/2"
        ></div>
      </div>
    </template>
  </action-button>
</template>

<script lang="ts" setup>
import ActionButton from "@/components/Shared/ActionButton.vue";
</script>

<style scoped>
.commonClass {
  @apply absolute bg-theme-bg-color-logo;
}
</style>
