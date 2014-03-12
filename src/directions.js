

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
var artsmap;
var burbidgemap;
var chasemap;
var chemmap;
var dentistrymap;
var dunnmap;
var csmap;
var hicksmap;
var rowemap;
var killammap;
var lscmap;
var mccainmap;
var monacampbellmap;
var submap;
var tuppermap;
var lawmap;
var multimap;

//Location and options for ALL maps
function initialize() {

  /* ---------- Arts  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var artsCoor = new google.maps.LatLng(44.637735,-63.588473)
  var mapOptions = {
    zoom:17,
    center: artsCoor
  }
  //Draw the Map
  artsmap = new google.maps.Map(document.getElementById('artsMap'), mapOptions);
  directionsDisplay.setMap(artsmap);

  //Marker
  var marker = new google.maps.Marker({ position: artsCoor });
  marker.setMap(artsmap);
  /* ---------- END Arts  -----------   */

  /* ---------- BURBIDGE  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var burbidgeCoor = new google.maps.LatLng(44.639313,-63.585281)
  var mapOptions = {
    zoom:17,
    center: burbidgeCoor
  }
  //Draw the Map
  burbidgemap = new google.maps.Map(document.getElementById('burbidgeMap'), mapOptions);
  directionsDisplay.setMap(burbidgemap);

  //Marker
  var marker = new google.maps.Marker({ position: burbidgeCoor });
  marker.setMap(burbidgemap);
  /* ---------- END BURBIDGE  -----------   */

  /* ---------- CHASE  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chaseCoor = new google.maps.LatLng(44.637059,-63.593159)
  var mapOptions = {
    zoom:17,
    center: chaseCoor
  }
  //Draw the Map
  chasemap = new google.maps.Map(document.getElementById('chaseMap'), mapOptions);
  directionsDisplay.setMap(chasemap);

  //Marker
  var marker = new google.maps.Marker({ position: chaseCoor });
  marker.setMap(chasemap);
  /* ---------- END CHASE  -----------   */

  /* ---------- CHEM  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chemCoor = new google.maps.LatLng(44.636815,-63.591917)
  var mapOptions = {
    zoom:17,
    center: chemCoor
  }
  //Draw the Map
  chemmap = new google.maps.Map(document.getElementById('chemMap'), mapOptions);
  directionsDisplay.setMap(chemmap);

  //Marker
  var marker = new google.maps.Marker({ position: chemCoor });
  marker.setMap(chemmap);
  /* ---------- END CHEM  -----------   */

  /* ---------- DENTISTRY  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var dentistryCoor = new google.maps.LatLng(44.638542,-63.585222)
  var mapOptions = {
    zoom:17,
    center: dentistryCoor
  }
  //Draw the Map
  dentistrymap = new google.maps.Map(document.getElementById('dentistryMap'), mapOptions);
  directionsDisplay.setMap(dentistrymap);

  //Marker
  var marker = new google.maps.Marker({ position: dentistryCoor });
  marker.setMap(dentistrymap);
  /* ---------- END DENTISTRY  -----------   */

  /* ---------- DUNN  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var dunnCoor = new google.maps.LatLng(44.637857,-63.593336)
  var mapOptions = {
    zoom:17,
    center: dunnCoor
  }
  //Draw the Map
  dunnmap = new google.maps.Map(document.getElementById('dunnMap'), mapOptions);
  directionsDisplay.setMap(dunnmap);

  //Marker
  var marker = new google.maps.Marker({ position: dunnCoor });
  marker.setMap(dunnmap);
  /* ---------- END DUNN  -----------   */

  /* ---------- CS  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var csCoor = new google.maps.LatLng(44.637483,-63.587269)
  var mapOptions = {
    zoom:17,
    center: csCoor
  }
  //Draw the Map
  csmap = new google.maps.Map(document.getElementById('csMap'), mapOptions);
  directionsDisplay.setMap(csmap);

  //Marker
  var marker = new google.maps.Marker({ position: csCoor });
  marker.setMap(csmap);
  /* ---------- END CS  -----------   */

  /* ---------- HICKS  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var hicksCoor = new google.maps.LatLng(44.636208,-63.593108)
  var mapOptions = {
    zoom:17,
    center: hicksCoor
  }
  //Draw the Map
  hicksmap = new google.maps.Map(document.getElementById('hicksMap'), mapOptions);
  directionsDisplay.setMap(hicksmap);

  //Marker
  var marker = new google.maps.Marker({ position: hicksCoor });
  marker.setMap(hicksmap);
  /* ---------- END HICKS  -----------   */

  /* ---------- ROWE  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var roweCoor = new google.maps.LatLng(44.637095,-63.588556)
  var mapOptions = {
    zoom:17,
    center: roweCoor
  }
  //Draw the Map
  rowemap = new google.maps.Map(document.getElementById('roweMap'), mapOptions);
  directionsDisplay.setMap(rowemap);

  //Marker
  var marker = new google.maps.Marker({ position: roweCoor });
  marker.setMap(rowemap);
  /* ---------- END ROWE  -----------   */

  /* ---------- KILLAM  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var killamCoor = new google.maps.LatLng(44.637366,-63.590825)
  var mapOptions = {
    zoom:17,
    center: killamCoor
  }
  //Draw the Map
  killammap = new google.maps.Map(document.getElementById('killamMap'), mapOptions);
  directionsDisplay.setMap(killammap);

  //Marker
  var marker = new google.maps.Marker({ position: killamCoor });
  marker.setMap(killammap);
  /* ---------- END KILLAM  -----------   */

  /* ---------- LSC  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var lscCoor = new google.maps.LatLng(44.636082,-63.593795)
  var mapOptions = {
    zoom:17,
    center: lscCoor
  }
  //Draw the Map
  lscmap = new google.maps.Map(document.getElementById('lscMap'), mapOptions);
  directionsDisplay.setMap(lscmap);

  //Marker
  var marker = new google.maps.Marker({ position: lscCoor });
  marker.setMap(lscmap);
  /* ---------- END LSC  -----------   */

  /* ---------- MCCAIN  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mccainCoor = new google.maps.LatLng(44.637326,-63.589503)
  var mapOptions = {
    zoom:17,
    center: mccainCoor
  }
  //Draw the Map
  mccainmap = new google.maps.Map(document.getElementById('mccainMap'), mapOptions);
  directionsDisplay.setMap(mccainmap);

  //Marker
  var marker = new google.maps.Marker({ position: mccainCoor });
  marker.setMap(mccainmap);
  /* ---------- END MCCAIN  -----------   */

  /* ---------- MONACAMPBELL  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var monacampbellCoor = new google.maps.LatLng(44.63905,-63.590769)
  var mapOptions = {
    zoom:17,
    center: monacampbellCoor
  }
  //Draw the Map
  monacampbellmap = new google.maps.Map(document.getElementById('monacampbellMap'), mapOptions);
  directionsDisplay.setMap(monacampbellmap);

  //Marker
  var marker = new google.maps.Marker({ position: monacampbellCoor });
  marker.setMap(monacampbellmap);
  /* ---------- END MONACAMPBELL  -----------   */

  /* ---------- SUB  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var subCoor = new google.maps.LatLng(44.636891,-63.589184)
  var mapOptions = {
    zoom:17,
    center: subCoor
  }
  //Draw the Map
  submap = new google.maps.Map(document.getElementById('subMap'), mapOptions);
  directionsDisplay.setMap(submap);

  //Marker
  var marker = new google.maps.Marker({ position: subCoor });
  marker.setMap(submap);
  /* ---------- END SUB  -----------   */

  /* ---------- TUPPER  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var tupperCoor = new google.maps.LatLng(44.639206,-63.583935)
  var mapOptions = {
    zoom:17,
    center: tupperCoor
  }
  //Draw the Map
  tuppermap = new google.maps.Map(document.getElementById('tupperMap'), mapOptions);
  directionsDisplay.setMap(tuppermap);

  //Marker
  var marker = new google.maps.Marker({ position: tupperCoor });
  marker.setMap(tuppermap);
  /* ---------- END TUPPER  -----------   */

  /* ---------- LAW  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var lawCoor = new google.maps.LatLng(44.638046,-63.58747)
  var mapOptions = {
    zoom:17,
    center: lawCoor
  }
  //Draw the Map
  lawmap = new google.maps.Map(document.getElementById('lawMap'), mapOptions);
  directionsDisplay.setMap(lawmap);

  //Marker
  var marker = new google.maps.Marker({ position: lawCoor });
  marker.setMap(lawmap);
  /* ---------- END LAW  -----------   */



    /* ---------- MAIN MAPS  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var dal = new google.maps.LatLng(44.638046,-63.58747)
  var mapOptions = {
    zoom:16,
    center: dal
  }
  //Draw the Map
  multimap = new google.maps.Map(document.getElementById('multiMap'), mapOptions);
  directionsDisplay.setMap(multimap);

  //Marker
  var coordinates = localStorage.class1BuildingCoord;
  var splitCoordinates = coordinates.split(",");
  var marker = new google.maps.Marker({ position: new google.maps.LatLng(splitCoordinates[0], splitCoordinates[1]) });
  marker.setMap(multimap);

  var coordinates = localStorage.class2BuildingCoord;
  var splitCoordinates = coordinates.split(",");
  var marker = new google.maps.Marker({ position: new google.maps.LatLng(splitCoordinates[0], splitCoordinates[1]) });
  marker.setMap(multimap);

  var coordinates = localStorage.class3BuildingCoord;
  var splitCoordinates = coordinates.split(",");
  var marker = new google.maps.Marker({ position: new google.maps.LatLng(splitCoordinates[0], splitCoordinates[1]) });
  marker.setMap(multimap);

  var coordinates = localStorage.class4BuildingCoord;
  var splitCoordinates = coordinates.split(",");
  var marker = new google.maps.Marker({ position: new google.maps.LatLng(splitCoordinates[0], splitCoordinates[1]) });
  marker.setMap(multimap);

  var coordinates = localStorage.class5BuildingCoord;
  var splitCoordinates = coordinates.split(",");
  var marker = new google.maps.Marker({ position: new google.maps.LatLng(splitCoordinates[0], splitCoordinates[1]) });
  marker.setMap(multimap);

  var coordinates = localStorage.class6BuildingCoord;
  var splitCoordinates = coordinates.split(",");
  var marker = new google.maps.Marker({ position: new google.maps.LatLng(splitCoordinates[0], splitCoordinates[1]) });
  marker.setMap(multimap);
  /* ---------- END MAIN MAPS  -----------   */

}


function findDirections(lat, longt){
(function ( $ ) {
  $.fn.GeoLocation = function( options ) {
    var settings = $.extend({
      dest: { latitude: 44.637735, longitude: -63.588473 },
   //   dest: { latitude: lat, longitude: longt },
    }, options );
    
  //  var dest = new google.maps.LatLng(settings.dest.latitude, settings.dest.longitude);
    var dest = new google.maps.LatLng(lat, longt);
       
    return this.each(function() { 
      var element = $(this);
      element.text('Getting your location...');
      
      function displayCurrentPosition(data) {
        element.html('<div class="map-canvas"></div>');
        
        var current = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
        
        var options = {
          center: current,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoom: 10,
        };
        
        var map = new google.maps.Map(element[0], options);
          
        var directions = {
          origin: current,
          destination: dest,
          travelMode: google.maps.DirectionsTravelMode.WALKING
        };
        
        display = new google.maps.DirectionsRenderer({ map: map });
        
        service = new google.maps.DirectionsService();
        service.route(directions, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            display.setDirections(response);
          }
          else
          {
            alert("directions: "+status);
            alert ('failed to get directions ' + status);
          }
        });
      }
      
      function onError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            element.text('Access to location API denied by user');
            break;
          case error.POSITION_UNAVAILABLE:
            element.text('Unable to determine location');
            break;
          case error.TIMEOUT:
            element.text('Unable to determine location, the request timed out');
            break;
          case error.UNKNOWN_ERROR:
            element.text('An unknown error occurred!');
            break;
        }
      }
      
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayCurrentPosition, onError);
      } else {
        element.text('Geolocation is not supported by this browser, please upgrade to a more recent version');
      }
    });
 
  };
 
}( jQuery ));
jQuery('div.dirMap').GeoLocation();
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

