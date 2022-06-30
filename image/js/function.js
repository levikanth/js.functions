
function bmi() {
  var h = document.getElementById("height").value;
  var w = document.getElementById("weight").value;
  var bmi = w / (h / 100 * h / 100);
  var total = bmi;
  document.getElementById("result").innerHTML = "your BMI index = " + total;
  if (bmi < 18.6) 
  result.innerHTML =`YOUR BMI IS Under Weight i.e : <span>${bmi}</span>`;
  else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `YOUR BMI IS Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `YOUR BMI IS Over Weight : <span>${bmi}</span>`;
}


// function bmi(weight, height) {
//   var height = document.getElementById("height").value;
//  var weight =  document.getElementById("height").value;
//   var bmi = weight/Math.pow(height,2) ;
//   var total = bmi;
//   document.getElementById("result").innerHTML = "your BMI index = " + total;
  
//     if (result <= 18.5) 
//     {return "Underweight";}

// else if (result <= 25.0 )
// {return "Normal";}

// else if (result <= 30.0)
//   {return "Overweight";}

// else
//   {return "Obese";}
// }




function FEET() {
  var f = document.getElementById("feet").value;
  var FEET = f * 12;
  var total = FEET;
  document.getElementById("result2").innerHTML = total + " inches";

}

function SQUARE() {
  var n = document.getElementById("number").value;
  var SQUARE = n * n;
  var total = SQUARE;
  document.getElementById("result1").innerHTML = "square of the number is =  " + total;
}


function details() {
  var n = document.getElementById("name").value;
  var a = document.getElementById("age").value;
  var d = document.getElementById("dob").value;

  // var details = n + a ;
  // var total =details;

  document.getElementById("result3").innerHTML = "HEY HI " + n + "! " + length('t') + " your birthday is on  " + d;
}
