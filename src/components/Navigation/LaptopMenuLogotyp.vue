<template>
  <div
    id="laptopMenu-logotyp"
    class="h-full lg:text-portfolio-md xl:text-portfolio-lg"
  >
    <router-link-and-mouse-over-effect
      :pathName="pathName"
      @click="selectedUrlStore.SET_URL(pathName)"
    >
      PORTFOLIO
      <span :style="{ fontSize: `${fontSize}px` }" class="block text-center">{{
        currentYear
      }}</span>
    </router-link-and-mouse-over-effect>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import RouterLinkAndMouseOverEffect from "@/components/Shared/RouterLinkAndMouseOverEffect.vue";
import getComputedStyle from "@/composables/getComputedStyle";
import { useSelectedUrlStore } from "@/stores/selectedUrl";

const selectedUrlStore = useSelectedUrlStore();
const pathName = "/projects";

const currentYear = ref(new Date().getFullYear());
const getSize = ref(0);
const fontSize = computed(() => getSize.value / 2);

onMounted(() => {
  const el: HTMLElement | null = document.querySelector("#laptopMenu-logotyp");

  if (el) {
    const { fontSizeComputed } = getComputedStyle(el);
    getSize.value = fontSizeComputed;

    window.addEventListener("resize", () => {
      const { fontSizeComputed } = getComputedStyle(el);
      getSize.value = fontSizeComputed;
    });
  }
});
</script>
