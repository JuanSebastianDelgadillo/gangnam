<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-3">
            <h1 class="m-0">Escuela</h1>
          </div><!-- /.col -->
          <div class="col-sm-3">
            <a class="btn btn-primary" href="dashboard/editar">+ Nuevo alumno</i></a>
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
          <div class="col-lg-12 col-12 d-flex">
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
                        echo '<a class="btn btn-primary" href="'.base_url().'dashboard/editar/'.$usuario->id.'">Editar</a>';
                        echo '</div>';
                        echo '</div>';
                    }
                ?>
          </div>
        </div>
      </div>
    </section>
</div>