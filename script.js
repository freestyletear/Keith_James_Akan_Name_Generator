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
  input.value = input.value.replace(characters, " ");
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
      return true;
    } else if (akanDay === "Monday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[1] + " and you were born on a Monday."
      return true;
    } else if (akanDay === "Tuesday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[2] + " and you were born on a Tuesday."
      return true;
    } else if (akanDay === "Wednesday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[3] + " and you were born on a Wednesday."
      return true;
    } else if (akanDay === "Thursday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[4] + " and you were born on a Thursday."
      return true;
    } else if (akanDay === "Friday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[5] + " and you were born on a Friday."
      return true;
    } else {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[6] + " and you were born on a Saturday."
      return true;
    }
  }
  if (gender == 3) {
    if (akanDay === "Sunday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[0] + " and you were born on a Sunday."
      return true;
    } else if (akanDay === "Monday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[1] + " and you were born on a Monday."
      return true;
    } else if (akanDay === "Tuesday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[2] + " and you were born on a Tuesday."
      return true;
    } else if (akanDay === "Wednesday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[3] + " eand you wer born on a Wednesday."
      return true;
    } else if (akanDay === "Thursday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[4] + " and you were born on a Thursday."
      return true;
    } else if (akanDay === "Friday") {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[5] + " and you were born on a Friday."
      return true;
    } else {
      document.getElementById("output").value =
      "Your Akan Name would be " + akanMale[6] + " and you were born on a Saturday."
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