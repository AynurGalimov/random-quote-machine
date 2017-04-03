var getGradient = function () {
    var red1 = Math.floor(Math.random() * 256);
    var green1 = Math.floor(Math.random() * 256);
    var blue1 = Math.floor(Math.random() * 256);

    var red2 = Math.floor(Math.random() * 256);
    var green2 = Math.floor(Math.random() * 256);
    var blue2 = Math.floor(Math.random() * 256);

    var rgb1 = 'rgb(' + red1 + ',' + green1 + ',' + blue1 + ')';
    var rgb2 = 'rgb(' + red2 + ',' + green2 + ',' + blue2 + ')';

    var webkitLinearGradient = '-webkit-linear-gradient(to left,' + rgb1 + ',' + rgb2 + ')';
    var linearGradient = 'linear-gradient(to left,' + rgb1 + ',' + rgb2 + ')';

    $('body').css('background-color', rgb1);
    $('#quote').css('color', rgb1);
};