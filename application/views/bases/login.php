<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/login.css">
<div class="container">
    <div class="card card-container">
        <img id="profile-img" class="profile-img-card" src="<?php echo base_url(); ?>assets/img/logo/logo2.png" />
        <p id="profile-name" class="profile-name-card"></p>
        <form class="form-signin">
            <input type="email" id="inputEmail" name="inputEmail" class="form-control" placeholder="Email" required autofocus>
            <input type="password" id="inputPassword" name="inputPassword" class="form-control" placeholder="Password" required>
            <!-- <div id="remember" class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Recuerdame
                </label>
            </div> -->
            <div class="alert alert-success" role="alert" id="alertTrue" style="display:none;">
                Login correcto, enseguida será redireccionado !!
            </div>
            <div class="alert alert-danger" role="alert" id="alertFalse" style="display:none;">
                ¡Usuario y/o contraseña erronea!
            </div>
            <button class="btn btn-lg btn-primary p-1" id="login">Login</button>
        </form><!-- /form -->
        <a href="<?php echo base_url(); ?>index.php/forgot" class="forgot-password mt-3">
            Olvido la clave?
        </a>
    </div>
</div>

<script>  
  $(document).ready(function(){
    $("#login").click(function(e){
        e.preventDefault();
        $.ajax({
            url: "<?php echo base_url('login_access');?>",
            type: "post",
            data: $("form").serialize(),
            cache: false,
            dataType:'json',
            success: function (data) {
                console.log("data",data);
                if (data.payload) {
                    $('#alertTrue').css('display','block');
                    $('#alertFalse').css('display','none');
                    window.location.href = "<?php echo base_url('dashboard'); ?>";
                } else {
                    $('#alertTrue').css('display','none');
                    $('#alertFalse').css('display','block');
                }
         }
        }).fail( function( jqXHR, textStatus, errorThrown ) {
            $('#alertTrue').css('display','none');
            $('#alertFalse').css('display','block');
        });
    });
});
</script>