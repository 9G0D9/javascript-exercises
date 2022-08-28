const ftoc = function (temp) {

  if (typeof (temp) != "number") return 'ERROR'

  let convertedTemp = (temp - 32) * (5 / 9);
  let rounded = Math.round(convertedTemp * 10) / 10;
  return rounded;
};

const ctof = function (temp) {

  if (typeof (temp) != "number") return 'ERROR'

  let convertedTemp = temp * 9 / 5 + 32;
  let rounded = Math.round(convertedTemp * 10) / 10;
  return rounded;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
