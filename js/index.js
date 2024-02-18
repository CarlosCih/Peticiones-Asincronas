document.addEventListener("DOMContentLoaded", function() {
    var btnCargarImagen = document.getElementById("btnCargarImagen");
    var imagenContainer = document.getElementById("imagenContainer");
    var tiempoContainer = document.getElementById("tiempo");
    var tiempoInicio;

    btnCargarImagen.addEventListener("click", function() {
        tiempoInicio = Date.now(); //Guardamos el tiempo de inicio
        
        //Petición AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "img/estrellas.jpg", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                
                var tiempoFinal = Date.now(); // Obtener el tiempo final
                var tiempoTranscurrido = (tiempoFinal - tiempoInicio) / 1000; // Calcular el tiempo transcurrido en segundos
                var tiempoFormateado = formatTime(tiempoTranscurrido);
                tiempoContainer.textContent = tiempoFormateado;

                var imagen = document.createElement("img");
                imagen.src = "img/estrellas.jpg";
                imagenContainer.appendChild(imagen);
            }
        };
        xhr.send();
    });
});

function formatTime(milliseconds) {
    var hours = Math.floor(milliseconds / 3600000);
    var minutes = Math.floor((milliseconds % 3600000) / 60000);
    var seconds = Math.floor((milliseconds % 60000) / 1000);
    var remainingMilliseconds = milliseconds % 1000;

    var formattedTime = hours.toString().padStart(2, '0') + ':' +
                        minutes.toString().padStart(2, '0') + ':' +
                        seconds.toString().padStart(2, '0') + '.' +
                        remainingMilliseconds.toString().padStart(3, '0');

    return formattedTime;
}

