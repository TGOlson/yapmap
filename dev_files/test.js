var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
var mapOptions = {
  zoom: 4,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

// To add the marker to the map, use the 'map' property
var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title:"Hello World!"
});




<script type="text/javascript"> 
  window.onload = function() {
  <% @viewers.each do |v| %>
    addmarker(<%= v.latitude %>, <%= v.longitude %>);
  <% end %> }
</script>