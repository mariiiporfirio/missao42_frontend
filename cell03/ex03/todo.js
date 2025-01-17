let selecao_btn = document.getElementById("btn_tarefa");
let selecao_div = document.getElementById("ft_list");

function adicionar_lista(adicao) {
    let tarefa_div = document.createElement('div');
    tarefa_div.textContent = adicao;
    tarefa_div.classList.add('nova_tarefa');
    
    tarefa_div.addEventListener('click', () => {
        if (confirm("Remover tarefa?")) {
            tarefa_div.remove();
            salvar_cookies();
        }
    });
    
    selecao_div.insertBefore(tarefa_div, selecao_div.firstChild);
    
    salvar_cookies();
}

selecao_btn.addEventListener("click", () => {
    let adicao = prompt("Adicione uma tarefa !");

    if (adicao && adicao.trim() !== '') {
        adicionar_lista(adicao);
    } else {
        alert("Defina uma tarefa e tente novamente !");
    }
});

function salvar_cookies() {
    const tarefas_array = [];
    const tarefa_cookies = document.querySelectorAll('#ft_list .nova_tarefa');

    tarefa_cookies.forEach(tarefa_div => {
        tarefas_array.push(tarefa_div.textContent);
    });

    document.cookie = "cookie_tarefas=" + JSON.stringify(tarefas_array) + ";path=/";
}

function carregar_cookies() {
    const tarefas_cookies = document.cookie.split('; ').find(row => row.startsWith('cookie_tarefas='));

    if (tarefas_cookies) {
        const tarefas = JSON.parse(tarefas_cookies.split('=')[1]);
        tarefas.forEach(tarefa => {
            adicionar_lista(tarefa);
        });
    }
}

window.onload = function() {
    carregar_cookies();
};
