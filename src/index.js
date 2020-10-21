module.exports = function toReadable (number) {
  const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    ty: {
      1: 'ten',
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety',
    },
    ed: 'hundred'
  } 
  if (number < 20) {
    return numbers[number]
  } else if (number < 100 && number.toString()[1] != 0) {
    return `${numbers.ty[number.toString()[0]]} ${numbers[number.toString()[1]]}`
  } else if (number < 100 && number.toString()[1] == 0) {
    return `${numbers.ty[number.toString()[0]]}`
  } else if (number < 1000 && number.toString()[2] != 0 && number.toString()[1] != 0 && number.toString()[1] > 1) {
    return `${numbers[number.toString()[0]]} ${numbers.ed} ${numbers.ty[number.toString()[1]]} ${numbers[number.toString()[2]]}`
  } else if (number < 1000 && number.toString()[2] != 0 && number.toString()[1] != 0 && number.toString()[1] == 1) {
    return `${numbers[number.toString()[0]]} ${numbers.ed} ${numbers[number.toString().slice(1)]}`
  } else if (number < 1000 && number.toString()[2] == 0 && number.toString()[1] != 0) {
    return `${numbers[number.toString()[0]]} ${numbers.ed} ${numbers.ty[number.toString()[1]]}`
  } else if (number < 1000 && number.toString()[2] != 0 && number.toString()[1] == 0) {
    return `${numbers[number.toString()[0]]} ${numbers.ed} ${numbers[number.toString()[2]]}`
  } else {
    return `${numbers[number.toString()[0]]} ${numbers.ed}`
  }
}