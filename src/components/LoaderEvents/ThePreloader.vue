<template>
  <div
    class="flex h-screen w-screen flex-col items-center justify-center bg-theme-bg-color text-theme-text-color"
  >
    <div class="my-4 text-[40px] sm:text-[48px] md:text-[58px] lg:text-[64px]">
      <span>{{ letter }}</span>
      <span class="animate-pulse-fast"> | </span>
    </div>
    <div
      class="z-[10000] inline-block h-16 w-16 after:m-2 after:block after:h-10 after:w-10 after:animate-spin-fast after:rounded-full after:border-[6px] after:border-colors-loader after:content-['']"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const letters: string[] = "Hello World".split("");

const letter = ref("");
const interval = ref<ReturnType<typeof setInterval>>();

let i = 0;
const addLetter = () => {
  interval.value = setInterval(() => {
    letter.value += letters[i++];
    if (i === letters.length) clearInterval(interval.value);
  }, 50);
};

onMounted(addLetter);
</script>
