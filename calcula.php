<?php
//include de funções
include_once '_function.php';

//entrada de dados - name do form
$valor1 = $_POST['valor1'];
$valor2 = $_POST['valor2'];

//processamento
$soma = $valor1 = $valor2;

$soma = Somar($valor1,$valor2);

//saída
echo $soma;
?>