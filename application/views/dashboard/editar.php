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
                <form enctype="multipart/form-data" id="form_user">
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

                        <h4 class="card-text text-center"><input class="form-control" placeholder="Nombre" name="nombre"  id="nombre" type="text" value="<?php echo $usuario->nombre; ?>"></h4>
                        <h4 class="card-text text-center"><input class="form-control" placeholder="Apellido" name="apellido"  id="apellido"type="text" value="<?php echo $usuario->apellido; ?>"></h4>
                        <h4 class="card-text text-center"><input class="form-control" placeholder="Rut" maxlength="10" name="rut"  id="rut" required oninput="checkRut(this)" type="text" value="<?php echo $usuario->rut; ?>"></h4>
                        <label for="cars">Grado</label>
                        <p class="card-text text-center">
                          <select class="form-control" name="grado"  id="grado">
                            <?php 
                              foreach ($grados as $grado) {
                                ?>
                                <option <?php if($usuario->grado == $grado->id) { echo ' selected="selected"'; } ?> value="<?php echo $grado->id; ?>"><?php echo $grado->descripcion; ?></option>';
                              <?php
                              }
                            ?>
                           
                          </select>
                          </p>
                        <p class="card-text text-center"><input class="form-control" placeholder="Email" name="email"  id="email" type="text" value="<?php echo $usuario->email; ?>"></p>
                        <?php if(!$usuario->id){ ?>
                        <p class="card-text text-center"><input class="form-control" placeholder="Password" name="password"  id="password"type="password" value=""></p>
                        <?php } ?>
                        <label for="cars">Perfil</label>
                        <p class="card-text text-center">
                          <select class="form-control" name="perfil"  id="perfil">
                            <?php 
                              foreach ($perfiles as $perfil) {
                                ?>
                                <option <?php if($usuario->perfil == $perfil->id) { echo ' selected="selected"'; } ?> value="<?php echo $perfil->id; ?>"><?php echo $perfil->tipo; ?></option>';
                              <?php
                              }
                            ?>
                           
                          </select>
                          </p>
                          <label for="cars">Orden</label>
                        <p class="card-text text-center"><input class="form-control" placeholder="Orden" name="orden"  id="orden"type="number" value="<?php echo $usuario->orden; ?>"></p>
                        <input type="hidden" id="id" name="id" value="<?php echo $usuario->id; ?>">
                        <input type="hidden" id="name_avatar" name="name_avatar" value="<?php echo $usuario->avatar; ?>">
                      </div>
                    <div class="card-footer">
                    <div class="alert alert-success" role="alert" id="alertTrue" style="display:none;">
                        Guardado correcto, enseguida será redireccionado !!
                    </div>
                    <div class="alert alert-danger" role="alert" id="alertFalse" style="display:none;">
                        ¡No ha podido guardar!
                    </div>
                        <button class="btn btn-warning" id="volver">Volver</button>
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
  var rutValido = true;
  $(document).ready(function(){
    var filename = null;
   
    $("#files").change(function() {
      filename = this.files[0].name
    });

    $("#volver").click(function(e){
      e.preventDefault();
      window.location.href = "<?php echo base_url('dashboard/alumnos'); ?>";
    });

    $("#guardar").click(function(e){
      e.preventDefault();

        if(!rutValido){
          $('#rut').css('border', '2px solid red');
          return;
        }

        var formData = new FormData($("#form_user")[0]);
        $.ajax({
            url: "<?php echo base_url('dashboard/guardar_usuario');?>",
            type: "post",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log("data",data);
                if (data.payload) {
                    $('#alertTrue').css('display','block');
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

function checkRut(rut) {
      // Despejar Puntos
      var valor = rut.value.replace('.','');
      // Despejar Guión
      valor = valor.replace('-','');
      
      // Aislar Cuerpo y Dígito Verificador
      cuerpo = valor.slice(0,-1);
      dv = valor.slice(-1).toUpperCase();
      
      // Formatear RUN
      rut.value = cuerpo + '-'+ dv
      
      // Si no cumple con el mínimo ej. (n.nnn.nnn)
      if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
      
      // Calcular Dígito Verificador
      suma = 0;
      multiplo = 2;
      
      // Para cada dígito del Cuerpo
      for(i=1;i<=cuerpo.length;i++) {
      
          // Obtener su Producto con el Múltiplo Correspondiente
          index = multiplo * valor.charAt(cuerpo.length - i);
          
          // Sumar al Contador General
          suma = suma + index;
          
          // Consolidar Múltiplo dentro del rango [2,7]
          if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
    
      }
      
      // Calcular Dígito Verificador en base al Módulo 11
      dvEsperado = 11 - (suma % 11);
      
      // Casos Especiales (0 y K)
      dv = (dv == 'K')?10:dv;
      dv = (dv == 0)?11:dv;
      
      // Validar que el Cuerpo coincide con su Dígito Verificador
      if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); 
        $('#rut').css('border', '2px solid red');
        rutValido = false;
        return false; 
      }
      
      // Si todo sale bien, eliminar errores (decretar que es válido)
      $('#rut').css('border', '2px solid green');
      rutValido = true;
  }
</script>
  