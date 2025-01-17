$(document).ready(function() {
    // Usando jQuery para selecionar elementos
    let selecao_btn = $("#btn_tarefa");
    let selecao_div = $("#ft_list");

    // Adicionar evento de clique usando jQuery
    selecao_btn.on("click", function() {
        let adicao = prompt("Adicione uma tarefa !");

        if (adicao && adicao.trim() !== '') {
            adicionar_lista(adicao);
        } else {
            alert("Defina uma tarefa e tenta novamente !");
        }
    });

    // Função para adicionar a tarefa
    function adicionar_lista(adicao) {
        // Criar elemento div com jQuery
        let tarefa_div = $("<div>").text(adicao).addClass("nova_tarefa");

        // Adicionar evento de clique para remoção da tarefa
        tarefa_div.on("click", function() {
            if (confirm("Deseja remover essa tarefa?")) {
                $(this).remove(); // Usando jQuery para remover a tarefa
                salvar_cookies();
            }
        });

        // Adicionar tarefa ao topo da lista usando jQuery
        selecao_div.prepend(tarefa_div);

        salvar_cookies();
    }

    // Função para salvar as tarefas no cookie
    function salvar_cookies() {
        const tarefas_array = [];
        const tarefa_cookies = $(".nova_tarefa");

        // Coletar todas as tarefas usando jQuery
        tarefa_cookies.each(function() {
            tarefas_array.push($(this).text()); // Coletar o texto de cada tarefa
        });

        // Salvar tarefas como cookie
        document.cookie = "cookie_tarefas=" + JSON.stringify(tarefas_array) + ";path=/";
    }

    // Função para carregar as tarefas do cookie
    function carregar_cookies() {
        const tarefas_cookies = document.cookie.split('; ').find(row => row.startsWith('cookie_tarefas='));

        if (tarefas_cookies) {
            const tarefas = JSON.parse(tarefas_cookies.split('=')[1]);
            tarefas.forEach(tarefa => {
                adicionar_lista(tarefa);
            });
        }
    }

    // Carregar as tarefas quando a página for carregada
    carregar_cookies();
});
