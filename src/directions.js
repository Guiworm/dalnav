

/****************************** Directions, Maps, & Time - USER STORY 4, 5, 6 ******************************/
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


/*
*	Location and mapping data as well as the options for all maps used on
*	the "FIND", "MAP" and "DIRECTIONS" pages
*
*/
function initialize() {



 /* ---------- RESIDENCES  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var dal = new google.maps.LatLng(44.638046,-63.58747);
  var Risley = new google.maps.LatLng(44.636159, -63.589281);
  var Howe = new google.maps.LatLng(44.638340,-63.591760);
  var Sherrif = new google.maps.LatLng(44.634700, -63.594479);
  var Eliza = new google.maps.LatLng(44.634679, -63.591516);
  var Gerard = new google.maps.LatLng(44.641356, -63.574079);

  var mapOptions = {
    zoom:14,
    center: dal
  };

  //Draw the Map
  residentmap = new google.maps.Map(document.getElementById('resMap'), mapOptions);
  directionsDisplay.setMap(residentmap);
  //Risley
  var contentString1='<p>This is Risley Meal Hall</p>';
  var infowindow1 = new google.maps.InfoWindow({
      content: contentString1
});
var marker1 = new google.maps.Marker({ position: Risley});
  marker1.setMap(residentmap);
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(residentmap,marker1);
  });
google.maps.event.addDomListener(window, 'load', initialize);  
 //Howe
var contentString2='<p>This is Howe Meal Hall</p>';
  var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
});
var marker2 = new google.maps.Marker({ position: Howe});
  marker2.setMap(residentmap);
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(residentmap,marker2);
  });
google.maps.event.addDomListener(window, 'load', initialize);  
  //Sherrif
  var contentString3='<p>This is Sherrif Meal Hall</p>';
  var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
});
var marker3 = new google.maps.Marker({ position: Sherrif});
  marker3.setMap(residentmap);
  google.maps.event.addListener(marker3, 'click', function() {
    infowindow3.open(residentmap,marker3);
  });
google.maps.event.addDomListener(window, 'load', initialize); 
  //Eliza
  var contentString4='<p>This is Eliza Meal Hall</p>';
  var infowindow4 = new google.maps.InfoWindow({
      content: contentString4
});
var marker4 = new google.maps.Marker({ position: Eliza});
  marker4.setMap(residentmap);
  google.maps.event.addListener(marker4, 'click', function() {
    infowindow4.open(residentmap,marker4);
  });
google.maps.event.addDomListener(window, 'load', initialize); 
  //Gerard
var contentString5='<p>This is Gerard Meal Hall</p>';
  var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
});
var marker5 = new google.maps.Marker({ position: Gerard});
  marker5.setMap(residentmap);
  google.maps.event.addListener(marker5, 'click', function() {
    infowindow5.open(residentmap,marker5);
  });
google.maps.event.addDomListener(window, 'load', initialize); 
/* ---------- END RESIDENCES  -----------   */

 /* ---------- PARKING  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var dal = new google.maps.LatLng(44.638046,-63.58747);
  var dalplex = new google.maps.LatLng(44.634063, -63.592768);
  var wickwire = new google.maps.LatLng(44.635916, -63.592068 );
  var howe = new google.maps.LatLng(44.638104, -63.590834);
  var dunn= new google.maps.LatLng(44.637233, -63.593683 );
  var coburg= new google.maps.LatLng(44.637418, -63.596172);
  var permit = new google.maps.LatLng(44.636667, -63.588102);
  var springGarden = new google.maps.LatLng(44.641457, -63.573860);


  var mapOptions = {
    zoom:14,
    center: dal
  };
  
  //Draw the Map
  parkingmap = new google.maps.Map(document.getElementById('parkingMap'), mapOptions);
  directionsDisplay.setMap(parkingmap);

  //Dalplex
  var contentString1='<p>Dalplex Parking</p>';
  var infowindow1 = new google.maps.InfoWindow({
      content: contentString1
});
var marker1 = new google.maps.Marker({ position: dalplex});
  marker1.setMap(parkingmap);
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(parkingmap,marker1);
  });
google.maps.event.addDomListener(window, 'load', initialize);  
  
  //Wickwire
  var contentString2='<p>Wickwire Parking</p>';
  var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
});
var marker2 = new google.maps.Marker({ position: wickwire});
  marker2.setMap(parkingmap);
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(parkingmap,marker2);
  });
google.maps.event.addDomListener(window, 'load', initialize); 
  //Howe Hall
   var contentString3='<p>Howe Hall Parking</p>';
  var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
});
var marker3 = new google.maps.Marker({ position: howe});
  marker3.setMap(parkingmap);
  google.maps.event.addListener(marker3, 'click', function() {
    infowindow3.open(parkingmap,marker3);
  });
google.maps.event.addDomListener(window, 'load', initialize); 
  //Dunn
   var contentString4='<p>Dunn Building Parking</p>';
  var infowindow4 = new google.maps.InfoWindow({
      content: contentString4
});
var marker4 = new google.maps.Marker({ position: dunn});
  marker4.setMap(parkingmap);
  google.maps.event.addListener(marker4, 'click', function() {
    infowindow4.open(parkingmap,marker4);
  });
google.maps.event.addDomListener(window, 'load', initialize); 
  //coburg
   var contentString5='<p>Parking On Coburg</p>';
  var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
});
var marker5 = new google.maps.Marker({ position: coburg});
  marker5.setMap(parkingmap);
  google.maps.event.addListener(marker5, 'click', function() {
    infowindow5.open(parkingmap,marker5);
  });
google.maps.event.addDomListener(window, 'load', initialize); 
  //Parking permit
  var contentString6='<p>Parking Permit Only</p>';
  var infowindow6 = new google.maps.InfoWindow({
      content: contentString6
});
var marker6 = new google.maps.Marker({ position: permit});
  marker6.setMap(parkingmap);
  google.maps.event.addListener(marker6, 'click', function() {
    infowindow6.open(parkingmap,marker6);
  });
google.maps.event.addDomListener(window, 'load', initialize); 
  //Spring Garden
   var contentString7='<p>Spring Garden Road Parking</p>';
  var infowindow7 = new google.maps.InfoWindow({
      content: contentString7
});
var marker7 = new google.maps.Marker({ position: springGarden});
  marker7.setMap(parkingmap);
  google.maps.event.addListener(marker7, 'click', function() {
    infowindow7.open(parkingmap,marker7);
  });
google.maps.event.addDomListener(window, 'load', initialize); 
/* ---------- END PARKING  -----------   */



  /* ---------- Arts  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var artsCoor = new google.maps.LatLng(44.637735,-63.588473);
  var mapOptions = {
    zoom:17,
    center: artsCoor
  };
  //Draw the Map
  artsmap = new google.maps.Map(document.getElementById('artsMap'), mapOptions);
  directionsDisplay.setMap(artsmap);

  //Marker
  var marker = new google.maps.Marker({ position: artsCoor });
  marker.setMap(artsmap);
  /* ---------- END Arts  -----------   */

  /* ---------- BURBIDGE  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var burbidgeCoor = new google.maps.LatLng(44.639313,-63.585281);
  var mapOptions = {
    zoom:17,
    center: burbidgeCoor
  };
  //Draw the Map
  burbidgemap = new google.maps.Map(document.getElementById('burbidgeMap'), mapOptions);
  directionsDisplay.setMap(burbidgemap);

  //Marker
  var marker = new google.maps.Marker({ position: burbidgeCoor });
  marker.setMap(burbidgemap);
  /* ---------- END BURBIDGE  -----------   */

  /* ---------- CHASE  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chaseCoor = new google.maps.LatLng(44.637059,-63.593159);
  var mapOptions = {
    zoom:17,
    center: chaseCoor
  };
  //Draw the Map
  chasemap = new google.maps.Map(document.getElementById('chaseMap'), mapOptions);
  directionsDisplay.setMap(chasemap);

  //Marker
  var marker = new google.maps.Marker({ position: chaseCoor });
  marker.setMap(chasemap);
  /* ---------- END CHASE  -----------   */

  /* ---------- CHEM  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chemCoor = new google.maps.LatLng(44.636815,-63.591917);
  var mapOptions = {
    zoom:17,
    center: chemCoor
  };
  //Draw the Map
  chemmap = new google.maps.Map(document.getElementById('chemMap'), mapOptions);
  directionsDisplay.setMap(chemmap);

  //Marker
  var marker = new google.maps.Marker({ position: chemCoor });
  marker.setMap(chemmap);
  /* ---------- END CHEM  -----------   */

  /* ---------- DENTISTRY  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var dentistryCoor = new google.maps.LatLng(44.638542,-63.585222);
  var mapOptions = {
    zoom:17,
    center: dentistryCoor
  };
  //Draw the Map
  dentistrymap = new google.maps.Map(document.getElementById('dentistryMap'), mapOptions);
  directionsDisplay.setMap(dentistrymap);

  //Marker
  var marker = new google.maps.Marker({ position: dentistryCoor });
  marker.setMap(dentistrymap);
  /* ---------- END DENTISTRY  -----------   */

  /* ---------- DUNN  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var dunnCoor = new google.maps.LatLng(44.637857,-63.593336);
  var mapOptions = {
    zoom:17,
    center: dunnCoor
  };
  //Draw the Map
  dunnmap = new google.maps.Map(document.getElementById('dunnMap'), mapOptions);
  directionsDisplay.setMap(dunnmap);

  //Marker
  var marker = new google.maps.Marker({ position: dunnCoor });
  marker.setMap(dunnmap);
  /* ---------- END DUNN  -----------   */

  /* ---------- CS  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var csCoor = new google.maps.LatLng(44.637483,-63.587269);
  var mapOptions = {
    zoom:17,
    center: csCoor
  };
  //Draw the Map
  csmap = new google.maps.Map(document.getElementById('csMap'), mapOptions);
  directionsDisplay.setMap(csmap);

  //Marker
  var marker = new google.maps.Marker({ position: csCoor });
  marker.setMap(csmap);
  /* ---------- END CS  -----------   */

  /* ---------- HICKS  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var hicksCoor = new google.maps.LatLng(44.636208,-63.593108);
  var mapOptions = {
    zoom:17,
    center: hicksCoor
  };
  //Draw the Map
  hicksmap = new google.maps.Map(document.getElementById('hicksMap'), mapOptions);
  directionsDisplay.setMap(hicksmap);

  //Marker
  var marker = new google.maps.Marker({ position: hicksCoor });
  marker.setMap(hicksmap);
  /* ---------- END HICKS  -----------   */

  /* ---------- ROWE  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var roweCoor = new google.maps.LatLng(44.637095,-63.588556);
  var mapOptions = {
    zoom:17,
    center: roweCoor
  };
  //Draw the Map
  rowemap = new google.maps.Map(document.getElementById('roweMap'), mapOptions);
  directionsDisplay.setMap(rowemap);

  //Marker
  var marker = new google.maps.Marker({ position: roweCoor });
  marker.setMap(rowemap);
  /* ---------- END ROWE  -----------   */

  /* ---------- KILLAM  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var killamCoor = new google.maps.LatLng(44.637366,-63.590825);
  var mapOptions = {
    zoom:17,
    center: killamCoor
  };
  //Draw the Map
  killammap = new google.maps.Map(document.getElementById('killamMap'), mapOptions);
  directionsDisplay.setMap(killammap);

  //Marker
  var marker = new google.maps.Marker({ position: killamCoor });
  marker.setMap(killammap);
  /* ---------- END KILLAM  -----------   */

  /* ---------- LSC  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var lscCoor = new google.maps.LatLng(44.636082,-63.593795);
  var mapOptions = {
    zoom:17,
    center: lscCoor
  };
  //Draw the Map
  lscmap = new google.maps.Map(document.getElementById('lscMap'), mapOptions);
  directionsDisplay.setMap(lscmap);

  //Marker
  var marker = new google.maps.Marker({ position: lscCoor });
  marker.setMap(lscmap);
  /* ---------- END LSC  -----------   */

  /* ---------- MCCAIN  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mccainCoor = new google.maps.LatLng(44.637326,-63.589503);
  var mapOptions = {
    zoom:17,
    center: mccainCoor
  };
  //Draw the Map
  mccainmap = new google.maps.Map(document.getElementById('mccainMap'), mapOptions);
  directionsDisplay.setMap(mccainmap);

  //Marker
  var marker = new google.maps.Marker({ position: mccainCoor });
  marker.setMap(mccainmap);
  /* ---------- END MCCAIN  -----------   */

  /* ---------- MONACAMPBELL  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var monacampbellCoor = new google.maps.LatLng(44.63905,-63.590769);
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
  var subCoor = new google.maps.LatLng(44.636891,-63.589184);
  var mapOptions = {
    zoom:17,
    center: subCoor
  };
  //Draw the Map
  submap = new google.maps.Map(document.getElementById('subMap'), mapOptions);
  directionsDisplay.setMap(submap);

  //Marker
  var marker = new google.maps.Marker({ position: subCoor });
  marker.setMap(submap);
  /* ---------- END SUB  -----------   */

  /* ---------- TUPPER  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var tupperCoor = new google.maps.LatLng(44.639206,-63.583935);
  var mapOptions = {
    zoom:17,
    center: tupperCoor
  };
  //Draw the Map
  tuppermap = new google.maps.Map(document.getElementById('tupperMap'), mapOptions);
  directionsDisplay.setMap(tuppermap);

  //Marker
  var marker = new google.maps.Marker({ position: tupperCoor });
  marker.setMap(tuppermap);
  /* ---------- END TUPPER  -----------   */

  /* ---------- LAW  -----------   */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var lawCoor = new google.maps.LatLng(44.638046,-63.58747);
  var mapOptions = {
    zoom:17,
    center: lawCoor
  };
  //Draw the Map
  lawmap = new google.maps.Map(document.getElementById('lawMap'), mapOptions);
  directionsDisplay.setMap(lawmap);

  //Marker
  var marker = new google.maps.Marker({ position: lawCoor });
  marker.setMap(lawmap);
  /* ---------- END LAW  -----------   */



  /* ---------- MAIN MAPS  -----------   
  Used to find all user defined building locations that have been added through the schedule and to show up in the "MAP" page
  */
  directionsDisplay = new google.maps.DirectionsRenderer();
  var dal = new google.maps.LatLng(44.638046,-63.58747);
  var mapOptions = {
    zoom:14,
    center: dal
  };
  //Draw the Map
  multimap = new google.maps.Map(document.getElementById('multiMap'), mapOptions);
  directionsDisplay.setMap(multimap);

  //Markers for all classes on the MAP page
  //Shows all markers at the same time on the new page
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


/**
*	Takes the destination's latitude and longitude, finds the directions, and
*	plots on the map. (Parts of this function were adapted from code by Jonny Schnittger)
*
*	@author: Dylan & Osama
*/
function findDirections(lat, longt){
(function ( $ ) {
  $.fn.GeoLocation = function( options ) {
    var settings = $.extend({
      dest: { latitude: 44.637735, longitude: -63.588473 },
   //   dest: { latitude: lat, longitude: longt },
    }, options );
    
   // var dest = new google.maps.LatLng(settings.dest.latitude, settings.dest.longitude);
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
        
        //Time to get to class
        directionsService.route(directions, function(response, status){
           if (status == google.maps.DirectionsStatus.OK){
              directionsDisplay.setDirections(response);
              distance = "Approximate walking time: "+response.routes[0].legs[0].duration.text;
              document.getElementById("dirTime").innerHTML = distance;
           }
        });

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


/********************************* END OF DIRECTIONS **********************************/

