const axios = require('axios');
require('dotenv').config();

// Carregar token e ID da conta do arquivo .env
const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const ACCOUNT_ID = process.env.INSTAGRAM_ACCOUNT_ID;

/**
 * Função para buscar o feed do Instagram
 * @returns {Promise<Array>} Retorna uma lista de postagens
 */
const getInstagramFeed = async () => {
    try {
        const response = await axios.get(
            `https://graph.instagram.com/${ACCOUNT_ID}/media?fields=id,caption,media_url,permalink&access_token=${ACCESS_TOKEN}`
        );
        return response.data.data; // Retorna os dados do feed
    } catch (error) {
        console.error('Erro ao buscar feed do Instagram:', error.message);
        throw new Error('Não foi possível acessar o feed do Instagram');
    }
};

module.exports = { getInstagramFeed };
