<?php 
    $jsonString = file_get_contents('cardInfoContainer.json');
    $data = json_decode($jsonString, true);
    // add information to the json 
    $data[3]['title'] = "Sesto titolo";
    $data[3]['subtitle'] = "Sesto sottotitolo";
    $data[3]['description'] = "Sesta descrizione";
    $data[3]['link'] = "Sesto link";
    
    $newJsonString = json_encode($data);
    file_put_contents('cardInfoContainer.json', $newJsonString);
    //echo $newJsonString;
    $secondoTitolo = $data[1]['title']; 
    echo $newJsonString;
?>