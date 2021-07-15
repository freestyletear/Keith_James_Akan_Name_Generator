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
    //Day

  let date = new Date(inputDate);
  let birthDate = date.getDay();

  // Store Akan names in Arrays

  let maleAkan = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  let femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];