$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

});

function initialize(locations) {

var MY_MAPTYPE_ID = 'custom_style';

  var featureOpts = [
    {
      stylers: [
        { hue: '#fff' },
        { visibility: 'simplified' },
        { gamma: 0.0 },
        { weight: 1.0 }
      ]
    },
    {
      elementType: 'land',
      stylers: [
        { color: '#f5f5f5' },
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#ffffff' },
      ]
    }
  ];

    var mapOptions = {
        center: new google.maps.LatLng(39.5,-96), // hard-coded to center
        zoom: 5,
        // ui control
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL,
          position: google.maps.ControlPosition.RIGHT_BOTTOM

        },
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,

        mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

      var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

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
		title: spot[2] + " - " + spot[3]
	}); 	
}

function alertTest(spot, i) {
	alert("Spot " + i + "\n\n-Latitude:  " + spot[0] + "\n-Longitude: " + spot[1]);
}