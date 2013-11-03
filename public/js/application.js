$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(39.639538, -96.117969),
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);

var spots = [[51.49960695, -0.197574246],
             [39.639538, -96.117969]];

  setMarkers(map, spots);
}

function setMarkers(map, locations) {

  for (var i = 0; i < locations.length; i++) {
    var spot = locations[i];
    var myLatLng = new google.maps.LatLng(spot[1], spot[2]);

	// To add the marker to the map, use the 'map' property
	var marker = new google.maps.Marker({
	    position: myLatLng,
	    map: map,
	    title:"Hello World!"
	});
  };
}
