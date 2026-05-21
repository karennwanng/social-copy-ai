// Envia o prompt para a API e exibe a legenda gerada
async function gerarLegenda() {
    const btn = document.getElementById("btn-gerar");
    btn.textContent = "Gerando...";
    btn.disabled = true;
    try {
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
        btn.textContent = "Gerar";
        btn.disabled = false;
    } catch (error) {
        console.error("Erro ao gerar legenda:", error);
        alert("Ocorreu um erro ao gerar a legenda. Tente novamente.");
        btn.textContent = "Gerar";
        btn.disabled = false;
    }
}

function limpar() {
    document.getElementById("descricao").value = "";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("texto-gerado").innerText = "";
}

function copiarTexto() {
    try {
        const texto = document.getElementById("texto-gerado").innerText;
        navigator.clipboard.writeText(texto).then(() => {
            const btn = document.getElementById("btn-copiar");
            btn.innerHTML = '<i class="fa-solid fa-check"></i>';
            setTimeout(() => btn.innerHTML = '<i class="fa-regular fa-copy"></i>', 2000);
        })
    } catch (erro) {
        console.error("Erro ao copiar o texto:", erro);
    }
}

document.getElementById("btn-gerar").addEventListener("click", gerarLegenda);
document.getElementById("btn-limpar").addEventListener("click", limpar);
document.getElementById("btn-copiar").addEventListener("click", copiarTexto);
document.getElementById("descricao").addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        gerarLegenda();
    }
});

document.getElementById("btn-tema").addEventListener("click", function () {
    document.documentElement.classList.toggle("tema-azul");
    const btn = document.getElementById("btn-tema");
    btn.textContent = document.documentElement.classList.contains("tema-azul")
        ? "🟣 Tema Roxo"
        : "🔵 Tema Azul";
});
