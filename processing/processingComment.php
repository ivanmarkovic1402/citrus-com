<?php

    require_once realpath("../vendor/autoload.php");
    use App\Classes\Comment;
    $comment = new Comment();

    if(isset($_POST['product_id']) && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['comment_text'])){
        $comment->postComment($_POST['product_id'],$_POST['name'], $_POST['email'], $_POST['comment_text']);
    }

echo json_encode($_POST);

?>