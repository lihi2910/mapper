const ExcelJS = require("exceljs");

let colOfLocations;
const rowOfUnits = 4;

const getUnitsName = async (worksheet) => {
  const unitsRow = worksheet.getRow(rowOfUnits);
  //Remove Duplicate
  const units = unitsRow.values.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return units;
};

const getLocations = async (worksheet) => {
  const locationsCol = worksheet.getColumn(colOfLocations).values;
  const locations = locationsCol.slice(
    locationsCol.indexOf("אוכלוסיה") + 2,
    locationsCol.indexOf('כ"סה')
  );
  return locations;
};

const getCell = async (row, col, worksheet) => {
  return worksheet.getRow(row).values[col];
};

function createObjectWithoutData(unitsArray, locationsArray) {
  const result = {};

  locationsArray.forEach((location) => {
    result[location] = {
      sadir: unitsArray.reduce((acc, unit) => {
        acc[unit] = null;
        return acc;
      }, {}),
      reserve: unitsArray.reduce((acc, unit) => {
        acc[unit] = null;
        return acc;
      }, {}),
    };
  });

  return result;
}

const getIndexOfUnit = (unitName, worksheet) => {
  return worksheet.getRow(rowOfUnits).values.indexOf(unitName);
};

const getIndexOfLocation = (locationName, worksheet) => {
  return worksheet.getColumn(colOfLocations).values.indexOf(locationName);
};

function removeUndefined(obj) {
  for (let key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    } else if (typeof obj[key] === "object") {
      removeUndefined(obj[key]);
    }
  }
  return obj;
}

export const getExcelinJson = async (worksheet) => {
  colOfLocations = worksheet.getRow(6).values.indexOf("אוכלוסיה");

  const data = createObjectWithoutData(
    await getUnitsName(worksheet),
    await getLocations(worksheet)
  );

  Object.keys(data).forEach((locationName) => {
    const locationRow = getIndexOfLocation(locationName, worksheet);

    Object.keys(data[locationName]["sadir"]).forEach(async (unitName) => {
      const unitIndex = getIndexOfUnit(unitName, worksheet);
      const sadirCol = unitIndex + 1;

      const cellContent = await getCell(locationRow, sadirCol, worksheet);
      if (cellContent) {
        data[locationName]["sadir"][unitName] = cellContent;
      } else {
        delete data[locationName]["sadir"][unitName];
      }
    });
    Object.keys(data[locationName]["reserve"]).forEach(async (unitName) => {
      const unitIndex = getIndexOfUnit(unitName, worksheet);
      const reserveCol = unitIndex;
      const cellContent = await getCell(locationRow, reserveCol, worksheet);
      if (cellContent) {
        data[locationName]["reserve"][unitName] = cellContent;
      } else {
        delete data[locationName]["reserve"][unitName];
      }
    });
  });
  return removeUndefined(data);
};
