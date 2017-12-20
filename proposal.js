$('.bg-map-button').click(function(){
    $('.bg-map-button').addClass("selected");
    $('.bg-light-button').removeClass("selected");
    $('.bg-dark-button').removeClass("selected");
    $('.section').addClass("bg-map");
    $('.section').removeClass("bg-light");
    $('.section').removeClass("bg-dark");
});

$('.bg-light-button').click(function(){
    $('.bg-light-button').addClass("selected");
    $('.bg-map-button').removeClass("selected");
    $('.bg-dark-button').removeClass("selected");
    $('.section').removeClass("bg-map");
    $('.section').addClass("bg-light");
    $('.section').removeClass("bg-dark");
});

$('.bg-dark-button').click(function(){
    $('.bg-dark-button').addClass("selected");
    $('.bg-map-button').removeClass("selected");
    $('.bg-light-button').removeClass("selected");
    $('.section').removeClass("bg-map");
    $('.section').removeClass("bg-light");
    $('.section').addClass("bg-dark");
});

$('.refresh').click(function(){
    $('#fpi').toggleClass("animate");
    $('#percentage').toggleClass("animate");
    $('.refresh').toggleClass("animate");
});




