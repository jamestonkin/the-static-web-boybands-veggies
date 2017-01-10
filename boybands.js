var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
// var loopCount = bands.length;
//
// // Keep track of which band we're on in the loop
// var currentBand = "";
//
// // Keep track of which veggie we're on in the loop
// var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
//
// // Start looping
// for (var i = 0; i < loopCount; i++) {
//   currentBand += "<p>" + bands[i] + "</p>";
//   currentVeggie += "<p>" + vegetables[i] + "</p>";
//
//   // Add the band names into the correct <div>
//   bandElement.innerHTML = currentBand;
//
//
//   // Add the veggie names into the correct <div>
//   veggieElement.innerHTML = currentVeggie;
//
// }
//THIS IS NICE AND ALL BUT I WOULD PREFER TO DO THIS WHOLE EXERCISE WITH TWO FOR LOOPS

for (var i = 0; i < bands.length; i++) {
  bandElement.innerHTML += "<p>" + bands[i] + "</p>";
}

for (var j = 0; j < vegetables.length; j++) {
  veggieElement.innerHTML += "<p>" + vegetables[j] + "</p>";
}
