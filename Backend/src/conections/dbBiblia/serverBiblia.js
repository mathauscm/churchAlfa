const express = require('express');
const { createConnection, fetchVerses } = require('./appBiblia');
const app = express();

const PORT = 3000;

app.get('/api/verses', async (req, res) => {
    const { bookName, chapter, verse } = req.query;

    // Validação de parâmetros
    if (!bookName || !chapter) {
        return res.status(400).json({ error: 'Os parâmetros bookName e chapter são obrigatórios.' });
    }

    if (isNaN(chapter) || (verse && isNaN(verse))) {
        return res.status(400).json({ error: 'Os parâmetros chapter e verse devem ser números.' });
    }

    // Conexão com o banco de dados
    const db = createConnection();
    if (!db) {
        return res.status(500).json({ error: 'Erro ao conectar ao banco de dados.' });
    }

    try {
        // Buscar os versículos
        const verses = await fetchVerses(db, bookName, Number(chapter), verse ? Number(verse) : null);
        res.json(verses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        db.close();
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
