const getComputedStyle = (el: HTMLElement) => {
  const fontSizeComputed = parseInt(window.getComputedStyle(el).fontSize) || 0;
  const lineHeightComputed =
    parseInt(window.getComputedStyle(el).lineHeight) || 0;
  const paddingComputed = parseInt(window.getComputedStyle(el).padding) || 0;

  return {
    fontSizeComputed,
    lineHeightComputed,
    paddingComputed,
  };
};

export default getComputedStyle;

// const getComputedStyle = (el: HTMLElement) => {
//   return parseInt(window.getComputedStyle(el).fontSize) || 0;
// };

// export default getComputedStyle;
