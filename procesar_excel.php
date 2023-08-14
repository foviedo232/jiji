<?php
require 'vendor/autoload.php'; // Asegúrate de tener la ruta correcta

use PhpOffice\PhpSpreadsheet\IOFactory;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_FILES["archivo_excel"]["error"] == UPLOAD_ERR_OK) {
        $nombre_temporal = $_FILES["archivo_excel"]["tmp_name"];

        try {
            $spreadsheet = IOFactory::load($nombre_temporal);
            $sheet = $spreadsheet->getActiveSheet();
            
            echo "<h1>Datos del archivo Excel</h1>";
            echo "<table border='1'>";
            foreach ($sheet->getRowIterator() as $row) {
                echo "<tr>";
                foreach ($row->getCellIterator() as $cell) {
                    echo "<td>" . $cell->getValue() . "</td>";
                }
                echo "</tr>";
            }
            echo "</table>";
        } catch (Exception $e) {
            echo "Error al procesar el archivo: " . $e->getMessage();
        }
    } else {
        echo "Error al subir el archivo.";
    }
}
?>
