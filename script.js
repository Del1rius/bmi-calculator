let weight, height, bmiCalc;

function calculateBMI(weight, height, bmiCalc) {
  weight = parseFloat(document.getElementById("weight").value);
  height = parseFloat(document.getElementById("height").value);
//   bmiCalc = (weight / height ** 2)*10000;
bmiCalc = (weight / Math.pow(height/100, 2)).toFixed(1)

  if (bmiCalc <= 18) {
    document.getElementById("bmi").value = bmiCalc + " Underweight🦴";

  } else if (bmiCalc > 18.4 && bmiCalc <= 24.9) {
    document.getElementById("bmi").value = bmiCalc + " Normal💫";

   } else if (bmiCalc > 25 && bmiCalc <= 39.9) {
    document.getElementById("bmi").value = bmiCalc + " Overweight🤨";

   } else if (bmiCalc >= 40 ) {
    document.getElementById("bmi").value = bmiCalc
     + " Obese♿";

   } else {
   document.getElementById("bmi").value = "";
    }

};
