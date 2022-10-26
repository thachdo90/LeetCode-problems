/**
 * @param {number} num
 * @return {string}
 */
//  I: number
// O: string representing roman numerals
// C: range [1, 3999]
// E:

// observations:
// roman numerals can be broken down and added together
// increments of 5
// 4 and 9 is unique, because you subtract from the 5 or 10

// strategy: parse through the number, get its digit and place value
// eg 58 = 50 + 5 + 1 + 1 + 1 = LVIII
// eg 1994 = 1000 + 900 (1000 - 100) + 90 (100 - 10) + 4 (5 - 1)
          //  M + CM + XC + IV
// create a hashmap to translate each place-value and its value to a roman numeral
var intToRoman = function(num) {
  const legend = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM'
  }
    let results = '';
    let numString = String(num);
    for (let i = 0; i < numString.length; i++) {
      // start from last index of string, right to left, i will indicate place value
      let index = numString.length - 1 - i;
      let number = parseInt(numString[index]) * 10 ** i;
      if (number !== 0) {
        let romanNumeral = legend[number];
        results = romanNumeral + results;
      }
    }
    return results
};