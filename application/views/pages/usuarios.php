<div class="content-wrapper">
    <div class="row">
        <h2>Alumnos</h2>
    </div>
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-lg-12 col-12 justify-content-center d-flex">
            <?php 
                $director = $usuarios[0];
                $avatarDirector = base_url()."assets/img/perfil_foto/".$director->avatar;
                echo '<div class="card" style="width:300px; margin:10px;">';
                echo ' <img class="card-img-top" src="'.$avatarDirector.'" alt="Card image">';
                echo '<div class="card-body">';
                echo '<h4 class="card-text text-center">'.$director->nombre." ".$director->apellido.'</h4>';
                echo '<h4 class="card-text text-center">Director</h4>';
                echo '<p class="card-text m-0 p-0"><img src="'.base_url().'assets/img/cinturones/'.$director->cinturon.'.png"></p>';
                echo '<p class="card-text m-1 text-center">Cinturón '.$director->descripcionCinturon.'</p>';
                echo '</div>';
                echo '</div>';
            ?>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-12 d-flex" style="flex-wrap: wrap;">
                <!-- CARD -->
                <?php 
                    foreach($usuarios as $usuario){
                        if ($usuario->id != 1) {
                          if($usuario->avatar){
                            $avatar = base_url()."assets/img/perfil_foto/".$usuario->avatar;
                          }else{
                              $avatar = base_url()."assets/img/logo/perfil.png";
                          }
                          echo '<div class="card" style="width:300px; margin:10px;">';
                          echo ' <img class="card-img-top" src="'.$avatar.'" alt="Card image">';
                          echo '<div class="card-body">';
                          echo '<h4 class="card-text text-center">'.$usuario->nombre." ".$usuario->apellido.'</h4>';
                          echo '<p class="card-text m-0 p-0"><img src="'.base_url().'assets/img/cinturones/'.$usuario->cinturon.'.png"></p>';
                          echo '<p class="card-text m-1 text-center">Cinturón '.$usuario->descripcionCinturon.'</p>';
                          echo '</div>';
                          echo '</div>';
                        }
                    }
                ?>
          </div>
        </div>
      </div>
    </section>
</div>

<div class="modal" tabindex="-1" role="dialog" id="modalDelete">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Eliminar</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="alert alert-warning" role="alert">
            <p id="alert_borrar"></p>
        </div>
        <br>
        <div class="alert alert-success" role="alert" id="alertTrue" style="display:none;">
            Eliminado correctamente !!
        </div>
        <div class="alert alert-danger" role="alert" id="alertFalse" style="display:none;">
            ¡No ha podido ser eliminado!
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="borrar">Acceptar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" tabindex="-1" role="dialog" id="cambiarClave">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="clave_usuario_titulo"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="clave1">Escriba una nueva clave</label>
          <input type="text" class="form-control" id="clave1" aria-describedby="emailHelp" placeholder="******"required>   
          <small id="menor-6-pass1"class="form-text text-muted">Mayor a 6 dígitos</small>
        </div>
        <br>

        <div class="form-group">
          <label for="clave1">Confirme la clave</label>
          <input type="text" class="form-control" id="clave2" aria-describedby="emailHelp" placeholder="******"required>   
          <small id="menor-6-pass2"class="form-text text-muted">Mayor a 6 dígitos</small>
        </div>
        <br>
        <div class="alert alert-success" role="alert" id="alertTrueClave" style="display:none;">
            ¡ Claves coinciden !
        </div>
        <div class="alert alert-danger" role="alert" id="alertFalseClave" style="display:none;">
            ¡Claves no coinciden!
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="guardarClave">Guardar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<script>
    $(document).ready(function(){
        var id;
        var nombre;
        var validaClave = false;
        
        $(".delete").click(function(e){
            var datos = $(this).attr("id");
            var idNombre = datos.split('&');
            id = idNombre[0];
            nombre = idNombre[1]

            $('#modalDelete').modal('show');
            $('#alert_borrar').html("¿Esta seguro que desea eliminar a "+idNombre[1]+ '?');
        });

        $(".clave").click(function(e){
            var datos = $(this).attr("id");
            var idNombre = datos.split('&');
            id = idNombre[1];
            nombre = idNombre[0];

            $('#cambiarClave').modal('show');
            $('#clave_usuario_titulo').html("Cambiar clave para "+nombre);
        });

        $("#clave1").keyup(function(e){
          validarPassword();
        });

        $("#clave2").keyup(function(e){
          validarPassword();
        });

        function validarPassword(){
          var clave1 = $('#clave1').val();
          var clave2 = $('#clave2').val();       
          
          if ((clave1.length >= 6 && clave2.length >= 6) && (clave1 == clave2)) {
            validaClave = true;
            $('#alertTrueClave').css('display','block');
            $('#alertFalseClave').css('display','none');
          } else {
            if(clave1.length < 6 || clave2.length < 6){
              $('#menor-6-pass1').css('color', 'red');
              $('#menor-6-pass2').css('color', 'red');
              $('#alertFalseClave').html("Clave muy corta debe ser mayor o igual a 6 carácteres");
            }else{
              $('#alertFalseClave').css('display','block');
              $('#alertTrueClave').css('display','none');
              $('#alertFalseClave').html("Claves no coinciden, intentelo nuevamente");
            }
            validaClave = false;
          }
        }

        $("#borrar").click(function(e){
            e.preventDefault();
            $.ajax({
                url: "<?php echo base_url();?>dashboard/eliminar/"+id,
                type: "post",
                data: {id},
                cache: false,
                dataType:'json',
                success: function (data) {
                    if (data.payload) {
                        $('#alertTrue').css('displa','block');
                        $('#alertFalse').css('display','none');
                        window.location.href = "<?php echo base_url('dashboard/alumnos'); ?>";
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

        $("#guardarClave").click(function(e){
            e.preventDefault();
            if(!validaClave){
              return;
            }
            var clave = $("#clave2").val();
            $.ajax({
                url: "<?php echo base_url();?>dashboard/cambiar/"+id,
                type: "post",
                data: { clave },
                cache: false,
                dataType:'json',
                success: function (data) {
                    if (data.payload) {
                        $('#alertTrue').css('displa','block');
                        $('#alertFalse').css('display','none');
                        window.location.href = "<?php echo base_url('dashboard/alumnos'); ?>";
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