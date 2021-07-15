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

  // Find Male Akan from BirthDate

  if (document.getElementById("genderMale").checked && inputDate != "") {
    document.getElementById("results").innerHTML =
      "Your Akan name is: " + "<strong>" + maleAkan[birthDate] + "</strong>";
  }

  // Find Female Akan from birthDate
  else if (document.getElementById("genderFemale").checked && inputDate != "") {
    document.getElementById("results").innerHTML =
      "According to your gender, your Akan name is: " +
      "<strong>" +
      femaleAkan[birthDate] +
      "</strong>";
  }
  // Warning
  else if (
    !document.getElementById("genderFemale").checked &&
    !document.getElementById("genderMale").checked
  ) {
    document.getElementById("not-checked").innerHTML = "*Select your gender";
  }
  // Background image

  setInterval(function () {
    var bg;
  });
}