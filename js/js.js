$(document).ready(function() {  

    axios.get('/processing/processingProducts.php')
    .then(function (response) {
        console.log(response.data);

        makeProductTable(response.data);
    })
    .catch(function (error) {
        console.log(error);
        // console.log("error");
    });
}); 



function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}

function makeComments(comments){
    let commentDiv = '';

    if(typeof comments !== 'undefined' && comments.length > 0){
        $.each(comments, function(k, comment){
            if(comment.comment_approved == 1){
                commentDiv += "<p class='description'>" + comment.comment_text + "</p>";
                commentDiv += "<br>";
                commentDiv += "<div class='small float-right'>Posted by " + comment.comment_name + "</div><br>";
                commentDiv += "<hr>";
            }else{
                commentDiv += "<p>No comments for this product</p>";
            }
        });
    }else{
        commentDiv += "<p>No comments for this product</p>";
    }
return commentDiv;
}

function makeProductTable(products){
    let productDiv = '';


    let chunksOfProducts = chunkArray(products, 3);

    $.each(chunksOfProducts, function(key, value){
        productDiv += "<div class='col-md-4 col-sm-6 col-xs-12'>";
        productDiv += "<div class='d-flex justify-content-between'>";
            $.each(value, function(key, val){
                productDiv += "<div class='text-center px-3'>";
                productDiv += "<img src='img/" + val.product_img + "' alt='...' class='img-responsive'></img>";
                productDiv += "<h3>" + val.product_title + "</h3>";
                productDiv += "<hr>";
                productDiv += "<p class='description'>" + val.product_description + "</p>";
                productDiv += "<hr>";
                productDiv += "<h6>Comments</h6>";
                productDiv += "<hr>";
                productDiv += makeComments(val.comments);
                // productDiv += makeCommentForm();
                productDiv += "</div>";
            });
        productDiv += "</div>";
        productDiv += "</div>";
    });

    $('#productDiv').html(productDiv);

}


