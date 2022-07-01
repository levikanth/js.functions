
function bmi() {
  var h = parseInt(document.getElementById("height").value);
  var w = parseInt (document.getElementById("weight").value);
  var bmi = w / (h / 100 * h / 100);
  var total = bmi;
  document.getElementById("result").innerHTML = "your BMI index = " + total;
 
  if (bmi < 18.6) 
  result.innerHTML =`YOUR BMI IS Under Weight i.e : <span>${bmi}</span>`;
  else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `YOUR BMI IS Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `YOUR BMI IS Over Weight() : <span>${bmi}</span>`;
}
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

  document.getElementById("result3").innerHTML = "HEY HI " + n + "! " +"your age is "+a + " your birthday is on  " + d;
}
