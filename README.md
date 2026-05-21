# Gerador de Legenda com IA

> Gere legendas para redes sociais usando inteligência artificial

![preview do projeto](assets/img/preview.png)

## 🚀 Demo
[Link do projeto](https://karennwanng.github.io/social-copy-ai/)

> ⚠️ O servidor pode demorar até 50 segundos na primeira requisição por estar no plano gratuito do Render.

## 💻 Tecnologias
- HTML, CSS e JavaScript
- Node.js
- API Groq (IA)
- Deploy: GitHub Pages + Render

## ✨ Funcionalidades
- Geração de legendas para Facebook, Instagram, Twitter/X, LinkedIn e TikTok
- Escolha de tom: informal, profissional, inspirador e mais
- Dois temas: roxo e azul
- Copiar legenda com um clique
- Gerar com Enter

## 🔧 Como rodar localmente
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` com sua chave: `GROQ_API_KEY=sua_chave`
4. Rode o servidor: `node server.js`
5. Abra o `frontend/index.html` com Live Server

## 🧪 Qualidade e testes
- Validação de campos antes de enviar para a API
- Tratamento de erros com `try/catch` — falhas de rede e API
- Feedback visual de carregamento no botão Gerar
- Testado em desktop e mobile
- IDs únicos validados entre HTML, CSS e JS
- Acessibilidade verificada — `aria-label` e `alt` nas imagens

## 👩‍💻 Autora
Feito por [K.W](https://github.com/karennwanng)
