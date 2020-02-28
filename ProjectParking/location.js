//Esta clase obtiene los datos de la ubicación
class Location{

    constructor(callback){
        //Verificar si el objeto navigator esta disponible (Permite obtener la ubicacion actual).
        if (navigator.geolocation) {
            //Obtiene la ubicacion

            //Obtiene Latitud y Longitud
            navigator.geolocation.getCurrentPosition((position)=>{
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;

                callback();
            })
        }else{
            alert("El navegador no soporta geolocalización.")
        }
    }
}