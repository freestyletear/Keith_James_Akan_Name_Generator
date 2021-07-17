var currentDate = new Date();
var currentYear = currentDate.getFullYear();

function giveName() {
  var name = document.getElementById("yourNames").value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
}

function selectGender() {
  var gender = document.getElementById("gender").value;
  if (gender == "1") {
    alert("Gender must be selected");
    return false;
  }
}

function giveCentury() {
  var century = document.getElementById("centuryBorn").value;
  if (century == "") {
    alert("Century must be filled out");
    return false;
  }
}

function giveYear() {
  var year = document.getElementById("yearBorn").value;
  if (year == "") {
    alert("Year must be filled out");
    return false;
  }
}

function giveMonth() {
  var month = document.getElementById("monthBorn").value;
  if (month == "0") {
    alert("Month must be selected");
    return false;
  }
}

function giveDay() {
  var day = document.getElementById("dayBorn").value;
  if (day == "") {
    alert("Day must be filled out");
    return false;
  }
}

function allLetters(input) {
  var characters = /[^a-z]/gi;
  input.value = input.value.replace(characters, "");
}

function digits(input) {
  var digits = /[^0-9]/;
  input.value = input.value.replace(digits, "");
}

function validYear() {
  var year = document.getElementById("yearBorn").value;
  if (year < 1899 || year > currentYear) {
    alert("Invalid Year");
    return false;
  }
}

function validDay() {
  var thirtyOneMonths = [1, 3, 5, 7, 9, 10, 12];
  var monthNumber = parseInt(document.getElementById("monthBorn").value);
  var dayNumber = parseInt(document.getElementById("dayBorn").value);
  var yearNumber = parseInt(document.getElementById("yearBorn").value);
  var yearNumber = parseInt(document.getElementById("centuryBorn").value);
  var a = yearNumber % 100;
  var b = yearNumber % 400;
  var c = yearNumber % 4;
  var d = thirtyOneMonths.includes(monthNumber);
  if (monthNumber === 2 && dayNumber > 28 && a === 0 && b !== 0) {
    alert("Invalid day: The entered year, February had 28 days.");
    return false;
  } else if (monthNumber === 2 && dayNumber > 28 && c !== 0) {
    alert("Invalid day: The entered year, February had 28 days.");
    return false;
  } else if (!d && dayNumber > 30) {
    alert("Invalid day: The selected month has 30 days");
    return false;
  } else if (dayNumber > 31 || dayNumber < 1) {
    alert("Invalid day: Months have a possible 1 to 31 days");
    return false;
  }
}

function getName() {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var akanMale = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var cc = parseInt(document.getElementById("centuryBorn").value.slice(0, 2));
  var yy = parseInt(document.getElementById("yearBorn").value.slice(2, 4));
  var dd = parseInt(document.getElementById("dayBorn").value);
  var mm = parseInt(document.getElementById("monthBorn").value);
  var day =
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
  var akanDay = days[day.toFixed()];
  var gender = parseInt(document.getElementById("gender").value);
  if (gender == 2) {
    if (akanDay === "Sunday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[0] + " and you were born on a Sunday."
        // "Born on Sunday: Your Akan Name would be: " + akanMale[0];
      return true;
    } else if (akanDay === "Monday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[1] + " and you were born on a Monday."
        // "Born on Monday: Your Akan Name would be: " + akanMale[1];
      return true;
    } else if (akanDay === "Tuesday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[2] + " and you were born on a Tuesday."
        // "Born on Tuesday: Your Akan Name would be: " + akanMale[2];
      return true;
    } else if (akanDay === "Wednesday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[3] + " and you were born on a Wednesday."
        // "Born on Wednesday: Your Akan Name would be: " + akanMale[3];
      return true;
    } else if (akanDay === "Thursday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[4] + " and you were born on a Thursday."
        // "Born on Thursday: Your Akan Name would be: " + akanMale[4];
      return true;
    } else if (akanDay === "Friday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[5] + " and you were born on a Friday."
        // "Born on Friday: Your Akan Name would be: " + akanMale[5];
      return true;
    } else {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[6] + " and you were born on a Saturday."
        // "Born on Saturday: Your Akan Name would be: " + akanMale[6];
      return true;
    }
  }
  if (gender == 3) {
    if (akanDay === "Sunday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[0] + " and you were born on a Sunday."
        // "Born on Sunday: Your Akan Name would be: " + akanFemale[0];
      return true;
    } else if (akanDay === "Monday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[1] + " and you were born on a Monday."
        // "Born on Monday: Your Akan Name would be: " + akanFemale[1];
      return true;
    } else if (akanDay === "Tuesday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[2] + " and you were born on a Tuesday."
        // "Born on Tuesday: Your Akan Name would be: " + akanFemale[2];
      return true;
    } else if (akanDay === "Wednesday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[3] + " eand you wer born on a Wednesday."
        // "Born on Wednesday: Your Akan Name would be: " + akanFemale[3];
      return true;
    } else if (akanDay === "Thursday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[4] + " and you were born on a Thursday."
        // "Born on Thursday: Your Akan Name would be: " + akanFemale[4];
      return true;
    } else if (akanDay === "Friday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[5] + " and you were born on a Friday."
        // "Born on Friday: Your Akan Name would be: " + akanFemale[5];
      return true;
    } else {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[6] + " and you were born on a Saturday."
        // "Born on Saturday: Your Akan Name would be: " + akanFemale[6];
      return true;
    }
  }
}

function clearForm() {
  document.getElementById("form").reset();
}

function clearResult() {
  document.getElementById("answer").reset();
}













// var Calculator = function () {

//   var date = parseInt(
//     document.getElementsByClassName("birthday-Gender-Collector").elements.namedItem("date").value
//   );
//   var month = parseInt(
//     document.getElementsByClassName("birthday-Gender-Collector").elements.namedItem("month").value
//   );
//   var year = parseInt(
//     document.getElementsByClassName("birthday-Gender-Collector").elements.namedItem("year").value
//   );
//   var gender = document
//     .getElementsByClassName("birthday-Gender-Collector")
//     .elements.namedItem("gender").value;
//   var dateOfBirth = new Date(year + "/" + month + "/" + date);
//   var weekDay = dateOfBirth.getDay();

//   if (month < 1 || month > 12 || (month == 2 && date > 29)) {
//     return (document.getElementById("alert2").innerHTML =
//       "Invalid  Month ,Please Try Again");
//   } else if (date < 1 || date > 31) {
//     return (document.getElementById("alert2").innerHTML =
//       "Invalid Date ,Please Try Again");
//   } else if (year === NaN || year < 1800 || year > 2022) {
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
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " + akanMale[weekDay] + ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 1 && gender === "male") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 2 && gender === "male") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 3 && gender === "male") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 4 && gender === "male") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 5 && gender === "male") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 6 && gender === "male") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanMale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   }

//   if (weekDay === 0 && gender === "female") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 1 && gender === "female") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 2 && gender === "female") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 3 && gender === "female") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 4 && gender === "female") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 5 && gender === "female") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   } else if (weekDay === 6 && gender === "female") {
//     return (document.getElementById("results").innerHTML =
//       "Your Akan name is : " +
//       akanFemale[weekDay] +
//       ("  .You were born on a : " + daysOfTheWeek[weekDay]));
//   }
//  else if (
//      !document.getElementById("gender-Female").checked &&
//      !document.getElementById("gender-Male").checked
//    ) {
//      document.getElementById("not-checked").innerHTML = "*Select your gender";
//    }};

// function akanNameCalculator() {
//   event.preventDefault();

//   // Form input

//   let inputDate = document.getElementById("birthDate").value;
//   let gender = document.getElementsByName("gender");

//   try {
//     if (inputDate == "") throw "Empty";
//   } catch {
//     document.getElementById("emptyDate").innerHTML = "*Date field required";
//   }
//   //Day

//   let date = new Date(inputDate);
//   let birthDate = date.getDay();

//   // Store Akan names in Arrays

//   let maleAkan = [
//     "Kwasi",
//     "Kwadwo",
//     "Kwabena",
//     "Kwaku",
//     "Yaw",
//     "Kofi",
//     "Kwame",
//   ];
//   let femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//   // Find Male Akan from BirthDate

//   if (document.getElementById("genderMale").checked && inputDate != "") {
//     document.getElementById("results").innerHTML =
//       "Your Akan name is: " + "<strong>" + maleAkan[birthDate] + "</strong>";
//   }

//   // Find Female Akan from birthDate
//   else if (document.getElementById("genderFemale").checked && inputDate != "") {
//     document.getElementById("results").innerHTML =
//       "According to your gender, your Akan name is: " +
//       "<strong>" +
//       femaleAkan[birthDate] +
//       "</strong>";
//   }
//   // Warning
//   else if (
//     !document.getElementById("genderFemale").checked &&
//     !document.getElementById("genderMale").checked
//   ) {
//     document.getElementById("not-checked").innerHTML = "*Select your gender";
//   }
//   // Background image

//   setInterval(function () {
//     var bg;
//   });
//}

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
