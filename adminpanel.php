<?php
    session_start();

    if($_SESSION['user'] != 'admin'){

        header("Location: index.php");
    }
    
    include ('parts/header.php');
    include ('parts/navbar.php');

?>

<div class="container">
    <table class="table table-striped" id="commentAdminTable">
        <thead>
            <td>Posted by</td><td>Email</td><td>Comment</td><td>Date</td><td>Approve</td><td>Delete</td>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>
<?php
    include ('parts/footer.php');
?>
