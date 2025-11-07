<?php 
session_start();

include 'db.php';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $postId = $_POST['post-id'] ?? '';
}

$post = $db->query("select * from posts");
$posts = [];

while($table = $post->fetch(PDO::FETCH_ASSOC)){
  if(!isset($postId)){
    $username = $db->query("select username from users where id = {$table['user_id']}");
      while($tableForName = $username->fetch(PDO::FETCH_NUM)){
          $name = $tableForName[0];
      }

      $posts[] = [
        'title' => $table['title'] ?? '',
        'post'  => $table['post'] ?? '',
        'username' => $name ?? '',
        'time'  => $table['created_at'] ?? '',
        'id' => $table['id'],
        
        ];
  }else if(isset($postId) && $postId == $table['id']){
    $username = $db->query("select username from users where id = {$table['user_id']}");
    while($tableForName = $username->fetch(PDO::FETCH_NUM)){
        $name = $tableForName[0];
    }

    $posts[] = [
      'title' => $table['title'] ?? '',
      'post'  => $table['post'] ?? '',
      'username' => $name ?? '',
      'time'  => $table['created_at'] ?? '',
      'id' => $table['id'],
        
    ]; 
  }
}
header('Content-Type: application/json');

echo json_encode(['posts' => $posts]);
