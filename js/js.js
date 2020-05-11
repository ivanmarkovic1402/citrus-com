
$(document).ready(function() {  
    axios.get('/processing/processingProducts.php')
    .then(function (response) {
        let products = response.data;
        makeProductTable(products);
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
                commentDiv += "<br><div class='d-flex  items-align-bottom  justify-content-between'>";
                commentDiv += "<div class='small float-left'>" + comment.comment_date + "</div><br>";
                commentDiv += "<div class='small float-right'>Posted by " + comment.comment_name + "</div></div>";
                commentDiv += "<hr>";
            }
        });
    }
    if(commentDiv == ''){
        commentDiv += "<p>No comments for this product</p>";
    }
return commentDiv;
}

function makeCommentButton(product_id){
    let commentButton = '';

    commentButton +=`<div class="mb-4">
                        <div class="text-left">
                        <a href="#" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#basicModal${product_id}" data-id="${product_id}" id="newComment_btn${product_id}">New Comment</a>
                        </div>
                    </div>`;

    return commentButton;
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
                productDiv += makeCommentButton(val.product_id);
                productDiv += "<hr>";
                productDiv += makeComments(val.comments);
                productDiv += "</div>";
            });
        productDiv += "</div>";
        productDiv += "</div>";
    });

    $('#productDiv').html(productDiv);

}


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validation(data){
  let formError = [];

    $.each(data, function(key, value){

      if(key == 'comment_text'){
        value !== '' ? true : formError.push('Error: Comment field can not be empty');
      }

      if(key == 'name'){
        value !== '' ? true : formError.push('Error: Name field can not be empty');
      }

      if(key == 'email'){
        value !== '' ? true : formError.push('Error: Email field can not be empty');
        let emailReg = validateEmail(value);
        emailReg ? true : formError.push('Error: Email not in right format');
      }
    });
    return formError;
}

$(document).on('click', '[id^=newComment_btn]', function(){
    let modal = '';

    let id = $(this).attr('data-id');
    modal = commentModal(id);

    $('body').append(modal);

});


$(document).on('click', '[id^=btnSubmitComment]', function(e){
    e.preventDefault();

    let data = {};

    let product_id = $('#product_id').val();
    let name = $('#name' + product_id).val();
    let email = $('#email' + product_id).val();
    let comment_text = $('#comment_text' + product_id).val();

    data = {
        name : name,
        email : email,
        comment_text : comment_text,
        product_id : product_id
    };

    let formValidation = validation(data);

    if(typeof formValidation !== 'undefined' && formValidation.length > 0){
      $.each(formValidation, function(key, value){
        alert(value);
      });
      return;
    }

    $.ajax({
        url: "/processing/processingComment.php",
        method: "POST",
        data: data,
        success: function(r) {

          location.reload();

          // console.log(r);
        //   if (r == 'ok') {
            // $('#alertText').html('Action successfull');
            // $('#alertDiv').show();
    
            // setTimeout (function() {
            //   $('#alertDiv').hide();
            // }, 2000);
        //   }
        },
      }).fail(function(r) {
        console.log('i failed');
        // console.log(r);
      }).always(function(r) {
        // $('#imgDiv').hide();
      });

});

$('#loginForm').on('click', '#btnSubmit', function(e){
  e.preventDefault();

  let username = $('#username').val();
  let password = $('#password').val();

  $.ajax({
    url:'processing/processingLogin.php',
    method: "POST",
    data: {username: username, password:password},
    success: function(res){
      location.href = 'adminpanel.php'
    }
  }).fail(function(res){
    console.log('error');
    console.log(res);
  });

});
