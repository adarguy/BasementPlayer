var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});

var array = ['gaming', 'computer parts', 'rigs'];
var i=0;
setTimeout(function(){
    setInterval(function(){
        $('#camp-switch').removeClass('hatch');
    }, 3000);
},2000);
setInterval(function(){
    $('#camp-switch').text(array[i]);
    i = (i < 2) ? i + 1 : 0;
    $('#camp-switch').addClass('hatch');
}, 3000);