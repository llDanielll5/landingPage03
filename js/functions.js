window.onload = function(){

	var map;

	function initializeMap(){

		var mapProp = {
			center: new google.maps.LatLng(-16.08,-48),
			scrollWhell: false,//quero ou não que o scroolwhell funcione
			zoom: 13,//valor do zoom
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("map"),mapProp);

	}

	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
			infoWindow.open(map,marker);
			});
		}else{
			infoWindow.open(map,marker);
		}
		
	}


	initializeMap();

	var conteudo = '<p style="font-weight:bold;color:black;font-size:15px;padding:10px 0;">Nossa Localização</p>';
	addMarker(-16.078542,-47.997353,'',conteudo,true);

	// setTimeout(function(){
	// 	map.panTo({'lat':-15.790837,'lng':-47.882696});
	// },4000);

}