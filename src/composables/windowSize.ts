import { ref, onMounted, onBeforeUnmount } from "vue";

const windowSize = () => {
  const windowWidth = ref(0);
  const windowHeight = ref(0);

  const updateWindowSize = () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  };

  onMounted(() => {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWindowSize);
  });

  return {
    windowWidth,
    windowHeight,
    updateWindowSize,
  };
};

export default windowSize;
