<?php
if (!$_POST) {
    header('Location: index.php');
};
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    header('Location: index.php');
    exit();
};

$sUsers = file_get_contents('private/users.txt');
$aUsers = json_decode($sUsers);

// Check for dublicated emails
foreach ($aUsers as $aUser) {
    if ($aUser->email == $_POST['email']) {
        header('Location: index.php');
        exit();
    };
};

$userPasswordHash = password_hash($_POST['password'], PASSWORD_DEFAULT);
$jUser                  = new stdClass(); // {}
$jUser->id              = uniqid();
$jUser->firstname       = $_POST['firstName'];
$jUser->lastname        = $_POST['lastName'];
$jUser->email           = $_POST['email'];
$jUser->password        = $userPasswordHash;

array_push($aUsers, $jUser);
$sTweets = json_encode($aTweets);
file_put_contents('private/users.txt', json_encode($aUsers));
header('Location: login.php');
exit();
