function initMap() {
  var center = {lat:  33.506767, lng: -111.952428};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: center
  });
  var marker = new google.maps.Marker({
    position: center,
    map: map
  });
  var locations = [
    ['Scottsdale Mall<br>\
    7333 E Scottsdale Mall Scottsdale Historical Museum, Scottsdale, AZ 85251-4414<br>', 33.492914,-111.923572],
    ['Scottsdale Museum of the West<br>\
    3830 N Marshall Way, Scottsdale, AZ 85251-5594<br>', 33.492445,-111.928559],
    ['Scottsdale Center for the Arts<br>\
    7380 E 2nd St Civic Center Boulevard, Scottsdale, AZ 85251-5604<br>', 33.491833,-111.922253],
    ['Railroad Park<br>\
    7301 E Indian Bend Rd, Scottsdale, AZ 85250<br>', 33.536869,-111.922114],
    ['Circus of Illusion<br>\
    6105 N Cattle Track Rd Cattle Track Theater, Scottsdale, AZ 85250-4605<br>', 33.524799,-111.916594],
    
  ];
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}
