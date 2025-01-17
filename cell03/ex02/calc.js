setInterval(() => {
    alert("Please, use me...");
}, 30000);

var numero_primeiro = document.getElementById("iten1");
var numero_segundo = document.getElementById("iten2");
let selecao_operador = document.getElementById("operadores");
let resultado = document.getElementById("try_me");

resultado.addEventListener("click", () => {
    let num1 = parseFloat(numero_primeiro.value);
    let num2 = parseFloat(numero_segundo.value);
    let operador = selecao_operador.value;
    let res;

    // Validação adicional para garantir que não há vírgulas no número
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) || /,/.test(numero_primeiro.value) || /,/.test(numero_segundo.value)) {
        console.log("Error :(");
        alert("Error :(");
        return;
    }
    
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
                alert (`O resultado de ${num1} / ${num2} é: ${res}`);
                break;
            }
                
        case "porcentagem":
            res = (num1 * num2) /100;
            console.log(`O resultado de ${num1} % ${num2} é: ${res}`);
            alert(`O resultado de ${num1} % ${num2} é: ${res}`);
            break;

        default:
            console.log("Operador inválido.");
            alert("Operador inválido.");
            break;
    };

    numero_primeiro.value = "";
    numero_segundo.value = "";
    selecao_operador.value = "mais";
    console.clear();
    
});
