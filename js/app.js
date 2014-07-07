$(document).ready(function() {




    $(".fancybox").fancybox({
        padding: 0
    });


    if ($(window).innerWidth() > 1024) {
        menu_align();
        content_wrapper_align();

        $('.tooltip').tooltipster({
            position: 'right'
        });
    }




    $.vegas('slideshow', {
        backgrounds: [
            {src: 'img/bg/bg1.jpg', fade: 1000},
            {src: 'img/bg/bg4.jpg', fade: 1000}
        ]
    })('overlay', {
        src: 'bg/overlays/02.png'
    });


});



$(window).resize(function() {
    if ($(window).innerWidth() > 1024) {
        menu_align();
        content_wrapper_align();
    }
});


function menu_align() {
    $("#menu").css({
        "top": function() {
            return (parseInt($("body").innerHeight() / 2) - parseInt($("#menu").outerHeight() / 2));
        }()
    });
}

function content_wrapper_align() {

    var cw = $(".content-wrapper");
    var b_w = parseInt($(window).innerWidth());
    var b_h = parseInt($(window).innerHeight());
    cw.each(function() {
        var cw_w = ($(this).outerWidth() / 2);
        var cw_h = ($(this).outerHeight() / 2);
        var top = function() {
            if ((b_h) < (cw_h * 2)) {
                return parseInt((b_h / 2) / 4) + parseInt($("#logo").outerHeight() / 2);
            } else {
                return parseInt((b_h / 2) - cw_h);
            }
        }();
        var left = function() {
            console.log(parseInt((b_w / 2) - (cw_w)));
            return parseInt((b_w / 2) - (cw_w));
        }();
        $(this).css({
            "top": top,
            "left": left
        });

    });

    // alert($("#page1").css("left"));
}



$("#menu a").click(function(e) {

    e.preventDefault();
    var p = $(this).attr("href");
    move_to(p);
    return false;
});




$("select").change(function(e) {
    e.preventDefault();
    var mp = $(this).val();
    move_to(mp);
    return false;
});


function move_to(arg) {
    var id = "#" + $(".content-wrapper:visible").attr("id");
    if (id == "#undefined") {
        $(arg).fadeIn();
    } else if (id != arg) {
        $(".content-wrapper:visible").fadeOut(function() {
            $(arg).fadeIn();
        });
    }
}


$(window).load(function() {
    $("#loading").fadeOut(200);

    //$(".backstretch").append("<div id='trancy-layer'>&nbsp;</div>");

});




//
//$.backstretch([
//    "img/bg/bg1.jpg",
////    "img/bg/bg2.jpg",
////    "img/bg/bg3.jpg",
//    "img/bg/bg4.jpg"
//], {duration: 5000, fade: 1500});

