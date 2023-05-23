let weight, height, bmiCalc;

function calculateBMI(weight, height, bmiCalc) {
  weight = parseFloat(document.getElementById("weight").value);
  height = parseFloat(document.getElementById("height").value);
  bmiCalc = (weight / height ** 2)*10000;

  if (bmiCalc <= 18) {
    document.getElementById("bmi").value = bmiCalc.toFixed(2) + "Underweight🦴";

  } else if (bmiCalc > 18.4 && bmiCalc <= 24.9) {
    document.getElementById("bmi").value = bmiCalc.toFixed(2) + "Normal💫";

   } else if (bmiCalc > 25 && bmiCalc <= 39.9) {
    document.getElementById("bmi").value = bmiCalc.toFixed(2) + "Overweight🤨";

   } else if (bmiCalc >= 40 ) {
    document.getElementById("bmi").value = bmiCalc.toFixed(2) + " Obese♿";

   } else {
   document.getElementById("bmi").value = "";
    }

};
