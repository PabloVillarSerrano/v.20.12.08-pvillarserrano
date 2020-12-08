
  
//Modal script
    $('#myModal').modal({
        keyboard: false
    })

//Scroll animation script
    $( document ).ready(function() {
        new WOW().init();
    });

//carousel script -->
    $('.carousel').carousel({
        interval: false
    })

//ScrollSpy
    $('.videoModal').on('hide.bs.modal', function(e) {    
        var $if = $(e.delegateTarget).find('iframe');
        var src = $if.attr("src");
        $if.attr("src", '/empty.html');
        $if.attr("src", src);
    });   

//Loader
    var loader;
    function loadNow(opacity){
        if(opacity <= 0){
            displayContent();
        }
        else{
            loader.style.opacity = opacity;
            window.setTimeout(function(){
            loadNow(opacity - 0.08)
            }, 100);
        }
    }
    function displayContent(){
        loader.style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }
    document.addEventListener("DOMContentLoaded", function(){
        loader = document.getElementById('loader');
        loadNow(1.5);
    });

//MENU HAMBURGUESA
    $(document).ready(function () {

        $('.second-button').on('click', function () {
        
            $('.animated-icon2').toggleClass('open');
        });
    });


    //VALIDACION DEL FORMULARIO PC 
      function validateForm() {
      var name =  document.getElementById('name').value;
      if (name == "") {
          document.querySelector('.status').innerHTML = "El campo 'Nombre' no puede estar vacío";
          return false;
      }
      var email =  document.getElementById('email').value;
      if (email == "") {
          document.querySelector('.status').innerHTML = "El campo 'Email' no puede estar vacío";
          return false;
      } 
      var tlf =  document.getElementById('tlf').value;
      var resumen =  document.getElementById('resumen').value;
  
      var updates =  document.getElementById('updates').value;
      if (document.getElementById('updates').checked) {
        document.getElementById('contact-form').submit();
        } 
        else{
          document.querySelector('.status').innerHTML = "Es necesario aceptar la política de privacidad";
          return false;   
        } 
    }
  
    //VALIDACION DEL FORMULARIO MOV
      function validateFormMOV() {
      var nameMOV =  document.getElementById('nameMOV').value;
      if (nameMOV == "") {
          document.querySelector('.statusMOV').innerHTML = "El campo 'Nombre' no puede estar vacío";
          return false;
      }
      var emailMOV =  document.getElementById('emailMOV').value;
      if (emailMOV == "") {
          document.querySelector('.statusMOV').innerHTML = "El campo 'Email' no puede estar vacío";
          return false;
      } 
      var tlfMOV =  document.getElementById('tlfMOV').value;
      var resumenMOV =  document.getElementById('resumenMOV').value;
  
      var updatesMOV =  document.getElementById('updatesMOV').value;
      if (document.getElementById('updatesMOV').checked) {
        document.getElementById('contact-formMOV').submit();
        } 
        else{
          document.querySelector('.statusMOV').innerHTML = "Es necesario aceptar la política de privacidad";
          return false;   
        } 
    }
