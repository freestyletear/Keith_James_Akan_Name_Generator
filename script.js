function akanNameCalculator() {
  event.preventDefault();

  // Form input

  let inputDate = document.getElementById("birthDate").value;
  let gender = document.getElementsByName("gender");

  try {
    if (inputDate == "") throw "Empty";
  } catch {
    document.getElementById("emptyDate").innerHTML = "*Date field required";
  }