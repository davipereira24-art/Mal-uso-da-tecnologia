// usei ia aqui K
const totalDePaginas = 4; 

function irParaProximaPagina() {
    // 1. Pega o nome do arquivo atual (ex: "index1.html")
    let paginaAtual = window.location.pathname.split('/').pop();

    // Se o nome vier vazio (o usuário acessou só a pasta raiz), assumimos que é a 1
    if (paginaAtual === '') {
        paginaAtual = 'index1.html';
    }

    // 2. Extrai APENAS o número de dentro do nome do arquivo
    // O código /\d+/ procura por qualquer sequência de números no texto
    let buscaNumero = paginaAtual.match(/\d+/);

    if (buscaNumero) {
        // Converte o texto encontrado em um número matemático real
        let numeroAtual = parseInt(buscaNumero[0]); 

        // 3. Verifica se ainda não chegou no limite máximo de páginas
        if (numeroAtual < totalDePaginas) {
            let proximoNumero = numeroAtual + 1;
            
            // Monta o nome do próximo arquivo (ex: "index" + "2" + ".html" = "index2.html")
            let proximaPagina = "index" + proximoNumero + ".html";
            
            // Redireciona o usuário
            window.location.href = proximaPagina;
        } else {
            // Ação caso ele clique em "Próximo" estando na última página
            alert("Você já chegou ao final do conteúdo!");
            // window.location.href = "index1.html"; // Descomente se quiser que volte ao início
        }
    } else {
        console.error("Erro: O nome desta página não contém um número.");
        // Opcional: enviar para a página 1 caso dê erro
        // window.location.href = "index1.html";
    }
}