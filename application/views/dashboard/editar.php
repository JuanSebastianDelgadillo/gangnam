<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Perfil de <?php echo $usuario->nombre; ?></h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>dashboard">Home</a></li>
              <li class="breadcrumb-item active">Perfil</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-lg-3 col-6">
                <!-- CARD -->
                <form>
                <div class="card" style="width:350px">
                <?php if($usuario->avatar){
                    $avatar = base_url()."assets/img/perfil_foto/".$usuario->avatar;
                }else{
                    $avatar = base_url()."assets/img/logo/perfil.png";
                }
                ?>
                    <img class="card-img-top" src="<?php echo $avatar; ?>" alt="Card image">
                    <br>
                    <label for="avatar" class="btn btn-primary">Seleccione el avatar</label>
                    <input id="avatar" name="avatar" style="visibility:hidden;" type="file">
                    <!-- <input type="file" class="form-control" id="avatar" accept="image/png, image/jpeg"> -->
                    <div class="card-body">
                        <h4 class="card-text text-center"><input class="form-control" placeholder="Nombre" name="nombre"  id="nombre"type="text" value="<?php echo $usuario->nombre; ?>"></h4>
                        <h4 class="card-text text-center"><input class="form-control" placeholder="Apellido" name="apellido"  id="apellido"type="text" value="<?php echo $usuario->apellido; ?>"></h4>
                        <p class="card-text text-center"><input class="form-control" placeholder="Grado" name="grado"  id="grado"type="text" value="<?php echo $usuario->grado; ?>"></p>
                        <p class="card-text text-center"><input class="form-control" placeholder="Email" name="email"  id="email"type="text" value="<?php echo $usuario->email; ?>"></p>
                        <p class="card-text text-center"><input class="form-control" placeholder="Password" name="password"  id="password"type="password" value="<?php echo $usuario->password; ?>"></p>
                        <p class="card-text text-center"><input class="form-control" placeholder="Orden" name="orden"  id="orden"type="number" value="<?php echo $usuario->orden; ?>"></p>
                    </div>
                    <div class="card-footer">
                    <div class="alert alert-success" role="alert" id="alertTrue" style="display:none;">
                        Guardado correcto, enseguida será redireccionado !!
                    </div>
                    <div class="alert alert-danger" role="alert" id="alertFalse" style="display:none;">
                        ¡No ha podido guardar!
                    </div>
                        <button class="btn btn-primary" id="guardar">Guardar</button>
                    </div>
                </div>
              </form>
                <!-- CARD -->
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- /.content-wrapper -->
<script>
  $(document).ready(function(){
    $("#files").change(function() {
      filename = this.files[0].name
      console.log(filename);
    });

    $("#guardar").click(function(e){

      console.log("Pasando por aca....");
        e.preventDefault();
        var usuario = {
          'nombre'    : $("#nombre").val(),
          'apellido'  : $("#apellido").val(),
          'grado' 	  : $("#grado").val(),
          'perfil' 		: $("#email").val(),
          'password' 	: $("#password").val(),
          'orden' 	  : $("#orden").val(),
          'avatar' 	  : $("#avatar").val()
        };

        var login = {
          'email' 	  : $("#email").val(),
          'password' 	: $("#password").val(),
        };


        $.ajax({
            url: "<?php echo base_url('dashboard/guardar_usuario');?>",
            type: "post",
            data: {usuario, login},
            cache: false,
            dataType: 'json',
            success: function (data) {
                console.log("data",data);
                if (data.payload) {
                    $('#alertTrue').css('display','block');
                    $('#alertFalse').css('display','none');
                    // window.location.href = "<?php echo base_url('dashboard'); ?>";
                } else {
                    console.log("Pasando por aca");
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
  