import { computed } from "vue";
import windowSize from "@/composables/windowSize";
import breakpoints from "@/composables/breakpoints";

const mobileMenuSize = () => {
  const { windowWidth } = windowSize();
  const { lgBreakpoint, screenBreakpoint } = breakpoints();

  const menuVisible = computed(() => windowWidth.value >= lgBreakpoint);

  const mobileMenuVisible = computed(() => {
    return screenBreakpoint.value
      ? "left-0 top-0 w-full justify-center flex overflow-hidden"
      : "absolute right-0 bottom-0 h-full w-full rounded-[40px]";
  });

  const modeChangerStyle = computed(() => {
    return windowWidth.value >= lgBreakpoint
      ? "laptop_modeChangerButton"
      : "mobile_modeChangerButton";
  });
  const buttonSize = computed(() => {
    return screenBreakpoint.value ? "w-16 h-16 text-4xl" : "w-10 h-10 text-2xl";
  });
  return {
    menuVisible,
    mobileMenuVisible,
    modeChangerStyle,
    buttonSize,
  };
};

export default mobileMenuSize;
