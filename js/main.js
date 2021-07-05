$(document).ready(function(){


    $(window).on("load",function(){
      $(".load").delay(3000).fadeOut("slow");
    });

    //menu scroll
    var wh = $(window).height();

    $('.menu_wrap>li').each(function(index){
        $(this).attr('data-a',index);
    }).click(function(){
        var menu = $(this).attr('data-a');
        $('html,body').animate({
            scrollTop: wh*menu,
        });
    });

    $('.m_menu_wrap>li').each(function(index){
        $(this).attr('data-a',index);
    }).click(function(){
        var menu = $(this).attr('data-a');
        $('html,body').animate({
            scrollTop: wh*menu,
        });
        $(".hidden_menu_wrap").toggleClass("opend");
    });

    $('#m_port').click(function(){
        $('html,body').animate({
           scrollTop: (wh*3)+(wh/2),
        });
    });

    $('#m_port2').click(function(){
        $('html,body').animate({
           scrollTop: (wh*4)+(wh/2),
        });
    });

    //chart
    
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(wh*1.6 <= sct){
            $('.skill_bar').each(function () {
                var $this = $(this);
                var per = $this.attr('per');
                $this.animate({
                    width: per + "%"
                },1200,'easeOutQuint');
            })
        }
    });

   $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(wh*0.4<=sct){
            $('.txt_animation').animate({
                opacity:1
            },700,'easeInSine');
        }
   });


    //hover
    $('.main_page').hover(function(){
        $('.full').stop().animate({
           top: -1840
        },5500,'easeInSine');
    },function(){
        $('.full').stop().animate({
            top:0
        },1000,'easeInSine');
    });

    $('.main_page').hover(function(){
        $('.studio').stop().animate({
           top: -2200,
        },5500,'easeInSine');
    },function(){
        $('.studio').stop().animate({
            top:0
        },1000,'easeInSine');
    });

    $('.m_swiper .main_page').hover(function(){
        $('.full').stop().animate({
           top: -935
        },5000,'easeInSine');
    },function(){
        $('.full').stop().animate({
            top:0
        },1000,'easeInSine');
    });

    $('.m_swiper .main_page').hover(function(){
        $('.studio').stop().animate({
           top: -1120,
        },5000,'easeInSine');
    },function(){
        $('.studio').stop().animate({
            top:0
        },1000,'easeInSine');
    });


    //marquee
    $('.marquee-with-options').marquee({
        duration: 20000,
        gap: 50,
        delayBeforeStart: -30000,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });
    $('.marquee').marquee({
        duration: 20000,
        gap: 50,
        delayBeforeStart: -30000,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });



    //top
    //Scroll event
    $(window).scroll(function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 200) $('#to_top').fadeIn('slow');
        if (scrolled < 200) $('#to_top').fadeOut('slow');
    });

    $(window).scroll(function(){
        var scrolled = $(window).scrollTop();
        if (scrolled < 200) $('#logo').fadeIn('slow');
        if (scrolled > 200) $('#logo').fadeOut('slow');
    });
    
    //Click event
    $('#to_top').click(function () {
        $("html, body").animate({ scrollTop: "0" },  500);
    });

    //hidden_menu
    $("#ham_btn").click(function(){
		$(".hidden_menu_wrap").toggleClass("opend");
	});  


});//end