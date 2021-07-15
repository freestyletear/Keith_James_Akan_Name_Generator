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
// function akanNameCalculator() {

// //var Calculator = function () {

//   var date = parseInt(
//     document.getElementById("Form").elements.namedItem("date").value
//   );
//   var month = parseInt(
//     document.getElementById("Form").elements.namedItem("month").value
//   );
//   var year = parseInt(
//     document.getElementById("Form").elements.namedItem("year").value
//   );
//   var gender = document
//     .getElementById("Form")
//     .elements.namedItem("gender").value;
//   var dateOfBirth = new Date(year + "/" + month + "/" + date);
//   var weekDay = dateOfBirth.getDay();

//   if (month < 1 || month > 12 || (month == 2 && date > 29)) {
//     return (document.getElementById("alert2").innerHTML =
//       "Invalid  Month ,Please Try Again");
//   } else if (date < 1 || date > 31) {
//     return (document.getElementById("alert2").innerHTML =
//       "Invalid Date ,Please Try Again");
//   } else if (year === NaN || year < 1900 || year > 2019) {
//     document.getElementById("alert2").innerHTML =
//       "Invalid year please try Again";
//   }

//   var akanMale = [
//     "Kwasi",
//     "Kwadwo",
//     "Kwabena",
//     "Kwaku",
//     "Yaw",
//     "Kofi",
//     "Kwame",
//   ];

//   var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//   var daysOfTheWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   if (weekDay === 0 && gender === "male") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 1 && gender === "male") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 2 && gender === "male") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 3 && gender === "male") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 4 && gender === "male") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 5 && gender === "male") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 6 && gender === "male") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   }

//   if (weekDay === 0 && gender === "female") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 1 && gender === "female") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 2 && gender === "female") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 3 && gender === "female") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 4 && gender === "female") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 5 && gender === "female") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 6 && gender === "female") {
//     return (document.getElementById("alert").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   }
// };

// Male;
// Sunday: Kwasi;

// Monday: Kwadwo;

// Tuesday: Kwabena;

// Wednesday: Kwaku;

// Thursday: Yaw;

// Friday: Kofi;

// Saturday: Kwame;

// Female;
// Sunday: Akosua;

// Monday: Adwoa;

// Tuesday: Abenaa;

// Wednesday: Akua;

// Thursday: Yaa;

// Friday: Afua;

// Saturday: Ama;
