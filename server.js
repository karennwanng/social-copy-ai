const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Groq = require('groq-sdk');

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post('/gerar', async (req, res) => {
    const { prompt } = req.body;

    try {
        const completion = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'user', content: prompt }]
        });

        const text = completion.choices[0].message.content;
        res.json({ text });

    } catch (erro) {
        console.error('Erro:', erro.message);
        res.status(500).json({ error: erro.message });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});