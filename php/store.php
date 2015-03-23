<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
$jsonReceiveData = json_encode($_POST);

$dir = 'sqlite:./study.db';
$dbh  = new PDO($dir) or die("cannot open the database");

$stm = "INSERT INTO results VALUES('".($jsonReceiveData)."');";
$ex = $dbh->prepare($stm);
$ex->execute();

$arr = array("result"=>"ok");
echo json_encode($arr);

