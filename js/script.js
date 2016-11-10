
$(window).scroll(function() {
if ($(this).scrollTop() > 300) {
        $('.left-img').addClass('left-to-right');
} 
else {
$('.left-img').removeClass('left-to-right');
}
});


$(window).scroll(function() {
if ($(this).scrollTop() > 300) {
        $('.right-text').addClass('right-to-left-year');
} 
else {
$('.right-text').removeClass('right-to-left-year');
}
});


$(window).scroll(function() {
if ($(this).scrollTop() > 300) {
        $('.right-heading').addClass('right-to-left');
} 
else {
$('.right-heading').removeClass('right-to-left');
}
});