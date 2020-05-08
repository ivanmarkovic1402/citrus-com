<?php
namespace App\Classes;
require_once realpath("../vendor/autoload.php");

use App\Db\DbHandler;

class Comment extends dbHandler
{
    public function getAllComments()
    {
        $query = "SELECT * FROM comments";
        $comments = $this->do_my_query($query);
        return $comments;
    }

    public function postComment($product_id, $name, $email, $comment_text)
    {
        $query = "INSERT into comments (product_id, name, email, text) VALUES (:product_id, :name, :email, :text)";
        $params = [
            ':product_id' => $product_id,
            ':name'       => $name,
            ':email'      => $email,
            ':text'       => $comment_text,
        ];

        try{
            $this->do_my_query($query, $params);
        }catch(PDOException $e){
            $e->getMessage();
        }

    }

    public function approveComment($comment_id)
    {
        $query = "UPDATE comments SET approved=:approved WHERE id=:id";
        $params = [
            ':id'       => $comment_id,
            ':approved' => 1,
        ];

        try{
            $this->do_my_query($query, $params);
        }catch(PDOException $e){
            $e->getMessage();
        }
    }

    public function deleteComment($comment_id)
    {
        $query = "DELETE FROM comments WHERE id=:id";
        $params = [
            ':id'       => $comment_id,
        ];

        try{
            $this->do_my_query($query, $params);
        }catch(PDOException $e){
            $e->getMessage();
        }
    }



}



?>