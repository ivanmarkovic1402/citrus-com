
<div class="container">

<!-- basic modal -->
<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Comment</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <form action='#' method='POST'>
            <input type='text' name='name' id='name' class='form-control' placeholder='Your name'>
            <input type='email' name='email' id='email' class='form-control' placeholder='Your email'>
            <textarea name='comment_text' id='comment_text' class='form-control' placeholder='Your comment' rows='4' cols='50'></textarea>
            <input type='hidden' value='' name='product_id'>  
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <input type='submit' name='btnSubmit' id='btnSubmit' data-id='' value='Post comment' class='btn btn-success'>
      </div>
    </div>
  </div>
</div>
