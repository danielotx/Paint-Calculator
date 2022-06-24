import { 
  wallArea,
  checkMinHeightDoorAndWall,
  checkTotalAreaDoorsWindows,
  checkWallMaxDimension,
  checkWallMinDimension,
  calcPerWall,
  WINDOW_AREA,
  DOOR_AREA,
} from './validate';

  const calculateArea = (width, height, windows, doors) => {
  
    const area = wallArea(width, height);
    const doorArea = doors * DOOR_AREA;
    const windowArea = windows * WINDOW_AREA;
  
    if (!checkWallMinDimension(area))
      return alert("Area can't be minor than 1m²")
  
    if (!checkWallMaxDimension(area))
      return alert("Area can't be greater than 15m²");
  
    if (!checkTotalAreaDoorsWindows(doorArea, windowArea, area))
      return alert(
        "Door and window area can't be greater than 50% of the entire area");
  
    if (!checkMinHeightDoorAndWall(doorArea, height))
      return alert(
        "Wall height must be 30cm higher than the door height(1,90m)");
  
    return calcPerWall(doorArea, windowArea, area);
  };

export default calculateArea;