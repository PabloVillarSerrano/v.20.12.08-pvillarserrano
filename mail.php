<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['tlf']))
$tlf = $_POST['tlf'];
if(isset( $_POST['resumen']))
$resumen = $_POST['resumen'];

if(isset( $_POST['nameMOV']))
$nameMOV = $_POST['nameMOV'];
if(isset( $_POST['emailMOV']))
$emailMOV = $_POST['emailMOV'];
if(isset( $_POST['tlfMOV']))
$tlfMOV = $_POST['tlfMOV'];
if(isset( $_POST['resumenMOV']))
$resumenMOV = $_POST['resumenMOV'];


if ($name and $nameMOV === ''){
  echo "Name cannot be empty.";
  die();
}
if ($email and $emailMOV === ''){
  echo "Email cannot be empty.";
  die();
}

  /*else {
    if (!filter_var($email and $emailMOV, FILTER_VALIDATE_EMAIL)){
    echo "Email format invalid.";
    die();
    }
  }*/

$subject = 'Solicitud desde formulario de Contacto';

$content="Nombre del interesado: $name $nameMOV \n
Dirección de correo electrónico: $email $emailMOV \n
Teléfono de contacto indicado: $tlf $tlfMOV \n
Información adicional: $resumen $resumenMOV";
$recipient = "pvillarserrano@gmail.com";
$mailheader = "From: $email $emailMOV \r\n";

mail($recipient, $subject, $content, $mailheader) or die("Error!");
?>
<style>
  @media (max-width: 750px) {
  .ocultarpc{
    display:none;
  }
  }
  @media (min-width: 750px) {
  .ocultarmovil{
    display:none;
  }
  }

</style>
<html>
  <!--  <div class="justify-content-center" style="background-color: #e0a7ca">

      <div class="view jarallax " style="background: url(http://www.pvillarserrano.com/royalsheepgroup/graciasmov.jpg) no-repeat; background-size: cover;  width: 100%; height:100%;">
      </div>
    </div> -->

      <!--PC-->
      <section class="section mb-3 ocultarpc"  style="padding-bottom: ; background-color: #fff;">
        <div class="container pt-2 pb-3 ">
          <div class="row row justify-content-center align-items-center mt-5  ">
            <div class="col-md-12 text-center pt-4">
                <img src="mailPC.png" class="img-fluid img-responsive" style="width: 100%;">
            </div>
          </div>
        </div>  
      </section>
      <!--MÓVIL-->
      <section class="mb-4 ocultarmovil">
      <div class="container">
      <div class="row row justify-content-center align-items-center mt-5  ">
          <div class="col-md-12 text-center pt-4">
                <img src="mailMOV.png" class="img-fluid img-responsive" style="width: 100%;">
            </div>
          </div>
          </div>
      </section>

</html>