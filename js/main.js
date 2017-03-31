$('document').ready(function () {
    getGradient();
    getQuote(quotes);
    $('#get-quote').on('click', function () {
        getGradient();
        getQuote(quotes);
    })
});