<?php
header('Access-Control-Allow-Origin: *'); 

$img = $_POST['imgBase64'];
$img = str_replace('data:image/gif;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$fileData = base64_decode($img);
//saving
$fileName = 'photo.png';
file_put_contents($fileName, $fileData);
  echo "blob";


?>
