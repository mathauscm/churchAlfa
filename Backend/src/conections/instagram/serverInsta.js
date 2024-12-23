const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const ACCOUNT_ID = process.env.INSTAGRAM_ACCOUNT_ID;

app.get('/api/instagram', async (req, res) => {
    try {
        const response = await axios.get(
            `https://graph.instagram.com/${ACCOUNT_ID}/media?fields=id,caption,media_url,permalink&access_token=${ACCESS_TOKEN}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
