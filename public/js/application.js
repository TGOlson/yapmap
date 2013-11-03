$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

});

  function initialize(locations) {
    var mapOptions = {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

    // var locations = [[-35.363882,131.044922]]; //test data

    for (var i = 0; i < locations.length; i++) {
 	  var spot = locations[i];
      addMarker(map, spot);
      // alertTest(spot, i);
    }
  }

  function addMarker(map, spot) {
    var myLatlng = new google.maps.LatLng(spot[0], spot[1]);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!"
    }); 	
  }

  function alertTest(spot, i) {
  	alert("Spot " + i + "\n\n-Latitude:  " + spot[0] + "\n-Longitude: " + spot[1]);
  }