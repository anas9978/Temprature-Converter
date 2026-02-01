function convertTemp() {
  const temp = document.getElementById("tempInput").value;
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultBox = document.getElementById("resultBox");

  if (temp === "" || isNaN(temp)) {
    resultBox.innerHTML = "❌ Please enter a valid number";
    return;
  }

  let result;
  const value = parseFloat(temp);

  if (from === to) {
    resultBox.innerHTML = "⚠️ Please select different units";
    return;
  }

  // Celsius to others
  if (from === "C" && to === "F") {
    result = (value * 9) / 5 + 32; // °C → °F
  } else if (from === "C" && to === "K") {
    result = value + 273.15; // °C → K
  }

  // Fahrenheit to others
  else if (from === "F" && to === "C") {
    result = ((value - 32) * 5) / 9; // °F → °C
  } else if (from === "F" && to === "K") {
    result = ((value - 32) * 5) / 9 + 273.15; // °F → K
  }

  // Kelvin to others
  else if (from === "K" && to === "C") {
    result = value - 273.15; // K → °C
  } else if (from === "K" && to === "F") {
    result = ((value - 273.15) * 9) / 5 + 32; // K → °F
  }

  resultBox.innerHTML = `${value} °${from} = ${result.toFixed(2)} °${to}`;
}
