<?php

session_start();

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_SESSION['username'] = $_POST['name'] ?? '';
    $_SESSION['password'] = password_hash($_POST['password'], PASSWORD_DEFAULT) ?? '';

}

include 'db.php';

$users = $db->query("select * from users");

$canCreateUser = true;

while($table = $users->fetch(PDO::FETCH_NUM)){
    if($_SESSION['username'] == $table[1]){
        header('Location: ../cadastro.html?erro=1');
        $canCreateUser = false;
    }
}

if($canCreateUser){
        $stmt = $db->prepare("insert into users (username, password) values (:u , :p)");
        $stmt->execute([':u' => $_SESSION['username'], ':p' => $_SESSION['password']]);
        header('Location: ../login.html?create=1');
}

