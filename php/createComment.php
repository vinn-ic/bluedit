<?php
session_start();

include 'db.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $comment = $_POST['comment'];
  $postID = $_POST['post-id'];
}

if(isset($_SESSION['username'])){
  $stmt = $db->prepare("insert into comment (post_id,user_id,comment) value (:p ,:u, :c)");
  $stmt->execute([':p' => $postID, ':u' => $_SESSION['user_id'], ':c' => $comment]);
  header('Location: ../showPost.html?PostId=${$postID}');


}else{
  header('Location: ../showPost.html?PostId=${$postID}');
}
