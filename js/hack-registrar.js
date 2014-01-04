var base_url = 'http://localhost/hackersfest/';
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
  $('#presentacion').on('click','#reg.login',function(event){
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
      nombre = $('#nombre').val();
      if(datos[0]){
        $('#reg').text("Gracias por Registrarse, "+nombre);
      }else{
        mensaje = datos[1];
        $('#reg').removeClass('login');
        $('#reg').text(nombre+', '+mensaje);
      }
      $('#formulario').slideUp("slow");
    });
  });

  // webticker
  $("#webticker").webTicker({startEmpty: false,speed:40});

  $("ul#webticker li").hover(function(event){
    w_window = $("#suscritos").width();
    pointer  = event.pageX;
    $conte = $(this);
    cen = w_window-pointer;
    // console.log(cen);
    if(cen >= 240){
      // console.log('derecha');
      $conte.find('.comentario').css({'right': 'auto','left': '100px'});
    }else{
      // console.log('izquierda');
      $conte.find('.comentario').css({'right': '100px','left': 'auto'});
      // console.log($conte.find('.comentario'));      
    }
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
