//Fluxo de trabalho:
// 1. Usuário clica no botão
async function gerarLegenda() {
    // 2. JS pega os valores do textarea, rede social, tom
    const textoUsuario = document.getElementById("descricao").value;
    const redeSocial = document.getElementById("redes-sociais").value;
    const tom = document.getElementById("tons").value;

    // 3. JS valida o que o usuário informou
    if (textoUsuario === '') {
        alert("Descrição inválida — escreva sobre o que é o seu post.");
        return;
    }

    // 4. JS monta o prompt que vai para a IA
    const prompt = `Crie uma legenda para ${redeSocial} com tom ${tom} sobre: ${textoUsuario}`;

    // 5. JS chama o servidor e aguarda
    const response = await fetch("http://127.0.0.1:3000/gerar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt })
    });

    // 6. JS recebe a resposta e mostra na página
    const data = await response.json();
    const textoGerado = data.text;
    document.getElementById("resultado").style.display = "block";
    document.getElementById("texto-gerado").innerText = textoGerado;
    document.getElementById("descricao").value = "";
}

function limpar () {
    document.getElementById("descricao").value = "";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("texto-gerado").innerText = "";
    document.getElementById("descricao").value = "";
}