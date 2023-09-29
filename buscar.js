document.addEventListener('DOMContentLoaded', function () {
    function buscar() {
        // Obtener el valor de la medida ingresada por el usuario
        var medidaBuscada = document.getElementById('inputMedida').value;

        // Cargar la base de datos desde el archivo externo
        loadScript('algoa.js', function () {
            // Buscar en la base de datos
            for (var i = 0; i < baseDatos.length; i++) {
                if (baseDatos[i].Medida === medidaBuscada) {
                    // Mostrar los resultados
                    document.getElementById('resultadoDescripcion').innerText = baseDatos[i].Descripcion;
                    document.getElementById('resultadoArticulo').innerText = baseDatos[i].Articulo;
                    return; // Salir del bucle una vez que se encuentre la coincidencia
                }
            }

            // Manejar el caso en que no se encuentre ninguna coincidencia
            document.getElementById('resultadoDescripcion').innerText = 'No se encontraron resultados';
            document.getElementById('resultadoArticulo').innerText = '';
        });
    }

    // Función para cargar un script dinámicamente
    function loadScript(src, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = callback;
        document.head.appendChild(script);
    }
});
