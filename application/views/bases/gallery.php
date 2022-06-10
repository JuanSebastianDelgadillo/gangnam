<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/gallery.css">
<div class="base_carrusel">
    <div class="arrows">
        <div class="arrow_left" id="arrow_left"><img src="<?php echo base_url(); ?>assets/img/logo/arrow_left.png" width="50"></div>
        <div class="arrow_right" id="arrow_right"><img src="<?php echo base_url(); ?>assets/img/logo/arrow_right.png" width="50"></div>
    </div>
    <div class="carrusel" id="carrusel"></div>
</div>

<div class="modal" tabindex="-1" role="dialog" id="modal_gallery">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Galeria de fotos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="modal_gallery_pictures"></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
   
    $(document).ready(function (){
        var screen = $(window).width();
        var cantCard = getCards(screen);
        var galeriaData = null;
        var firstId = 0;
        var lastId = 0;
        getGalery();

        $(window).on('resize', function() {
            screen = $(window).width();
            cantCard = getCards(screen);
            completarGaleria(0);
        });
        
        function getGalery(){
            $.ajax({
            url: "<?php echo base_url('getGaleria');?>",
            type: "post",
            cache: false,
            dataType:'json',
            success: function (data) {
                galeriaData = data.payload;
                completarGaleria(0);
            }
            });
        }

        $('#arrow_right').click(function(){
            if(lastId < galeriaData.length && lastId+cantCard < galeriaData.length){
                completarGaleria(lastId+1);
            }else{
                completarGaleria(0);
            }
        });

        $('#arrow_left').click(function(){
            console.log("a ver",(lastId+1)-cantCard);
            if(lastId > cantCard){
                completarGaleria((lastId-cantCard)-1);
            }
        });


        $('.view_modal').click(function(){
            console.log("click");
            $("#modal_gallery").modal('show');
        });

        function completarGaleria(index){
            var cardComplete = '';
            for (let i = 0; i < cantCard; i++) {
                var indexLoc = index+i;
                cardComplete += '<div class="card bg-dark card_carrusel"><img class="view_modal" id="img&'+galeriaData[indexLoc]+'" src="./assets/img/galeria_fotos/'+galeriaData[indexLoc]+'"></div>';
                lastId = indexLoc;
            }
            $('#carrusel').html(cardComplete);
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