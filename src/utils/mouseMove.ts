import { ref, onMounted, onBeforeUnmount } from "vue";

const mouseMove = () => {
  const clientx = ref(0);
  const clienty = ref(0);

  const updateMouseMove = ($event: MouseEvent) => {
    clientx.value = $event.clientX;
    clienty.value = $event.clientY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", updateMouseMove);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", updateMouseMove);
  });

  return {
    clientx,
    clienty,
  };
};

export default mouseMove;
