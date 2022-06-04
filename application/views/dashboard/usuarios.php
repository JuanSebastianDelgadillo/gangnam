<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-3">
            <h1 class="m-0">Escuela</h1>
          </div><!-- /.col -->
          <div class="col-sm-3">
            <a class="btn btn-primary" href="<?php echo base_url(); ?>dashboard/editar">+ Nuevo alumno</i></a>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>dashboard">Home</a></li>
              <li class="breadcrumb-item active">Escuela</li>
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
          <div class="col-lg-12 col-12 d-flex" style="flex-wrap: wrap;">
                <!-- CARD -->
                <?php 
                    foreach($usuarios as $usuario){
                        if($usuario->avatar){
                            $avatar = base_url()."assets/img/perfil_foto/".$usuario->avatar;
                        }else{
                            $avatar = base_url()."assets/img/logo/perfil.png";
                        }

                        echo '<div class="card" style="width:300px; margin:10px;">';
                        echo ' <img class="card-img-top" src="'.$avatar.'" alt="Card image">';
                        echo '<div class="card-body">';
                        echo '<h4 class="card-text text-center">'.$usuario->nombre." ".$usuario->apellido.'</h4>';
                        echo '<p class="card-text text-center">'.$usuario->grado.'</p>';
                        echo '<p class="card-text text-center">'.$usuario->email.'</p>';
                        echo '<a class="btn btn-danger m-1 delete" id="'.$usuario->id.'&'.$usuario->nombre.'">Eliminar</a>';
                        echo '<a class="btn btn-primary m-1" href="'.base_url().'dashboard/editar/'.$usuario->id.'">Editar</a>';
                        echo '</div>';
                        echo '</div>';
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

<script>
    $(document).ready(function(){
        var id;
        var nombre;
        
        $(".delete").click(function(e){
            var datos = $(this).attr("id");
            var idNombre = datos.split('&');
            id = idNombre[0];
            nombre = idNombre[1]

            $('#modalDelete').modal('show');
            $('#alert_borrar').html("¿Esta seguro que desea eliminar a "+idNombre[1]+ '?');
        });

        $("#borrar").click(function(e){
            e.preventDefault();
            $.ajax({
                url: "<?php echo base_url();?>dashboard/eliminar/"+id,
                type: "post",
                data: {id},
                cache: false,
                dataType:'json',
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

</script>