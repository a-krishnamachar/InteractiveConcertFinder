var apiKeySK = "kH6YaddvZi7KUUsH";

var urlBaseSK = "https://api.songkick.com/api/3.0/artists/mbid:{";
var urlMidSK = "}/calendar.json?apikey={";
var urlWholeSK = "https://api.songkick.com/api/3.0/artists/mbid:{music_brainz_id}/calendar.json?apikey={your_api_key}"
//https://api.songkick.com/api/3.0/artists/mbid:{music_brainz_id}/calendar.xml?apikey={your_api_key}

// Search for each recommendation (for loop over artist music_brainz_id array produced by lastFM)
// Check each Songkick event object's location against specified city (.city.displayName)

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log("hey");
    var e = JSON.parse(this.responseText);
    console.log(e);
    // console.log(todos.length);
    //   for (var i=0; i<todos.length; i++){
    //     makeItem(todos[i]);
    // }
  } else if (this.readyState == 4) {

      // this.status !== 200, error from server
      console.log("milk");
      console.log(this.responseText);

  }
};

xhttp.open("GET", urlBaseSK + music_brainz_id + urlMidSK + apiKeySK + "}", true);
xhttp.setRequestHeader("x-api-key", apiKeySK);
xhttp.send();
