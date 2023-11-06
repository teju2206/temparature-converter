const convertButton = document.getElementById("convertButton");
const inputTemp = document.getElementById("inputTemp");
const inputUnit = document.getElementById("inputUnit");
const outputUnit = document.getElementById("outputUnit");
const result = document.getElementById("result");
const measurementImage = document.getElementById("measurementImage");
const displayedValue = document.getElementById("displayedValue");

convertButton.addEventListener("click", () => {
  const temp = parseFloat(inputTemp.value);
  const inputType = inputUnit.value;
  const outputType = outputUnit.value;

  if (isNaN(temp)) {
    result.textContent = "Please enter a valid temperature.";
    displayedValue.textContent = "";
    return;
  }

  let convertedTemp;

  if (inputType === outputType) {
    result.textContent = "Same unit selected.";
    displayedValue.textContent = "";
    return;
  }

  if (inputType === "celsius") {
    if (outputType === "fahrenheit") {
      convertedTemp = (temp * 9/5) + 32;
    } else if (outputType === "kelvin") {
      convertedTemp = temp + 273.15;
    }
  } else if (inputType === "fahrenheit") {
    if (outputType === "celsius") {
      convertedTemp = (temp - 32) * 5/9;
    } else if (outputType === "kelvin") {
      convertedTemp = (temp - 32) * 5/9 + 273.15;
    }
  } else if (inputType === "kelvin") {
    if (outputType === "celsius") {
      convertedTemp = temp - 273.15;
    } else if (outputType === "fahrenheit") {
      convertedTemp = (temp - 273.15) * 9/5 + 32;
    }
  }

  result.textContent = `${temp.toFixed(2)} ${inputType.toUpperCase()} = ${convertedTemp.toFixed(2)} ${outputType.toUpperCase()}`;
  displayedValue.textContent = convertedTemp.toFixed(2) + " " + outputType.toUpperCase();
});