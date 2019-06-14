// array for topic
var disneyMovies = [
  "Frozen",
  "Beauty and the Beast",
  "Moana",
  "Finding Nemo",
  "Toy Story",
  "Zootopia",
  "The Lion King",
  "Inside Out",
  "Tangled",
  "Aladdin"
];
// loop to create buttons from array
for (var i = 0; i < disneyMovies.length; i++) {
  var button = $("<button>").text(disneyMovies[i]);
  $("#moviebtn").append(button);

  button.addClass("disney-button");
  button.attr("data-name", disneyMovies[i]);

  //   $("#moviebtn").on("click", function() {
  // function to make buttons pull data from api:
  // var moviebtn = $(this).attr("data-movies" + disneyMovies[i]);
  // $("#main").on("click", function() {
}
function displayGif() {
  console.log("is working");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=vFqWSwHKnqHyZz0kizoJcGbRSAnbHLSK&q=" +
    disneyMovies +
    "&limit=10&offset=0&rating=PG&lang=en";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // console.log(response);

    var gifUrl = response.data;
    var disImage = $("<img>");
    disImage.attr("src");
  });
}
// });

// api query link to generate gifs.
// var queryURL =
//   "https://api.giphy.com/v1/gifs/search?api_key=vFqWSwHKnqHyZz0kizoJcGbRSAnbHLSK&q=disney&limit=10&offset=0&rating=G&lang=en";
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });

// var imageUrl = response.

$(document).on("click", ".disney-button", displayGif);
