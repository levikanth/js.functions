
    function bmi() 
    {
      var h = document.getElementById("height").value;
      var w = document.getElementById("weight").value;
      var bmi = w / (h / 100 * h / 100);
      var total = bmi;
      document.getElementById("result").innerHTML = "your BMI index = " + total;
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
 