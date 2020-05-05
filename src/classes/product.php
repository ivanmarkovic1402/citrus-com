<?php

namespace App\Classes;

require_once realpath("../vendor/autoload.php");

use App\Db\DbHandler;
use App\Classes\Comment;


class Product extends dbHandler
{

    public function getAllProducts()
    {
        $query = "SELECT *
                  FROM products
                  ORDER BY id ASC
                  LIMIT 9";
        $justProducts = $this->do_my_query($query);
        $products = $this->combineProductsAndComments($justProducts);

        return $products;
    }

    private function combineProductsAndComments($justProducts)
    {
        $comment = new Comment();
        $comments = $comment->getAllComments();

        $productsWithComments = [];

        foreach($justProducts as $k=>$justProduct){
            $productsWithComments[$k] =[
                'product_id' => $justProduct->id,
                'product_title' => $justProduct->title,
                'product_description' => $justProduct->description,
                'product_img' => $justProduct->img,
            ];
            $productsWithComments[$k]['comments'] = array();
            foreach($comments as $comment){

                if($justProduct->id == $comment->product_id){
                    $product_comments = [
                        'comment_id' => $comment->id,
                        'comment_name' => $comment->name,
                        'comment_email' => $comment->email,
                        'comment_text' => $comment->text,
                        'comment_approved' => $comment->approved
                    ];
                    array_push($productsWithComments[$k]['comments'], $product_comments);
                }
            }
        }
        return $productsWithComments;
    
    }



}




?>