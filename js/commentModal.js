function commentModal(id){

let commentModal =`
<div class="container">

<div class="modal fade" id="basicModal${id}" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Comment</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="myFormDiv${id}">

        <form action='#' method='POST' id='commentForm${id}'>
            <input type='text' name='name${id}' id='name${id}' class='form-control' value='' placeholder='Your name'>
            <input type='email' name='email${id}' id='email${id}' class='form-control' value='' placeholder='Your email'>
            <textarea name='comment_text${id}' id='comment_text${id}' class='form-control' value='' placeholder='Your comment' rows='4' cols='50'></textarea>
            <input type='hidden' value='${id}' name='product_id' id='product_id' />

        </form>

      </div>
      <div class="modal-footer">
        <button type="button" id="closeBtn" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type='submit' name='btnSubmitComment${id}' id='btnSubmitComment${id}' data-id='${id}' class='btn btn-success' >Post comment</button>
      </div>
    </div>
  </div>
</div>
`;
return commentModal;
}
{/* <button type='submit' name='btnSubmitComment${id}' id='btnSubmitComment${id}' data-id='${id}' class='btn btn-success'>Post comment</button> */}
