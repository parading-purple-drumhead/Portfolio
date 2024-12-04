const screenWidth = window.innerWidth;

const vhToPixels = (screenWidth: number) => {
  let offset = 0;

  if (screenWidth >= 1024) {
    offset = 50;
  } else if (screenWidth >= 768) {
    offset = 30;
  } else if (screenWidth >= 640) {
    offset = 25;
  } else {
    offset = 20;
  }

  return Math.floor((window.innerHeight * offset) / 100);
};

const aosOffset = vhToPixels(screenWidth);

export default aosOffset;
