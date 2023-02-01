const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  let count = expr.length/10;
  for (let i = 0; i < count; i++) {
    let str = expr.slice(i * 10, i * 10 + 10);
    if (str === "**********") {
      result += " ";
      continue;
    }
    let text = "";
    for (let j = 0; j < 10; j += 2) {
      if (str.slice(j, j + 2) === "11") {
        text += "-";
      } else if (str.slice(j, j + 2) === "10") {
        text += ".";
      }
    }
    result += MORSE_TABLE[text];
  }
  return result;
}

module.exports = {
  decode,
};
