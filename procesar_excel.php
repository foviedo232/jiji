<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_FILES["archivo_excel"]["error"] == UPLOAD_ERR_OK) {
        $nombre_temporal = $_FILES["archivo_excel"]["tmp_name"];
        $nombre_archivo = $_FILES["archivo_excel"]["name"];

        // Aquí puedes usar una biblioteca como PHPExcel o PhpSpreadsheet para procesar el archivo Excel
        // Por ejemplo:
        // require 'PHPExcel.php';
        // $excel = PHPExcel_IOFactory::load($nombre_temporal);
        
        // Procesar y mostrar los datos del archivo Excel
        echo "Archivo subido con éxito: $nombre_archivo";
    } else {
        echo "Error al subir el archivo.";
    }
}
?>
