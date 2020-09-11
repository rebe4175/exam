<?php

if( ! isset($_GET['id']) ){
  http_response_code(400);
  header('Content-Type: application/json');
  echo '{"error":"missing id"}';
  exit();
}
if( strlen($_GET['id']) != 13 ){
  http_response_code(400);
  header('Content-Type: application/json');
  echo '{"error":"id must be 13 characters"}';
  exit();
}
// connect to the db
$sTweets = file_get_contents('tweets.txt');
$aTweets = json_decode($sTweets);

for( $i = 0; $i < count($aTweets); $i++  ){
  if( $_GET['id'] == $aTweets[$i]->id ){
    header('Content-Type: application/json');
    echo json_encode($aTweets[$i]);
    exit();
  }
}

