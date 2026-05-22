# Documentação Técnica — Gerador de Legenda com IA

## Estrutura do projeto
- `docs/` → frontend (HTML, CSS, JS e assets)
- `server.js` → backend Node.js
- `package.json` → dependências do projeto
- `.env` → chave da API (não vai para o repositório)
- `README.md` → documentação pública do projeto

## Decisões técnicas
O projeto foi desafiador desde a escolha da ferramenta de IA até a implementação. Usar chave de API e desenvolver o backend foi fundamental para o aprendizado.

### Por que try/catch?
Para captura erros externos que, como desenvolvedora, não consigo controlar — como falhas na chamada à API do Groq. Isso evita que o site quebre silenciosamente; em caso de erro, o usuário recebe um alerta e o botão volta ao estado normal.

### Por que addEventListener?
Porque toda a lógica de eventos fica centralizada no JS, facilitando manutenções futuras e separando as responsabilidades do HTML e do JavaScript.

### Por que variáveis CSS?
Porque caso seja necessário mudar as cores no futuro, a alteração será feita em um único lugar e refletirá em todo o projeto. Isso também permitiu criar os dois temas — azul e roxo.

### Por que separar frontend e backend?
O projeto está hospedado no GitHub Pages, que aceita apenas arquivos estáticos e não consegue rodar Node.js. O Render foi escolhido porque o server.js precisa de um servidor real para execução.

## Conceitos aprendidos

### async/await
Usado para não travar a página enquanto aguarda a resposta da API. O await faz o JS esperar a API responder antes de continuar — sem ele, o código tentaria usar o resultado antes de tê-lo e quebraria.

### Escopo de variáveis
Variáveis declaradas fora do try/catch ficam acessíveis tanto no try quanto no catch. Por isso o btn foi declarado antes do try — garantindo que o botão volta ao estado normal tanto em caso de sucesso quanto de erro.

### Responsividade
A @media query faz o site funcionar bem em diferentes tamanhos de tela. Quando a tela é menor que 600px, o layout se adapta — o título fica menor, o textarea diminui a altura e o botão de tema se reposiciona.

## Melhorias futuras
- Implementar o UptimeRobot para resolver o cold start — atualmente o servidor adormece após um longo período sem requisições, causando atraso de até 50 segundos na primeira chamada.
- Corrigir o posicionamento do botão de tema no Chrome mobile.
- Adicionar histórico de legendas geradas.