const ONE_LITER_CAN_PAINT = 5;

const calculate = (areas) => {
  const cansVolume = [18, 3.6, 2.5, 0.5];
  const totalArea = parseFloat(sumAreas(areas).toFixed(2));
  const totalLiters = calculateTotalLitersByArea(totalArea);
  const cans = calculateCansQuantity(totalLiters, cansVolume);

  return {
    result: { area: totalArea, liters: totalLiters, cans },
  };
};

const sumAreas = (areas) => {
  return areas.reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0);
};

const calculateTotalLitersByArea = (area) =>
  parseFloat((area / ONE_LITER_CAN_PAINT).toFixed(2));

const calculateCansQuantity = (totalLiters, cansVolume) => {
  const cans = [];
  let litersToSubtract = totalLiters;
  litersToSubtract = validateCalc(cansVolume, litersToSubtract, cans);
  if (litersToSubtract < 0.5 && litersToSubtract !== 0) {
    let minorCan = cans[cans.length - 1]['0.5'];
    setCanRest(minorCan, cans);
  }
  return cans;
};

const validateCalc = (cansVolume, litersToSubtract, cans) => {
  cansVolume.forEach((item) => {
    if (litersToSubtract >= item || litersToSubtract >= item - 0.1) {
      let division = (litersToSubtract / item).toFixed(2);
      const number = division.split('.');
      const cansAndQuantity = { [item]: Number(number[0]) };
      if (number[1] < 100 && number[1] > 90) {
        division = Math.ceil(division).toFixed(2);
        litersToSubtract = 0;
        cans.push({ [item]: Number(division) });
        return cans;
      } else {
        const mod = litersToSubtract % item;
        litersToSubtract = mod;
      }
      cans.push(cansAndQuantity);
    }
  });
  return litersToSubtract;
};

const setCanRest = (minorCan, cans) => {
  if (minorCan !== 4) {
    cans.splice(-1);
    cans.push({ 0.5: minorCan + 1 });
  } else if (minorCan === 4) {
    cans.splice(-1);
    cans.push({ 2.5: 1 });
  } else {
    cans.push({ 0.5: 1 });
  }
};

module.exports = {
  calculate,
  sumAreas,
  calculateTotalLitersByArea,
  calculateCansQuantity,
};
