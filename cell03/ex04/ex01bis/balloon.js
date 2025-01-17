$(document).ready(function() {
    let color = ["green", "blue", "red"];
    let contador = 0;
    let tamanho = 200;

    $('#balao').on('click', function() {
        // Alterna entre as cores
        $(this).css('background', color[contador]);
        
        // Incrementa o contador para a próxima cor
        contador = (contador + 1) % color.length;

        // Aumenta o tamanho até 420px
        if (tamanho >= 420) {
            tamanho = 200;
        } else {
            tamanho += 10;
        }

        $(this).css({
            'height': `${tamanho}px`,
            'width': `${tamanho}px`
        });
    });

    $('#balao').on('mouseleave', function() {
        // Diminui o tamanho até voltar a 200px
        let tamanhoAtual = parseInt($(this).css('height'));

        if (tamanhoAtual > 200) {
            tamanhoAtual -= 5;
        }

        // Se o tamanho for 200px, a cor deve voltar para red
        if (tamanhoAtual === 200) {
            $(this).css('background', 'red');
            return;
        }

        $(this).css({
            'height': `${tamanhoAtual}px`,
            'width': `${tamanhoAtual}px`
        });

        // Alterna entre as cores quando o mouse sai (não entra mais na cor inicial após o reset)
        contador = (contador -1 + color.length) % color.length;
        $(this).css('background', color[contador]);
    });
});
