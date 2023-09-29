document.addEventListener('DOMContentLoaded', function () {
    function buscar() {
        // Obtener el valor de la medida ingresada por el usuario
        var medidaBuscada = document.getElementById('inputMedida').value;

        // Base de datos simulada
        var baseDatos = [
            { Articulo: '099882', Descripcion: 'Contrafrente Abisagrado Ciego p/S9000 - 300x300', Medida: '300x300' },
            { Articulo: '099982', Descripcion: 'Contrafrente Abulonado Ciego p/S9000 - 300x300', Medida: '300x300' },
            // ... (resto de tus datos)
        ];

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
    }
});
