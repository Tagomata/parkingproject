//Inicializa y agrega el mapa
function initMap(){

    const ubicacion = new Location(()=>{

        //Almacena latitud y longitud en una variable.
        //const myLatLng = {lat: ubicacion.latitude, lng: ubicacion.longitude};
        const myLatLng = {lat: 4.644147, lng:  -74.102229};


        /*
        Para agrupar marcadores
        Crea un array de caracteres para nombrar los marcadores.
        */
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        //Contenido de la ventana de información
        var text = '<h1> Parqueadero Salitre </h1>' + '<p> Precio: 5.800 noche </p>' + '<a href="https://www.google.com">Arrendar ahora</a>'

        //Contiene las opciones del mapa
        const options = {
            center: myLatLng,
            //Zoom del mapa
            zoom: 15
        }

        //Obtiene el elemento para dibujar el mapa.
        var map = document.getElementById('map');

        //Dibujar el mapa
        // const mapa = new google.maps.Map(Donde_se_dibuja_el_mapa , Opciones_del_mapa).
        const mapa = new google.maps.Map(map, options);
        
        //Imagen para el marcador.
        var image = './img/garaje.png';


        //Creación del marcador
        const mark = new google.maps.Marker({
            //Posición del marcador
            position: myLatLng,
            //Mapa donde se va a colocar el marcador
            map: mapa,
            //Imagen del icono
            icon: image,
            //Titulo del mapa
            tittle: "Parqueadero 1"
        });

        //Marcadores de ejemplo para parqueadero
        //Posiciones de parqueaderos:
        var pospark1 = {lat: 4.646482, lng: -74.096642};
        var pospark2 = {lat: 4.650449, lng: -74.079878 };
        var pospark3 = {lat: 4.648725, lng: -74.090103};
        var pospark4 = {lat: 4.644470, lng: -74.074593};

        var park1 = new google.maps.Marker({
            position: pospark1 ,
            map: mapa,
            tittle: "Parqueadero 1",
            icon: image
        });
        var park1 = new google.maps.Marker({
            position: pospark2,
            map: mapa,
            icon: image,
            tittle: "Parqueadero 2"
        });
        var park1 = new google.maps.Marker({
            position: pospark3,
            map: mapa,
            icon: image,
            tittle: "Parqueadero 3"
        });
        var park1 = new google.maps.Marker({
            position: pospark4,
            map: mapa,
            icon: image,
            tittle: "Parqueadero 4"
        });

        //Ventana de información
        var information = new google.maps.InfoWindow({
            //Contenido
            content: text
        });

        //Listener para desplegar información con un click
        mark.addListener('click', function(){
            //Recibe el mapa y marcador.
            information.open(mapa, mark)
            
        });
    });

}