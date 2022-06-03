<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Perfil</h1>
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
    <?php $usuario = $this->session->userdata('user_session'); ?> 
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-lg-3 col-6">
                <!-- CARD -->
                <div class="card" style="width:250px">
                <?php if($usuario["foto"]){
                    $avatar = base_url()."assets/img/perfil_foto/".$usuario["avatar"];
                }else{
                    $avatar = base_url()."assets/img/logo/perfil.png";
                }
                ?>
                    <img class="card-img-top" src="<?php echo $foto; ?>" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-text text-center"><?php echo $usuario["nombre"]." ".$usuario["apellido"]; ?></h4>
                        <p class="card-text text-center"><?php echo $usuario["grado"]; ?></p>
                        <p class="card-text text-center"><?php echo $usuario["email"]; ?></p>
                    </div>
                </div>
                <!-- CARD -->
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- /.content-wrapper -->