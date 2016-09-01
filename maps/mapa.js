// JavaScript Document
var map;
// JavaScript Document
var pousadasParnaíba;

 
function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-2.8690897, -41.6405027),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);


        var marker = new google.maps.Marker({
                position: new google.maps.LatLng(-2.899630, -41.778229),
                title: "Pousadas Vila Parnaíba",
                map: map
            });
			
		var marker = new google.maps.Marker({
                position: new google.maps.LatLng(-2.909803,-41.756587),
                title: "Pousada dos Ventos",
                map: map
            });


}

initialize();

