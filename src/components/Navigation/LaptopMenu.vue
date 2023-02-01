<template>
  <header class="w-full lg:h-[112px]">
    <div
      class="m-h-min fixed top-0 left-0 w-full py-6 lg:text-menu-md xl:text-menu-lg"
    >
      <div class="mx-auto flex h-full flex-nowrap items-center px-10">
        <router-link
          :to="{ name: 'Projects' }"
          class="flex h-full flex-col lg:text-portfolio-md xl:text-portfolio-lg"
        >
          <span>PORTFOLIO</span>
          <span class="text-center">2023</span>
        </router-link>

        <nav class="ml-auto flex h-full flex-nowrap">
          <menu-item
            ulClass="flex h-full list-none"
            liClass="laptopMenu"
            aClass="flex h-full items-center py-2.5"
          />
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import MenuItem from "@/components/Shared/MenuItem.vue";
</script>

<style scoped></style>
