<?php

require_once realpath("../vendor/autoload.php");


use App\Classes\Product;

$product = new Product();
$products = $product->getAllProducts();
echo json_encode($products);


?>