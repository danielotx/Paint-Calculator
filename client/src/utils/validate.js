const DOOR_AREA = 1.52;
const WINDOW_AREA = 2.4;

const wallArea = (width, height) => {
  return width * height;
};

const checkWallMinDimension = (area) => {
  return area >= 1;
};

const checkWallMaxDimension = (area) => {
  return area <= 15;
};

const checkTotalAreaDoorsWindows = (doorArea, windowArea, wallArea) => {
  return doorArea + windowArea <= wallArea / 2;
};

const checkMinHeightDoorAndWall = (door, wallHeight) => {
  return door < 1 ? true : wallHeight >= 2.2;
};

const calcPerWall = (doorArea, windowArea, area) => {
  return (area - (doorArea + windowArea)).toFixed(2);
};

export {
  wallArea,
  checkWallMinDimension,
  checkWallMaxDimension,
  checkTotalAreaDoorsWindows,
  checkMinHeightDoorAndWall,
  calcPerWall,
  WINDOW_AREA,
  DOOR_AREA,
}