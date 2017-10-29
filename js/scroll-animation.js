function ativaScrollSuave(selector) {
    $(selector).click(function(event){
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
    });
}

ativaScrollSuave('[data-js="botao-sobre"]');
ativaScrollSuave('[data-js="botao-palestrantes"]');
ativaScrollSuave('[data-js="botao-subscribe"]');
