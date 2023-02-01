import tailwindConfig from "tailwindcss/defaultConfig";
import { computed } from "vue";
import windowSize from "@/composables/windowSize";

const breakpoints = () => {
  const { windowWidth, windowHeight } = windowSize();
  const breakpoint = 500;

  const mdBreakpoint =
    Number(tailwindConfig.theme.screens.md.replace("px", "")) || Number(768);
  const lgBreakpoint =
    Number(tailwindConfig.theme.screens.lg.replace("px", "")) || Number(1024);

  const screenBreakpoint = computed(
    () =>
      (windowWidth.value >= mdBreakpoint && windowHeight.value >= breakpoint) ||
      (windowWidth.value <= mdBreakpoint && windowHeight.value >= breakpoint)
  );

  return {
    breakpoint,
    mdBreakpoint,
    lgBreakpoint,
    screenBreakpoint,
  };
};

export default breakpoints;
