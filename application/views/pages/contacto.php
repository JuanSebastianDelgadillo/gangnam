<link href='<?php echo base_url(); ?>assets/css/contacto.css' rel='stylesheet' />
<div class="container p-5">
    <div class="row">
        <h2>Contacto</h2>
    </div>
</div>

<div class="content-wrapper">
    <div class="content">
      <div class="container-fluid">
      <div class="contenedor-contacto" id="contenedor-contacto">
				<div class="contacto">
                    <form>
                        <div class="form-group">
                        <label for="exampleInputEmail1">Nombre Completo</label>
                        <input type="text" class="form-control" id="form-nombre" aria-describedby="emailHelp" placeholder="Nombre Completo"required>   
                        </div>
                        <div class="form-group">
                        <label for="exampleInputEmail1">Teléfono</label>
                        <input type="number" class="form-control" id="form-telefono" aria-describedby="emailHelp" placeholder="912341234" required>   
                        </div>
                        <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="form-email" aria-describedby="emailHelp" placeholder="Enter email" required>
                        <small id="emailHelp" class="form-text text-muted">Ingrese un email válido</small>
                        </div>
                        <div class="form-group">
                        <label for="exampleFormControlTextarea1">Su consulta</label>
                        <textarea class="form-control" id="FormControlTextarea" rows="3" required></textarea>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="copia">
                        <label class="form-check-label" for="exampleCheck1">Enviarme una copia</label>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary" id="btn-env-email">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function(){

    $('#btn-env-email').on('click',function(e){
        e.preventDefault();

        var nombre = $('#form-nombre').val();
        var telefono = $('#form-telefono').val();
        var email = $('#form-email').val();
        var consulta = $('#FormControlTextarea').val();
        var copia = null;

        var chkNombre=false;
        var chkTelefono=false;
        var chkEmail=false;
        var chkConsulta=false;


        if( $('#copia').prop('checked') ) {
            copia = "si";
        }else{
            copia = "no";
        }

        if (nombre!="") { chkNombre=true; }else{ colorear("#form-nombre"); }
        if (telefono!="") { chkTelefono=true; }else{ colorear("#form-telefono"); }
        if (email!="") { chkEmail=true; }else{ colorear("#form-email"); }
        if (consulta!="") { chkConsulta=true; }else{ colorear("#FormControlTextarea"); }
        

        if (chkNombre==true && chkNombre==true && chkEmail==true && chkConsulta==true) {

            var datos = {
                    "nombre" : nombre,
                    "telefono" : telefono,
                    "email":email,
                    "consulta":consulta,
                    "copia":copia
            };

            console.log("Enviando.-");
            $.ajax({
                    data:  datos, //datos que se envian a traves de ajax
                    url:   "<?php echo base_url(); ?>mail/sent.php", //archivo que recibe la peticion
                    type:  'post', //método de envio
                    beforeSend: function () {
                            $("#resultado").html("Enviando, por favor espere ...");
                    },
                    success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            $("#resultado").html(response);
                            $('#form-nombre').val("");
                            $('#form-telefono').val("");
                            $('#form-email').val("");
                            $('#FormControlTextarea').val("");
                            $('#copia').prop('checked', false);
                            
                    }
            });

        }else{
            $("#resultado").html("¡ Debe completar los datos del formulario");
        }

        function colorear(inp){
            $(inp).css("border","1px solid red");
        }
    });

});
</script>