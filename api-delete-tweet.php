<?php
 
if (!isset($_GET['id'])) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo '{"error":"missing id"}';
    exit();
}
 
if (strlen($_GET['id']) != 13) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo '{"error":"id is not valid"}';
    exit();
}
 
// connect to the db
$sTweets = file_get_contents('tweets.txt');
$aTweets = json_decode($sTweets, true);
 
for ($i = 0; $i < count($aTweets); $i++) {
    if ($_GET['id'] == $aTweets[$i]['id']) {
        array_splice($aTweets, $i, 1);
        header('Content-Type: application/json');
        echo '{"id": "' . $_GET['id'] . '", "message" :"tweet has been deleted"}';
 
        $sTweets = json_encode($aTweets);
        file_put_contents('tweets.txt', $sTweets);
        exit();
    }
}
header('Content-Type: application/json');
http_response_code(400);
echo '{"message" :