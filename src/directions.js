

/****************************** Directions - USER STORY 4 ******************************/
/** 
* @author: Dylan McCrindle
*
*/

/**
* Global Variables Required for directions to function:
*/
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var dal = new google.maps.LatLng(44.636452,-63.592418);
  var mapOptions = {
    zoom:9,
    center: dal
  }
  map = new google.maps.Map(document.getElementById('placemap'), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('buildingNameEdit').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
// /********************************* END OF DIRECTIONS **********************************/

// $(document).ready(function () {
//     var map;
//     var elevator;
//     var myOptions = {
//         zoom: 1,
//         center: new google.maps.LatLng(0, 0),
//         mapTypeId: 'terrain'
//     };
//     map = new google.maps.Map($('#placemap')[0], myOptions);

//     var addresses = ['Norway', 'Africa', 'Asia','North America','South America'];

//     for (var x = 0; x < addresses.length; x++) {
//         $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
//             var p = data.results[0].geometry.location
//             var latlng = new google.maps.LatLng(p.lat, p.lng);
//             new google.maps.Marker({
//                 position: latlng,
//                 map: map
//             });

//         });
//     }

// });

