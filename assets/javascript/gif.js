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
    // My loop is going crazy. Not sure how to limit it's output or cap it.
    for (var i = 0; i < results.length; i++) {
      var disImage = $("<img>");
      disImage.attr("src", gifUrl);

      $(".gifspot").append(disImage);
    }

    // if/else to animate and pause the gifs
    // --------------------------------------------------
    // Trying to mock this with my own code. This is an example from activity 15 in the AJAX folder.
    // if (state === "still") {
    //     var animate = $(this).attr("data-animate");
    //     $(this).attr("src", animate)
    //     $(this).attr("data-state", "animate")
    //   }
    //   else {
    //     var still = $(this).attr("data-still");
    //     $(this).attr("src", still)
    //     $(this).attr("data-state", "still");
    //   }
    //   console.log(state);
    // ----------------------------------------------------

    // Basically I would create two variable for animate and still and link it to the corresponsing image url that repsond to the click function on the image.

    // ----------------------------------------------------

    // My code draft:
    // var gifStill = response.data[0].images.original_still.url;
    // var stillState = giftStill;
    // disImage.on("click", function() {
    //   var status = $(this).attr("data-gifStatus");
    //   console.log(status);

    //   if (status === "still") {
    //     var animate = $(this).attr(disImage);
    //   }

    //   var gifStill = response.data[0].images.original_still.url;
    //   var stillState = giftStill;

    // -----------------------------------------------------------------

    // HERE I want to put my form commands and I would use Activity 10 as a reference point and mock up code like this:

    //  ----------------------------------------------------------------
    // $("#add-movie").on("click", function(event) {
    //     event.preventDefault();
    //     // This line of code will grab the input from the textbox
    //     var movie = $("#movie-input").val().trim();

    //     // The movie from the textbox is then added to our array
    //     movies.push(movie);

    //     // Calling renderButtons which handles the processing of our movie array
    //     renderButtons();
    //   });

    //   // Adding click event listeners to all elements with a class of "movie"
    //   $(document).on("click", ".movie", displayMovieInfo);

    //   // Calling the renderButtons function to display the intial buttons
    //   renderButtons();
    // -------------------------------------------------------------------

    // HERE: I would create a variable that grabs the user input and pushes it to the top of the page in the form of a button. The button would then activate a gif.

    // -------------------------------------------------------------
  });
});
