$(document).ready(function() {

    axios.get('/processing/processingProducts.php')
    .then(function (response) {
        makeCommentsApproveTable(response.data);
    })
    .catch(function (error) {
        console.log(error);
        // console.log("error");
    });

});

function makeCommentsApproveTable(products){
    let commentApprove = '';
    $.each(products, function(key, value){
        $.each(value.comments, function(k, val){
            if(val.comment_approved == 0){
                commentApprove += "<tr>";
                commentApprove += "<td>" + val.comment_name + "</td>";
                commentApprove += "<td>" + val.comment_email + "</td>";
                commentApprove += "<td>" + val.comment_text + "</td>";
                commentApprove += "<td>" + val.comment_date + "</td>";
                commentApprove += "<td><button class='btn btn-success' id='btnApprove" + val.comment_id + "' data-comment=" + val.comment_id + ">Approve this comment</button></td>";
                commentApprove += "<td><button class='btn btn-danger' id='btnDelete" + val.comment_id + "' data-comment=" + val.comment_id + ">Delete this comment</button></td>";
                commentApprove += "</tr>";
            }
        });
    });

    $("#commentAdminTable tbody").append(commentApprove);
}



    $('#commentAdminTable').on('click', '[id^=btnApprove]', function(){

        var comment_id = $(this).attr("data-comment");
        var action     = "approve";

        var result = confirm("Are you sure you want to approve this comment?");
        if (result) {
                $.ajax({
                    method: 'POST',
                    url: 'processing/processingComment.php',
                    data: { comment_id:comment_id, action:action},

                }).done(function(response) {
                    window.location.reload(true);
                }).fail(function(response) {
                    console.log({"no":response});
                }).always(function() {
                    location.reload();
                });
        }
    });

    $('#commentAdminTable').on('click', '[id^=btnDelete]', function(){

        var comment_id = $(this).attr("data-comment");
        var action     = "delete";

        var result = confirm("Are you sure you want to delete this comment?");
        if (result) {
                $.ajax({
                    method: 'POST',
                    url: 'processing/processingComment.php',
                    data: { comment_id:comment_id, action:action},

                }).done(function(response) {
                    window.location.reload(true);
                }).fail(function(response) {
                    console.log({"no":response});
                }).always(function() {
                    location.reload();
                });
        }
    });

