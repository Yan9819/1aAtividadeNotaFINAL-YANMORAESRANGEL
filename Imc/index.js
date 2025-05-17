function calculate() {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const resultArea = document.getElementById("text_area");

  const height = parseFloat(heightInput.value) / 100;
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultArea.value = "Por favor, insira valores válidos para altura e peso.";
    return;
  }

  const imc = weight / (height * height);
  let message = `Seu IMC é: ${imc.toFixed(2)}\n`;

  if (imc < 18.5) {
    message += "Você está abaixo do peso ideal.";
  } else if (imc < 24.9) {
    message += "Parabéns! Você está com o peso ideal.";
  } else if (imc < 29.9) {
    message += "Você está com sobrepeso.";
  } else if (imc < 39.9) {
    message += "Atenção! Você está com obesidade.";
  } else {
    message += "Cuidado! Você está com obesidade mórbida.";
  }

  resultArea.value = message;
}
