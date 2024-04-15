document.getElementById("btn").addEventListener("click", calcTrapazoid);

function calcTrapazoid() {
  var b1 = +document.getElementById("b1").value;
  var b2 = +document.getElementById("b2").value;
  var h = +document.getElementById("h").value;
  var dcp = +document.getElementById("dcp").value;
  var answer = b1 + b2;
  answer = answer / 2;
  answer = answer * h;
  answer = answer.toFixed(dcp);
  document.getElementById("output").innerHTML = answer;
}
