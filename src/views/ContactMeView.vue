<template>
  <h1>
    {{ IS_ENGLISH() ? en.contactMsg : de.contactMsg }}
  </h1>
</template>

<script lang="ts" setup>
import { useLanguageStore } from "@/stores/language";
const { en, de, IS_ENGLISH } = useLanguageStore();
</script>
