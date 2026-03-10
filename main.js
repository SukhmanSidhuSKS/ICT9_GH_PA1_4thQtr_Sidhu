/*
 JavaScript Conditionals
 function identify_sign () {
     num1 = document.getElementById('input1').value;

    if(num1 > 0) {
      document.getElementById('output').innerHTML = 'It is positive'; 
    } else if (num1 < 0) {
    document.getElementById('output').innerHTML = 'It is negative';
    } else {
        document.getElementById('output').innerHTML = 'It is zero';
   }
 */
   
    function odd_or_even() {
    num1 = document.getElementById('input1').value;

    if (num1 % 2 == 0) {
        window.alert('It is an even number')
    }  else {
        window.alert('It is an odd number')
    }
   }
