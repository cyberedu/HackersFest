<?php
include_once 'conexion.php';
$base_url = 'http://localhost/hackersfest/';

$data = $_POST;


$sql = "SELECT * FROM `registro` WHERE id = ".$data['id'];

$filas = mysql_num_rows(mysql_query($sql));

// validamos que el usuario no este registrado
if($filas==0){

	$sql = "INSERT INTO `registro` (`idregistro`, `id`, `nombre`, `username`, `email`, `mensaje`) VALUES (NULL,'".$data['id']."', '".$data['nombre']."', '".$data['username']."', '".$data['email']."', '".$data['mensaje']."');";

	// echo $data;
	if(mysql_query($sql)){
		$r[0] = TRUE;
	}else{
		$r[0] = FALSE;
		// $r[1] = mysql_error();
		$r[1] = 'Ocurrio un imprevisto, intente nuevamente';
	}
// en caso de ya estra registrado
}else{
	$r[0] = FALSE;
	$r[1] = 'Ya se encuentra registrado.';
}

echo json_encode($r);

?>