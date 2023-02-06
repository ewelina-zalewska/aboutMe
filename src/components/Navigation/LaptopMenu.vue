<template>
  <header class="w-full" :style="{ height: `${headerSize}px` }">
    <div
      id="laptopMenu"
      class="m-h-min fixed top-0 left-0 w-full py-6 lg:text-menu-md xl:text-menu-lg"
    >
      <div class="mx-auto flex h-full flex-nowrap items-center px-10">
        <laptop-menu-logotyp />

        <nav class="ml-auto flex h-full flex-nowrap">
          <menu-item
            list="laptopMenu-list"
            listItem="laptopMenu-listItem"
            anchor="laptopMenu-anchor"
          />
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import MenuItem from "@/components/Shared/MenuItem.vue";
import LaptopMenuLogotyp from "@/components/Navigation/LaptopMenuLogotyp.vue";
import getComputedStyle from "@/composables/getComputedStyle";

const getLineHeight = ref(0);
const getPaddingSize = ref(0);
const headerSize = computed(() => {
  return getLineHeight.value + getPaddingSize.value * 2;
});

onMounted(() => {
  const el: HTMLElement | null = document.querySelector("#laptopMenu");
  if (el) {
    const { lineHeightComputed, paddingComputed } = getComputedStyle(el);
    getLineHeight.value = lineHeightComputed;
    getPaddingSize.value = paddingComputed;

    window.addEventListener("resize", () => {
      const { lineHeightComputed, paddingComputed } = getComputedStyle(el);
      getLineHeight.value = lineHeightComputed;
      getPaddingSize.value = paddingComputed;
      console.log(getLineHeight.value, getPaddingSize.value);
    });
  }
});
</script>
