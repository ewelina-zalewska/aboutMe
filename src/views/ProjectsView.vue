<template>
  <h1>{{ IS_ENGLISH() ? en.projectMsg : de.projectMsg }}</h1>
  <router-link
    :to="projectLink"
    class="border-brand-gray-2 hover:shadow-gray bg-white mx-auto block rounded border-solid"
  >
    <h2>SPACECRAFT</h2>
  </router-link>
  <router-link
    :to="projectLink"
    class="border-brand-gray-2 hover:shadow-gray bg-white mx-auto block rounded border-solid"
  >
    <h2>MY_WEB_PAGE</h2>
  </router-link>
</template>

<script lang="ts" setup>
import { computed, type PropType } from "vue";
import { useLanguageStore } from "@/stores/language";
const { en, de, IS_ENGLISH } = useLanguageStore();
// const props = defineProps({
//   job: {
//     type: Object as PropType<Job>,
//     required: true,
//   },
// });

// const jobPageLink = computed(() => `/jobs/results/${props.job.id}`);

const projectLink = computed(() => `/projects/spacecraft`);
</script>
