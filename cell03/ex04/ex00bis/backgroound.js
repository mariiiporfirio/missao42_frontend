$('#botao').on('click', function() {
    let color = "red";
    $('body').css('background', color);
});

$('#botao').on('mouseleave', () =>{
    let color = "pink";
    $('body').css('background', color);
})