let miniConsole = [];
let themeColors = {
  bg: "#595758",
  accent: "#FF3F00",
  fg: "#EDF060",
  aux1: "#BB9BB0",
  aux2: "#1A936F",
};
function rescaleImage(baseImage, width, height, mapFunc) {
  let scaledTextureWidth = width || 256,
    scaledTextureHeight = height || 256;
  let scaledImage = createImage(scaledTextureWidth, scaledTextureHeight);
  scaledImage.loadPixels();
  baseImage.loadPixels();
  let functionDomain = baseImage.pixels.length;
  let functionRange = scaledImage.pixels.length;
  let xScale = baseImage.width / scaledImage.width;
  let yScale = baseImage.height / scaledImage.height;
  for (let y = 0; y < scaledImage.height; y++) {
    for (let x = 0; x < scaledImage.width; x++) {
      let index = (x + y * scaledImage.width) * 4;
      let mappedX = Math.floor(x * xScale),
        mappedY = Math.floor(y * yScale);
      let mappedIndex = (mappedX + mappedY * baseImage.width) * 4;
      let newPixel = scaledImage.pixels;
      let oldPixel = baseImage.pixels;
      //TODO : functional parameters required
      // if (mapFunc !== undefined) {
      //   newPixel[index] = mapFunc(oldPixel[mappedIndex]);
      //   newPixel[index + 1] = 250 + mapFunc(oldPixel[mappedIndex + 1]);
      //   newPixel[index + 2] = mapFunc(oldPixel[mappedIndex + 2]);
      //   // scaledImage.pixels[index + 3] = mapFunc(
      //   //   baseImage.pixels[mappedIndex + 3]
      //   // );
      //   // console.log("mapped:", oldPixel[index], newPixel[index]);
      // } else {
      newPixel[index] = oldPixel[mappedIndex];
      newPixel[index + 1] = oldPixel[mappedIndex + 1];
      newPixel[index + 2] = oldPixel[mappedIndex + 2]; //random(255);
      newPixel[index + 3] = oldPixel[mappedIndex + 3]; // 255;
      // }
    }
  }
  scaledImage.updatePixels();
  return scaledImage;
}
function getPixelColor(p) {
  let i = 0;
  return color(p[i], p[i + 1], p[1 + 2]);
}
function makeGrid(baseImage) {
  let grid = [];
  baseImage.loadPixels();
  for (let y = 0; y < baseImage.height; y += gridCellWidth) {
    for (let x = 0; x < baseImage.width; x += gridCellWidth) {
      let index = (x + y * baseImage.width) * 4;
      let pix = baseImage.pixels;
      if (pix[index] === 0) {
      } else {
      }
    }
  }
}
function getPositions(baseImage, gridSize) {
  baseImage.loadPixels();
  let positions = [];
  let functionDomain = baseImage.pixels.length;
  for (let y = 0; y < baseImage.height; y += gridSize) {
    for (let x = 0; x < baseImage.width; x += gridSize) {
      let index = (x + y * baseImage.width) * 4;
      let oldPixel = baseImage.pixels;
      let sumVal = oldPixel[index] + oldPixel[index + 1] + oldPixel[index + 2];
      // oldPixel[index + 3]
      // console.log(sumVal);
      if (sumVal) {
        positions.push(createVector(x, y));
      }
    }
  }
  return positions;
}
