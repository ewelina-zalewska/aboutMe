import tailwindConfig from "tailwindcss/defaultConfig";
import { computed } from "vue";
import windowSize from "@/composables/windowSize";

const breakpoints = () => {
  const { windowWidth, windowHeight } = windowSize();
  const breakpoint_170 = 170;
  const breakpoint_200 = 200;
  const breakpoint_300 = 300;
  const breakpoint_500 = 500;

  const mdBreakpoint =
    Number(tailwindConfig.theme.screens.md.replace("px", "")) || Number(768);
  const lgBreakpoint =
    Number(tailwindConfig.theme.screens.lg.replace("px", "")) || Number(1024);

  const mobileScreenBreakpoint = computed(
    () =>
      (windowWidth.value >= mdBreakpoint &&
        windowHeight.value >= breakpoint_500) ||
      (windowWidth.value <= mdBreakpoint &&
        windowHeight.value >= breakpoint_500)
  );

  const isSmallSize = computed(
    () =>
      windowWidth.value <= breakpoint_170 ||
      windowHeight.value <= breakpoint_200
  );
  const smallScreenBreakpoint = computed(
    () =>
      windowWidth.value <= breakpoint_300 ||
      windowHeight.value <= breakpoint_300
  );
  return {
    mdBreakpoint,
    lgBreakpoint,
    isSmallSize,
    mobileScreenBreakpoint,
    smallScreenBreakpoint,
  };
};

export default breakpoints;
