<?php

session_start();

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $title = $_POST['title'] ?? '';
    $bodyPos = $_POST['bodyPost'] ?? '';
}   



include 'db.php';

if(isset($_SESSION['username'])){
    $stmt = $db->prepare("insert into posts (user_id, title, post) values (:i, :t, :b)");
    $stmt->execute([':i' => $_SESSION["user_id"], ':t' => $title, ':b' => $bodyPos]);
    header('Location: ../index.html');
}else{
    header('Location: ../index.html?PostErro=1');
}
