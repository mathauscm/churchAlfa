import axios from 'axios';

// Configuração de uma instância do Axios
const axiosInstance = axios.create({
  baseURL: 'http://192.168.2.12:3000/api', // URL base do servidor
  timeout: 10000, // Tempo limite de 10 segundos
});

// Função para buscar versículos no backend
export async function fetchVerses(bookName, chapter, verse = null) {
  try {
    const response = await axiosInstance.get('/verses', {
      params: {
        bookName,
        chapter,
        verse,
      },
    });
    return response.data; // Retorna os dados do versículo
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.error('Erro: Tempo limite excedido. Verifique sua conexão ou o servidor.');
    } else if (error.response) {
      console.error(`Erro ao buscar versículos: ${error.response.status} - ${error.response.statusText}`);
    } else {
      console.error('Erro ao buscar versículos:', error.message);
    }
    throw error; // Repassa o erro para o componente lidar
  }
}

// Função para listar os livros (dados estáticos, podem ser movidos para o backend)
export const books = [
  { id: 1, name: 'Gênesis', chapters: 50 },
  { id: 2, name: 'Êxodo', chapters: 40 },
  { id: 3, name: 'Levítico', chapters: 27 },
  { id: 4, name: 'Números', chapters: 36 },
  { id: 5, name: 'Deuteronômio', chapters: 34 },
  { id: 6, name: 'Josué', chapters: 24 },
  { id: 7, name: 'Juízes', chapters: 21 },
  { id: 8, name: 'Rute', chapters: 4 },
  { id: 9, name: '1 Samuel', chapters: 31 },
  { id: 10, name: '2 Samuel', chapters: 24 },
  { id: 11, name: '1 Reis', chapters: 22 },
  { id: 12, name: '2 Reis', chapters: 25 },
  { id: 13, name: '1 Crônicas', chapters: 29 },
  { id: 14, name: '2 Crônicas', chapters: 36 },
  { id: 15, name: 'Esdras', chapters: 10 },
  { id: 16, name: 'Neemias', chapters: 13 },
  { id: 17, name: 'Ester', chapters: 10 },
  { id: 18, name: 'Jó', chapters: 42 },
  { id: 19, name: 'Salmos', chapters: 150 },
  { id: 20, name: 'Provérbios', chapters: 31 },
  { id: 21, name: 'Eclesiastes', chapters: 12 },
  { id: 22, name: 'Cânticos', chapters: 8 },
  { id: 23, name: 'Isaías', chapters: 66 },
  { id: 24, name: 'Jeremias', chapters: 52 },
  { id: 25, name: 'Lamentações', chapters: 5 },
  { id: 26, name: 'Ezequiel', chapters: 48 },
  { id: 27, name: 'Daniel', chapters: 12 },
  { id: 28, name: 'Oseias', chapters: 14 },
  { id: 29, name: 'Joel', chapters: 3 },
  { id: 30, name: 'Amós', chapters: 9 },
  { id: 31, name: 'Obadias', chapters: 1 },
  { id: 32, name: 'Jonas', chapters: 4 },
  { id: 33, name: 'Miqueias', chapters: 7 },
  { id: 34, name: 'Naum', chapters: 3 },
  { id: 35, name: 'Habacuque', chapters: 3 },
  { id: 36, name: 'Sofonias', chapters: 3 },
  { id: 37, name: 'Ageu', chapters: 2 },
  { id: 38, name: 'Zacarias', chapters: 14 },
  { id: 39, name: 'Malaquias', chapters: 4 },
  { id: 40, name: 'Mateus', chapters: 28 },
  { id: 41, name: 'Marcos', chapters: 16 },
  { id: 42, name: 'Lucas', chapters: 24 },
  { id: 43, name: 'João', chapters: 21 },
  { id: 44, name: 'Atos', chapters: 28 },
  { id: 45, name: 'Romanos', chapters: 16 },
  { id: 46, name: '1 Coríntios', chapters: 16 },
  { id: 47, name: '2 Coríntios', chapters: 13 },
  { id: 48, name: 'Gálatas', chapters: 6 },
  { id: 49, name: 'Efésios', chapters: 6 },
  { id: 50, name: 'Filipenses', chapters: 4 },
  { id: 51, name: 'Colossenses', chapters: 4 },
  { id: 52, name: '1 Tessalonicenses', chapters: 5 },
  { id: 53, name: '2 Tessalonicenses', chapters: 3 },
  { id: 54, name: '1 Timóteo', chapters: 6 },
  { id: 55, name: '2 Timóteo', chapters: 4 },
  { id: 56, name: 'Tito', chapters: 3 },
  { id: 57, name: 'Filemom', chapters: 1 },
  { id: 58, name: 'Hebreus', chapters: 13 },
  { id: 59, name: 'Tiago', chapters: 5 },
  { id: 60, name: '1 Pedro', chapters: 5 },
  { id: 61, name: '2 Pedro', chapters: 3 },
  { id: 62, name: '1 João', chapters: 5 },
  { id: 63, name: '2 João', chapters: 1 },
  { id: 64, name: '3 João', chapters: 1 },
  { id: 65, name: 'Judas', chapters: 1 },
  { id: 66, name: 'Apocalipse', chapters: 22 },
];
