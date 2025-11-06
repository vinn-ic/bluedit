<?php

session_start();

include 'db.php';


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $postId = $_POST['post-id'];
}

$commentDb = $db->query("select * from comment where post_id = {$postId};");
$comment = [];

while($table = $commentDb->fetch(PDO::FETCH_ASSOC)){
  $TableUserName = $db->query("select username from users where id = {$table['user_id']}");
  while($res = $TableUserName->fetch(PDO::FETCH_NUM)){
    $username = $res[0];
  }

  $comment[] = [
    'username' => $username ?? '',
    'comment' => $table['comment'] ?? '',
    'time' => $table['data_comment'] ?? ''
  ];

}

header('Content-Type: application/json');

echo json_encode(['comments' => $comment]);
