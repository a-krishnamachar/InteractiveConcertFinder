var apiKeyLFM = "ff816a82b0283ee65eed14160f8902ce";
var apiKeySK = "kH6YaddvZi7KUUsH";

var urlBaseSK = "https://api.songkick.com/api/3.0/artists/mbid:";
var urlMidSK = "/calendar.json?apikey=";
var urlWholeSK = "https://api.songkick.com/api/3.0/artists/mbid:{music_brainz_id}/calendar.json?apikey={your_api_key}"

//https://www.last.fm/api/downloads

/* Create a LastFM object */
var lastfm = new LastFM({
  apiKey    : 'ff816a82b0283ee65eed14160f8902ce',
  apiSecret : '260fbdb1ffbf5ee5b819c653a37b6cd7'
  // cache     : cache
});

var result1;

//this is linked to the "Search" button
document.getElementById("submitItem").addEventListener("click", function(event) {
  var list = [];

  var completeRequest = new XMLHttpRequest();
  event.preventDefault();

  var data = {
    text: document.getElementById("searchBox").value
  }
  var artist = document.getElementById("searchBox").value;

  //calls last.fm API through lastfm.api.js - helper API method on last.fm/api/downloads
  lastfm.artist.getSimilar({artist: artist, api_key: apiKeyLFM}, {success: function(data){
  }, error: function(code, message){
    console.log("go away");
  }});

  completeRequest.onreadystatechange = function(){
    var normal = "";
    if(this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);

      var JSONResponse = this.responseText;

      normal = JSON.parse(JSONResponse);
      console.log(normal.similarartists);
      // console.log(normal.similarartists.artist[1].name);

      list = document.createElement("UL");

      console.log(list);
      //clears out concerts every time "Search" is clicked
      document.getElementById("listGang").innerHTML = "";
      for (var i=0; i<100; i++){
        //this calls checkArtist function - hits Songkick api to find concerts in the desired city
        checkArtist(normal.similarartists.artist[i].mbid);
      }

    }
    else if (this.readyState == 4){
      // this.status !== 200, error from server
      console.log(this.responseText);
    }
  };

  var stringToPass = "?method=artist.getsimilar&artist=" + artist + "&api_key=" + apiKeyLFM + "&format=json";

  completeRequest.open("POST", "https://ws.audioscrobbler.com/2.0/" + stringToPass, true);
  completeRequest.setRequestHeader("Content-type", "application/json");
  completeRequest.setRequestHeader("x-api-key", apiKeyLFM);
  completeRequest.send(JSON.stringify(data));
  console.log("success");

});

var x = [];
list = document.createElement("UL");

// Songkick function!
function checkArtist(music_brainz_id){

  var xhttp = new XMLHttpRequest();
  var location = document.getElementById("searchCity").value;

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var e = JSON.parse(this.responseText);
      console.log(e);

      var events = e.resultsPage.results.event;
      var eventlist = document.createElement("UL");

      //only runs if there are actually concerts for a selected artist!
      if (e.resultsPage.results.totalEntries != 0) {

        for (var i = 0; i < events.length; i++){
          if (events[i].location.city.includes(location)){
            console.log("cha-ching");
            console.log(events[i]);
            var li = document.createElement("LI");
            li.innerHTML = events[i].displayName;
            eventlist.appendChild(li);
          }
          else{
            console.log("nope, errorrrr");

          }
        }
        console.log(document.getElementById("listGang").childNodes.length);

      }
      //actually visually appends to the list
      document.getElementById("listGang").appendChild(eventlist);
    } else if (this.readyState == 4) {
      // this.status !== 200, error from server
      console.log("hmm nope");
      console.log(this.responseText);

    }
  };

  //submits xhttp request
  xhttp.open("GET", urlBaseSK + music_brainz_id + urlMidSK + apiKeySK, true);
  xhttp.setRequestHeader("x-api-key", apiKeySK);
  xhttp.send();
}

//tried playing around with this, but didn't work to our satisfaction :/
function showElement() {
  var x = document.getElementById("textLine");
  if (document.getElementById("listGang").childNodes.length = 0) {
    console.log(document.getElementById("listGang").childNodes.length);
    x.style.display = "none";
  } else {
    console.log(document.getElementById("listGang").childNodes.length);
    x.style.display = "block";
  }
}
