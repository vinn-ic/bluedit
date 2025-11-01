<?php
session_start();

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_SESSION['username'] = $_POST['name'] ?? '';
    $_SESSION['password'] = $_POST['password'] ?? '';

    //password_hash($password, PASSWORD_DEFAULT);
}

include 'db.php';


$users = $db->query("select * from users");

while($table = $users->fetch(PDO::FETCH_NUM)){
    //echo "username " . $table[1] . "<br> password " .  $table[2] . "<br>";
    if($_SESSION['username'] == $table[1] && password_verify($_SESSION['password'] ,$table[2])){
        $user_id = $db->query(' select id from users where username = "'. $_SESSION['username'] .'"'); 
        while($row = $user_id->fetch(PDO::FETCH_NUM)){
            $_SESSION['user_id'] = $row[0];
        }
        header('Content-Type: application/json');
        echo json_encode(['showUser' => $_SESSION['username']]);
        header("Location: ../index.html?login=". $_SESSION['username']);

    }else{
        header("Location: ../login.html?login=1");
    }

}

