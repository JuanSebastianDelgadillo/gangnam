<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/login.css">
<div class="container">
    <div class="card card-container">
        <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
        <img id="profile-img" class="profile-img-card" src="<?php echo base_url(); ?>assets/img/logo/logo2.png" />
        <p id="profile-name" class="profile-name-card"></p>
        <form class="form-signin">
            <span id="reauth-email" class="reauth-email"></span>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <!-- <div id="remember" class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Recuerdame
                </label>
            </div> -->
            <button (click)="onLogin()" class="btn btn-lg btn-primary p-1">Login</button>
        </form><!-- /form -->
        <a href="<?php echo base_url(); ?>index.php/forgot" class="forgot-password mt-3">
            Olvido la clave?
        </a>
    </div>
</div>