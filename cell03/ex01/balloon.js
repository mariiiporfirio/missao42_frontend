let selecao_balao = document.getElementById("balao");

let color = ["green", "blue", "red"];
let contador = 0;
let tamanho = 200;

selecao_balao.addEventListener("click", () =>{
    contador = (contador + 1) % color.length;
    selecao_balao.style.background = color[contador];

    if (tamanho >= 420) {
        tamanho = 200;
    } else {
        tamanho += 10;
    }

    selecao_balao.style.height = `${tamanho}px`;
    selecao_balao.style.width = `${tamanho}px`;
});

selecao_balao.addEventListener("mouseleave", () =>{
    if (tamanho > 200){
        tamanho -= 5;
    }

    if (tamanho === 200) {
        selecao_balao.style.background = "red";
        return;
    }

    selecao_balao.style.height = `${tamanho}px`;
    selecao_balao.style.width = `${tamanho}px`;

    contador = (contador -1 + color.length) % color.length;
    selecao_balao.style.background = color[contador];
})