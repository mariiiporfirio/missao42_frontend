$(document).ready(function() {
    // Exibe o alerta a cada 30 segundos
    setInterval(() => {
        alert("Please, use me...");
    }, 30000);

    // Selecionando os elementos com jQuery
    let numero_primeiro = $("#iten1");
    let numero_segundo = $("#iten2");
    let selecao_operador = $("#operadores");
    let resultado = $("#try_me");

    resultado.on("click", function() {
        let num1 = parseFloat(numero_primeiro.val());
        let num2 = parseFloat(numero_segundo.val());
        let operador = selecao_operador.val();
        let res;

        // Validação adicional para garantir que não há vírgulas no número
        if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) || /,/.test(numero_primeiro.val()) || /,/.test(numero_segundo.val())) {
            console.log("Error :(");
            alert("Error :(");
            return;
        }

        // Processando a operação de acordo com o operador selecionado
        switch (operador) {
            case "mais":
                res = num1 + num2;
                console.log(`O resultado de ${num1} + ${num2} é: ${res}`);
                alert(`O resultado de ${num1} + ${num2} é: ${res}`);
                break;

            case "menos":
                res = num1 - num2;
                console.log(`O resultado de ${num1} - ${num2} é: ${res}`);
                alert(`O resultado de ${num1} - ${num2} é: ${res}`);
                break;

            case "multiplicacao":
                res = num1 * num2;
                console.log(`O resultado de ${num1} * ${num2} é: ${res}`);
                alert(`O resultado de ${num1} * ${num2} é: ${res}`);
                break;

            case "divisao":
                if (num1 === 0 || num2 === 0) {
                    console.log("It's over 9000 !");
                    alert("It's over 9000 !");
                    break;
                } else {
                    res = num1 / num2;
                    console.log(`O resultado de ${num1} / ${num2} é: ${res}`);
                    alert(`O resultado de ${num1} / ${num2} é: ${res}`);
                    break;
                }

            case "porcentagem":
                res = (num1 * num2) / 100;
                console.log(`O resultado de ${num1} % ${num2} é: ${res}`);
                alert(`O resultado de ${num1} % ${num2} é: ${res}`);
                break;

            default:
                console.log("Operador inválido.");
                alert("Operador inválido.");
                break;
        }

        // Limpar os campos após calcular
        numero_primeiro.val("");
        numero_segundo.val("");
        selecao_operador.val("mais");
        console.clear();
    });
});
