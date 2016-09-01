// Váriáveis necessárias
var map;
var infoWindow;

// A variável markersData guarda a informação necessária a cada marcador
// Para utilizar este código basta alterar a informação contida nesta variável

//Icones

var icone1 = 'img/colins.png' //variavel do link do icone

var markersData = [

//Pontos de Localização
   
   {
      lat: -2.9054523, 
      lng: -41.7743749,
      nome: "Rede Retaguarda",
      morada1:"Endereço: Praça de Santo António 988",
      morada2: "Bairro: Centro",
      codPostal: "64200-000",
	  icon: icone1, //<<<criar variavel para inserir link do icone
	  linkInfor: "#" //inserir link aqui
	
   },
   {
      lat: -2.909751,
      lng: -41.756592,
      nome: "Rede Retaguarda2",
      morada1:"Endereço:Avenida São Sebastião, 2586, 100",
      morada2: "Bairro: Pindorama",
      codPostal: "64215-065",
	  icon: icone1, 
	  linkInfor: "#" //inserir link aqui
	
   }
  
   
   
   
   ];
   
function initialize() {
   var mapOptions = {
	  panControl: false,
	  zoomControl: true,
	  mapTypeControl: true,
	  	mapTypeControlOptions: {
        	style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        	position: google.maps.ControlPosition.BOTTOM_CENTER},
		
      center: new google.maps.LatLng(40.601203,-8.668173),
      zoom: 12,
      mapTypeId: 'roadmap'
   }; // configurações do mapa

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // cria a nova Info Window com referência à variável infowindow
  
   infoWindow = new google.maps.InfoWindow();

   // evento que fecha a infoWindow com click no mapa
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Chamada para a função que vai percorrer a informação
   // contida na variável markersData e criar os marcadores a mostrar no mapa
   displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);

// Esta função vai percorrer a informação contida na variável markersData
// e cria os marcadores através da função createMarker
function displayMarkers(){

   // esta variável vai definir a área de mapa a abranger e o nível do zoom
   // de acordo com as posições dos marcadores
   var bounds = new google.maps.LatLngBounds();
   
   // Loop que vai estruturar a informação contida em markersData
   // para que a função createMarker possa criar os marcadores 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var nome = markersData[i].nome;
      var morada1 = markersData[i].morada1;
      var morada2 = markersData[i].morada2;
      var codPostal = markersData[i].codPostal;
	  var icon = markersData[i].icon;	
	  var linkInfor = markersData[i].linkInfor;	  

      createMarker(latlng, nome, morada1, morada2, codPostal, icon, linkInfor);

      // Os valores de latitude e longitude do marcador são adicionados à
      // variável bounds
      bounds.extend(latlng);  
   }

   // Depois de criados todos os marcadores
   // a API através da sua função fitBounds vai redefinir o nível do zoom
   // e consequentemente a área do mapa abrangida.
   map.fitBounds(bounds);
}

// Função que cria os marcadores e define o conteúdo de cada Info Window.
function createMarker(latlng, nome, morada1, morada2, codPostal, icon, linkInfor){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: nome,
	  icon: icon
	  

   });


   // Evento que dá instrução à API para estar alerta ao click no marcador.
   // Define o conteúdo e abre a Info Window.
   google.maps.event.addListener(marker, 'click', function() {
      
      // Variável que define a estrutura do HTML a inserir na Info Window.
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + nome + '</div>' +
         '<div class="iw_content">' + morada1 + '<br />' +
         morada2 + '<br />' +
         codPostal  + '<br />' + '<a href="'+linkInfor+'" target="_blank">Mais Informações</a>'+' </div></div>';
      
      // O conteúdo da variável iwContent é inserido na Info Window.
      infoWindow.setContent(iwContent);

      // A Info Window é aberta.
      infoWindow.open(map, marker);
   });
   
    // função para aproximar em um determinado ponto
				   
   
}
  function get_ponto(lat, lng, index) {

				      	for (var i = 0; i < markers.length; i++) {
				      		markers[i].setAnimation(null);
				      	}

			            map.setCenter(new google.maps.LatLng(lat, lng));

			            markers[index].setAnimation(google.maps.Animation.BOUNCE);
				      }

				      google.maps.event.addDomListener(window, 'load', initialize);