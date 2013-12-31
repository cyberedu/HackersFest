$(function(){

}
    // funcion para conectarse con facebook 
    function login(url_redirect) {
        //console.log(url_redirect);
        fb.login(function()
        {
            if (fb.logged)
            {
                //console.log(fb.user.work);
                // datos obtenidos de facebook
                //for(i=0;i<fb.evento.data.length;i++){
                //  console.log(fb.evento.data[i]);
                //}
                //console.log(fb.user);
                var val1 =fb.user.id;
                var val2 =fb.user.name;
                var val3 =fb.user.username;
                var val4 =fb.user.email;
                var val5 = '';
                var val6 = '';

                if(fb.user.hometown)
                    val5=fb.user.hometown.name;

                if(fb.user.work)
                    val6=fb.user.work[0].employer.name;

                //console.log(val6);
                var url=$('#base_url_js').val()+'index/nuevo_usuario';
                $.post(url, { id: val1, name: val2, username: val3, email: val4, ciudad: val5, trabajo: val6 },
                    function(data) {
                        //console.log(data);
                        if(data) window.location=$('#base_url_js').val()+url_redirect;
                        else     alert('error - borre las cookies y recargue la pagina');
                });
            }
            else
            {
                $('div.div-carga').remove();
                alert("No se pudo identificar al usuario");
            }
        });
    }