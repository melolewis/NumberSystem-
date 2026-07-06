document.addEventListener("DOMContentLoaded", () => {
  // 1. DOM Element Selectors
  const inputDecimal = document.getElementById("inputDecimal");
  const resultDisplay = document.getElementById("resultDisplay");
  const stepsTextarea = document.getElementById("exampleFormControlTextarea1");
  const btnConvert = document.getElementById("btnConvert");
  const btnClear = document.getElementById("btnClear");

  // 2. Conversion Logic Event Listener
  btnConvert.addEventListener("click", () => {
    const rawValue = inputDecimal.value.trim();

    // Validation: Check if input is empty
    if (rawValue === "") {
      alert("Please enter a valid decimal number.");
      return;
    }

    let decimalNum = parseInt(rawValue, 10);

    // Handle the special case for zero
    if (decimalNum === 0) {
      resultDisplay.value = "0";
      stepsTextarea.value = "0 divided by 2 is 0 with a remainder of 0.\n\nBinary: 0";
      return;
    }

    // Standard native method for quick conversion output
    const binaryResult = decimalNum.toString(2);
    resultDisplay.value = binaryResult;

    // Generate Step-by-Step Breakdown text
    let tempNum = decimalNum;
    let stepsArray = [];
    
    stepsArray.push(`Steps to convert ${decimalNum} to Binary (Divide by 2 system):\n`);

    while (tempNum > 0) {
      const remainder = tempNum % 2;
      const nextNum = Math.floor(tempNum / 2);
      
      stepsArray.push(`${tempNum} ÷ 2 = ${nextNum}, Remainder = ${remainder}`);
      tempNum = nextNum;
    }

    stepsArray.push(`\nRead the remainders from bottom to top to get the result.`);
    stepsArray.push(`Binary Value: ${binaryResult}`);

    // Render the steps inside the text area
    stepsTextarea.value = stepsArray.join("\n");
  });

  // 3. Clear Button Event Listener
  btnClear.addEventListener("click", () => {
    inputDecimal.value = "";
    resultDisplay.value = "";
    stepsTextarea.value = "";
  });
});

