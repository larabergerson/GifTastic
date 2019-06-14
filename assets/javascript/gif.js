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
  button.addClass("disney-button");
  button.attr("data-name", disneyMovies[i]);
  $("#moviebtn").append(button);
  //   $("#moviebtn").on("click", function() {
  // function to make buttons pull data from api:
  // var moviebtn = $(this).attr("data-movies" + disneyMovies[i]);
  // $("#main").on("click", function() {
}

function displayGif() {}
$(document).on("click", ".disney-button", function() {
  //we define chosenMovie based on the data-name attribute of the button we click!
  var chosenMovie = $(this).attr("data-name"); //when using attr, if there is only 1 argument aka parameter it can be used to grab the information.
  console.log("is working");

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=vFqWSwHKnqHyZz0kizoJcGbRSAnbHLSK&q=" +
    chosenMovie +
    "&limit=10&offset=0&rating=PG&lang=en";

  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // console.log(response);
    // console.log(response.data[0]);
    console.log(response.data[0].images.original.url);

    var gifUrl = response.data[0].images.original.url;
    var results = gifUrl;
    var disImage = $("<img>");
    disImage.attr("src", results);

    $(".gifspot").append(disImage);

    for (var i = 0; i < results.length; i++) {
      var disImage = $("<img>");
      disImage.attr("src", gifUrl);

      $(".gifspot").append(disImage);
    }
  });
});
