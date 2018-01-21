<?php



$jsonArray = array('Status' => 'No Connected',  
                   'Message' => 'None', 
                   'PhotoURL' => '');
                   
    


// --  Credenciales  --//
    $servername = "localhost";
    $username = "thesign_admin";
    $password = "lvosca.inc";
    $dbname = "thesign_app_db";
    $table = "launch_app"
// -------------------//






// --   Conexión   --//
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
// ------------------//








// --   Agregar Photo  --//


/*
$data = 
$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data));
if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
    $data = substr($data, strpos($data, ',') + 1);
    $type = strtolower($type[1]); // jpg, png, gif

    if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
        throw new \Exception('invalid image type');
    }

    $data = base64_decode($data);

    if ($data === false) {
        throw new \Exception('base64_decode failed');
    }
} else {
    throw new \Exception('did not match data URI with image data');
}

file_put_contents("img.{$type}", $data);

*/
$base64string = _POST['b64String'];
file_put_contents('img.png', base64_decode($base64string));

$last_id = $conn->insert_id;
$photo_key = md5($last_id);
$photo_path = $targetPath ;





















$sql = "INSERT INTO $table (dName, dEmail, dPhotoURL,dPhotoKey) VALUES ('John', 'john@example.com','$photo_path','$photo_key')";
$sql_Ok = "";

if ($conn->query($sql) === TRUE) {  
    $sql_Ok = "Ok";
} else {
    $sql_Ok = "No Ok";
}


if ($sql_Ok == "Ok") {  
    
    $jsonArray['Status'] = 'Error';    
    $jsonArray['Message'] = 'No pudo subir foto a db';    
    $jsonArray['PhotoURL'] = '..';  


} else {
    
    $jsonArray['Status'] = 'Error';    
    $jsonArray['Message'] = 'No pudo subir foto a db';    
    $jsonArray['PhotoURL'] = '..'; 
}


// -----------------------------------------//










// -- Objeto de Salida -- //
    $conn->close();
    echo json_encode($jsonArray);
//------------------------//






?>










    <?php
