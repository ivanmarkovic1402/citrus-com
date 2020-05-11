<?php

    require_once realpath("../vendor/autoload.php");
    use App\Classes\Comment;
    $comment = new Comment();

    if(isset($_POST['product_id']) && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['comment_text'])){
        $comment->postComment($_POST['product_id'],$_POST['name'], $_POST['email'], $_POST['comment_text']);
    }

    if(isset($_POST['comment_id']) && (isset($_POST['action']) && $_POST['action'] == 'approve')){
        $comment->approveComment($_POST['comment_id']);
    }

    if(isset($_POST['comment_id']) && (isset($_POST['action']) && $_POST['action'] == 'delete' )){
        $comment->deleteComment($_POST['comment_id']);
    }

echo json_encode($_POST);

?>