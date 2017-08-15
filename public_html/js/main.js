
$(document).ready(function () {
    $('#burger').click(function(){
        if($('#burger').attr('class')==='burger_on'){
           
           console.log("BURGER PRESSED",$('#burger').attr('class')); 
           $('#burger').removeClass('burger_on');
           $('nav').css('display','none');
        }
        else{
            $('nav').css('display','block');
            
            console.log("BURGER PRESSED",$('#burger').attr('class')); 
            $('#burger').attr('class','burger_on');
        }        
    });
    
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });
    $('.slider_lw').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 500,
        slidesToShow:4,
        adaptiveHeight: true,
        arrows: true
    });
});
