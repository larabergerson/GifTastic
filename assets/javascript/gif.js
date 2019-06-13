// array for topic
var disneyMovies = [
  "Frozen",
  "Beauty and the Beast",
  "Moana",
  "Cinderella",
  "Snow white",
  "Mulan",
  "Princess and the Frog",
  "Sleeping Beauty",
  "Tangled",
  "Aladin"
];
// loop to create buttons from array
for (var i = 0; i < disneyMovies.length; i++) {
  var button = $("<button>").text(disneyMovies[i]);
  $(".container").append(button);
}

// api query link to generate gifs.
var queryURL =
  "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=vFqWSwHKnqHyZz0kizoJcGbRSAnbHLSK&limit=10";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
