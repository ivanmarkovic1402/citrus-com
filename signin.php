<?php
    session_start();
    

    if(isset($_SESSION['user']) && $_SESSION['user'] == 'admin'){

        header("Location: adminpanel.php");
    }
    
    include ('parts/header.php');
    include ('parts/navbar.php');
?>
<div class="container">
    <div class="offset-md-4 col-md-4">
        <div class="form-group" id="loginForm">
            <form action="#" method="POST">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Enter Username" class="form-control mb-3">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter Password" class="form-control mb-3">
                <button type="submit" class="btn btn-success mt-2" name="btnSubmit" id="btnSubmit">Sign In</button>
            </form>
        </div>
    </div>    
</div>


<?php
    include ('parts/footer.php');
?>