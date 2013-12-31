var base_url = 'http://rikardocorp.com/hackersfest/';
var val;
$(function(){
  //asi se hace js ;)
  var pantalla = {
    resize : function(){
      $(window).on('resize',function(){
        console.log('lol');
        $('#presentacion').css('margin-top',$('header').height());
      });
    },
    init : function(){
      pantalla.resize();
    }
  }
  pantalla.init();



  $('textarea').autosize({append: "\n"});
  // obtener los datos de facebook
  $('#reg').click(function(event){
      // event.stopPropagation();
      $conte = $(this);
      $conte.text('Procesando...');
      login();
      return false;
  });

  // registrar un usuario
  $form = $('#form_reg');
  $('#enviar').click(function(event){
    event.preventDefault();
    var url=base_url+'process.php';

    $.post(url, $form.serialize(), function(data){
      console.log(data);
      var datos =  $.parseJSON(data);
      console.log(datos);
      if(datos[0]){
        nombre = $('#nombre').val();
        $('#reg').text("Gracias por Registrarse, "+nombre);
      }else{
        $('#reg').text("Ocurrio un imprevisto, recarga la página");
      }
      $('#formulario').slideUp("slow");
    });
  });


});


function login() {
    //console.log(url_redirect);
  fb.login(function()
  {
    if (fb.logged)
    {
      // console.log(fb);
      val1 =fb.user.id;
      val2 =fb.user.name;
      val3 =fb.user.username;
      val4 =fb.user.email;
      // console.log(val1+' - '+val2+' - '+val3+' - '+val4);
      $('#id').val(val1);
      $('#nombre').val(val2);
      $('#username').val(val3);
      $('#email').val(val4);

      $('#formulario').slideDown();
      $('#reg').text(val2);
    }
    else
    {
      alert('Usuario no identificado.');
    }
    return val;
  });
}
// funcion para conectarse con facebook 
