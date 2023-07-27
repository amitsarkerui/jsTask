function convertToInteger() {
  const romanNumeralInput = document.getElementById("romanNumeral");
  const resultOutput = document.getElementById("result");

  const romanNumeral = romanNumeralInput.value.toUpperCase();
  const romanNumerals = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let integer = 0;
  let i = 0;

  while (i < romanNumeral.length) {
    if (
      i + 1 < romanNumeral.length &&
      romanNumerals[romanNumeral.substr(i, 2)]
    ) {
      integer += romanNumerals[romanNumeral.substr(i, 2)];
      i += 2;
    } else {
      integer += romanNumerals[romanNumeral[i]];
      i++;
    }
  }

  resultOutput.innerText = "Integer Value: " + integer;
}
