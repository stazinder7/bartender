$(window).scroll(function(){
    var header=  $('header');
    var scroll= $(window).scrollTop();
    if(scroll >= 10 ){
        header.addClass('stickyHeader')
    }
    else {
        header.removeClass('stickyHeader')
    }
})