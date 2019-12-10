var apiKeyTM = 	"GqJDc4WdLvq4lIrCgRiY7kbC5Lvsed5Z";
var secretKeyTM = "D3jU726Jov4okF8j";
var urlTM = "https://app.ticketmaster.com/discovery/v2/";
<script src="ticketmaster-[version].js"></script>

// Get a list of all events for Adele in Canada
//https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ917Gku7&countryCode=CA&apikey=GqJDc4WdLvq4lIrCgRiY7kbC5Lvsed5Z

document.getElementById("submitItem").addEventListener("click", function(event) {

  var city = document.getElementById("searchCity").value;
  var mbid = ;

  var ticketmaster = require('ticketmaster');
  ticketmaster('apiKeyTM').discovery.v2.event.all()
  .then(function(result) {
    // "result" is an object of Ticketmaster events information
  });

}
