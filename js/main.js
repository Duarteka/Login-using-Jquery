
    $('.login-btn').click(function(){
        $('.login-btn').fadeOut('slow', function(){
            $('.contenedor').fadeIn();
             gsap.from('.contenedor', .4, { scale: 0, ease:Sine.easeInOut});
            
        });
    });
    $('.cerrar-btn').click(function(){
         gsap.from('.contenedor', .4, { scale: 1, ease:Sine.easeInOut});
         gsap.from('.contenedor', .4, { left:" 0px,",scale: 0, ease:Sine.easeInOut});
        $('.contenedor, .contenedor-olvidada').fadeOut(800,function(){
            $('login-btn').fadeIn(800);
        });
    });
    $('#olvidado').click(function(){
        $('.contenedor').fadeOut(800, function(){
            $('.contenedor-olvidada').fadeIn();
        });
    });
    $('.cerrar-btn').click(function(){
        $('.contenedor').fadeOut('slow', function(){
            $('.contenedor').fadeIn();
             gsap.from('.contenedor-olvidada', .4, { scale: 0, ease:Sine.easeInOut});
            
        });
    });
    



