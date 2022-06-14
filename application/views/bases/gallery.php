<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/gallery.css">
<div class="base_carrusel">
    <div class="arrows">
        <div class="arrow_left" id="arrow_left"><img src="<?php echo base_url(); ?>assets/img/logo/arrow_left.png" width="50"></div>
        <div class="arrow_right" id="arrow_right"><img src="<?php echo base_url(); ?>assets/img/logo/arrow_right.png" width="50"></div>
    </div>
    <div class="carrusel" id="carrusel">
        <div class="contenido_carrusel" id="contenido_carrusel">
        </div>
    </div>
</div>

<div class="modal" tabindex="-1" id="modal_gallery">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="imgGaleria">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
   
    $(document).ready(function (){

        const datosGaleria = '<?php echo $dataGaleria; ?>'
        var screen = $(window).width();
        var cantCard = getCards(screen);
        var galeriaData = JSON.parse(datosGaleria);
        var firstId = 0;
        var lastId = 0;
        var contenedor = 1;
        completarGaleria(0);

        $(window).on('resize', function() {
            screen = $(window).width();
            cantCard = getCards(screen);
            completarGaleria(0);
        });
        
        $('#arrow_right').click(function(){
           $('.contenido_carrusel').animate({left: "-=500px"}, 'fast');
        });

        $('#arrow_left').click(function(){
            $('.contenido_carrusel').animate({left: "+=500px"}, 'fast');
        });


        $('.view_modal').click(function(){
            var idImg = $(this).attr('id');
            console.log("idImg", idImg);
            $('#imgGaleria').html('<img width="100%" class="view_modal" src="<?php base_url(); ?>assets/img/galeria_fotos/'+idImg+'">');
            $("#modal_gallery").modal('show');
        });

        function completarGaleria(index){
            let cardComplete = '';
            let contSum = 0;
            let totalContenedores = Math.ceil(galeriaData.length / cantCard);
            for (let i = 0; i < galeriaData.length; i++) {
                contSum = contSum+1;
                if(contSum === 1){ cardComplete += '<div class="contenedor_imgs" id="cont_'+contenedor+'">' };
                cardComplete += '<div class="card bg-dark card_carrusel"><img class="view_modal" width="250" id="'+galeriaData[i]+'" src="<?php base_url(); ?>assets/img/galeria_fotos/'+galeriaData[i]+'"></div>';
                if(contSum === cantCard){  cardComplete += '</div>'; contSum = 0; }

            }

            $('#contenido_carrusel').html(cardComplete);
        }

        function getCards(size){
            cantCards = 1;
            switch(true){
                case (size == 0 &&  size < 500) :
                    cantCards = 1;
                break;
                case (size >= 500 &&  size < 700) :
                    cantCards = 2;
                break;
                case (size >= 700 &&  size < 1024) :
                    cantCards = 3;
                break;
                case (size > 1024) :
                    cantCards = 4;
                break;
            }
            return cantCards;
        }
    });



</script>