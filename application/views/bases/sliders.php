<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/sliders.css">
<div class="base_slider">
    <div class="base_titles">
        <div class="titles">
            <h1>TAEKWONDO GANGNAM</h1>
            <h3>Escuelas Gang-nam</h3>
        </div>
   </div>
   <div class="base_video">
        <div class="style_video rounded-circle">
            <img src="<?php echo base_url(); ?>assets/img/video/video-play-icon.png" class="rounded-circle" alt="" data-bs-toggle="modal" data-bs-target="#exampleModal">
        </div>
   </div>
    <img src="<?php echo base_url(); ?>assets/img/sliders/fondo1.png">
</div>

<!-- Modal -->
<div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <button (click)="closeModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <video id="videoHeader" width="500" height="300" controls>
            <source src="<?php echo base_url(); ?>assets/img/video/video.mp4" type="video/mp4">
            Tu explorador no soporta videos...
          </video>
      </div>
    </div>
  </div>