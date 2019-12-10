var apiKeyLFM = "ff816a82b0283ee65eed14160f8902ce";
var apiKeySK = "kH6YaddvZi7KUUsH";

var urlBaseSK = "https://api.songkick.com/api/3.0/artists/mbid:{";
var urlMidSK = "}/calendar.json?apikey={";
var urlWholeSK = "https://api.songkick.com/api/3.0/artists/mbid:{music_brainz_id}/calendar.json?apikey={your_api_key}"

/* Create a cache object */
// var cache = new LastFMCache();

/* Create a LastFM object */
var lastfm = new LastFM({
  apiKey    : 'ff816a82b0283ee65eed14160f8902ce',
  apiSecret : '260fbdb1ffbf5ee5b819c653a37b6cd7'
  // cache     : cache
});

// /* Load some artist info. */

document.getElementById("submitItem").addEventListener("click", function(event) {
  var completeRequest = new XMLHttpRequest();
  event.preventDefault();

  /* Load some artist info. */
  // console.log(document.getElementById("searchBox").value);
  var artist = document.getElementById("searchBox").value;

  lastfm.artist.getInfo({artist: 'artist'}, {success: function(data){
    var help = (artist.responseText);
    console.log(document.getElementById("searchBox").value);
    console.log(help);
  }, error: function(code, message){
    console.log("Nope");
  }});

  // lastfm.artist.getSimilar({artist: 'artist', api_key: apiKeyLFM}, {success: function(data){
  //   console.log("Coldplay BABY");
  //   var help = JSON.parse(this.responseText);
  //   console.log(help);
  //   // var result1 = JSON.parse(this.responseText);
  //
  //   // renderCode(result);
  // }, error: function(code, message){
  //   console.log("fuck off");
  // }});

  // completeRequest.onreadystatechange = function(){
  //
  //   if(this.readyState == 4 && this.status == 200) {
  //     console.log(this.responseText);
  //   }
  //   else if (this.readyState == 4){
  //     // this.status !== 200, error from server
  //     console.log(this.responseText);
  //   }
  // };


  // completeRequest.open("POST", "http://ws.audioscrobbler.com/2.0/" + stringToPass, true);
  // completeRequest.setRequestHeader("Content-type", "application/json");
  // completeRequest.setRequestHeader("x-api-key", apiKeyLFM);
  // completeRequest.send(JSON.stringify(data));
  // console.log("success");

});

for (var i=0; i<result1.length; i++){
  checkArtist(result1[i].music_brainz_id);
}


// Songkick
function checkArtist(music_brainz_id){
  var xhttp = new XMLHttpRequest();
  var location = document.getElementById("submitCity").value;

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("hey");
      var e = JSON.parse(this.responseText);
      console.log(e);
      console.log(e.length);
      for (var i=0; i<e.length; i++){
        if (e[i].city.displayName == location){
          console.log("cha-ching");
        }
        else{
          console.log("nah fam");
        }
      }
    } else if (this.readyState == 4) {

      // this.status !== 200, error from server
      console.log("milk");
      console.log(this.responseText);

    }
  };

  xhttp.open("GET", urlBaseSK + music_brainz_id + urlMidSK + apiKeySK + "}", true);
  xhttp.setRequestHeader("x-api-key", apiKeySK);
  xhttp.send();
}


function renderCode(result) {
  var result = document.createElement("article");

}
