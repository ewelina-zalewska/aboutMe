import { computed } from "vue";
import windowSize from "@/composables/windowSize";
import breakpoints from "@/composables/breakpoints";

const mobileMenuSize = () => {
  const { windowWidth } = windowSize();
  const { lgBreakpoint, mobileScreenBreakpoint } = breakpoints();

  const menuVisible = computed(() => windowWidth.value >= lgBreakpoint);

  const mobileMenuVisible = computed(() => {
    return mobileScreenBreakpoint.value
      ? "left-0 top-0 w-full justify-center flex overflow-hidden h-auto"
      : "absolute flex justify-center right-0 bottom-0 h-full w-full rounded-[40px]";
  });

  const modeChangerStyle = computed(() => {
    return windowWidth.value >= lgBreakpoint
      ? "laptop_modeChangerButton"
      : "mobile_modeChangerButton";
  });
  const buttonSize = computed(() => {
    return mobileScreenBreakpoint.value
      ? "w-14 h-14 text-4xl "
      : "w-10 h-10 text-2xl";
  });
  return {
    menuVisible,
    mobileMenuVisible,
    modeChangerStyle,
    buttonSize,
  };
};

export default mobileMenuSize;
