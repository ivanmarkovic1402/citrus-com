<?php
namespace App\Classes;
require_once realpath("../vendor/autoload.php");

use App\Db\DbHandler;

class Comment extends dbHandler
{
    public function getAllComments()
    {
        $query = "SELECT * FROM comments";
        // $query = "SELECT *, GROUP_CONCAT(c.text)
        // FROM
        //     products p
        //         LEFT JOIN comments c ON (p.id = c.product_id)
        // GROUP BY
        //     p.id";
        $comments = $this->do_my_query($query);
        return $comments;
    }
}










?>