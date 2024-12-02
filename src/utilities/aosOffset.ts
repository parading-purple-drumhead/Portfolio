const vhToPixels = (vh: number) => {
  return Math.floor((window.innerHeight * vh) / 100);
};

const aosOffset = vhToPixels(50);

export default aosOffset;
