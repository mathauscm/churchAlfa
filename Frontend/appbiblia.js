import axios from 'axios';

// Função para buscar versículos no backend
export async function fetchVerses(bookName, chapter, verse = null) {
  try {
    const response = await axios.get('http://192.168.2.12:3000/api/verses', {
      params: {
        bookName,
        chapter,
        verse,
      },
    });
    return response.data; // Retorna os dados do versículo
  } catch (error) {
    console.error('Erro ao buscar versículos:', error.message);
    throw error;
  }
}

// Função para listar os livros (dados estáticos, podem ser movidos para o backend)
export const books = [
  { id: 1, name: 'Gênesis' },
  { id: 2, name: 'Êxodo' },
  { id: 3, name: 'Levítico' },
  { id: 4, name: 'Números' },
  { id: 5, name: 'Deuteronômio' },
  { id: 6, name: 'Josué' },
  { id: 7, name: 'Juízes' },
  { id: 8, name: 'Rute' },
  { id: 9, name: '1 Samuel' },
  { id: 10, name: '2 Samuel' },
  { id: 11, name: '1 Reis' },
  { id: 12, name: '2 Reis' },
  { id: 13, name: '1 Crônicas' },
  { id: 14, name: '2 Crônicas' },
  { id: 15, name: 'Esdras' },
  { id: 16, name: 'Neemias' },
  { id: 17, name: 'Ester' },
  { id: 18, name: 'Jó' },
  { id: 19, name: 'Salmos' },
  { id: 20, name: 'Provérbios' },
  { id: 21, name: 'Eclesiastes' },
  { id: 22, name: 'Cânticos' },
  { id: 23, name: 'Isaías' },
  { id: 24, name: 'Jeremias' },
  { id: 25, name: 'Lamentações' },
  { id: 26, name: 'Ezequiel' },
  { id: 27, name: 'Daniel' },
  { id: 28, name: 'Oseias' },
  { id: 29, name: 'Joel' },
  { id: 30, name: 'Amós' },
  { id: 31, name: 'Obadias' },
  { id: 32, name: 'Jonas' },
  { id: 33, name: 'Miqueias' },
  { id: 34, name: 'Naum' },
  { id: 35, name: 'Habacuque' },
  { id: 36, name: 'Sofonias' },
  { id: 37, name: 'Ageu' },
  { id: 38, name: 'Zacarias' },
  { id: 39, name: 'Malaquias' },
  { id: 40, name: 'Mateus' },
  { id: 41, name: 'Marcos' },
  { id: 42, name: 'Lucas' },
  { id: 43, name: 'João' },
  { id: 44, name: 'Atos' },
  { id: 45, name: 'Romanos' },
  { id: 46, name: '1 Coríntios' },
  { id: 47, name: '2 Coríntios' },
  { id: 48, name: 'Gálatas' },
  { id: 49, name: 'Efésios' },
  { id: 50, name: 'Filipenses' },
  { id: 51, name: 'Colossenses' },
  { id: 52, name: '1 Tessalonicenses' },
  { id: 53, name: '2 Tessalonicenses' },
  { id: 54, name: '1 Timóteo' },
  { id: 55, name: '2 Timóteo' },
  { id: 56, name: 'Tito' },
  { id: 57, name: 'Filemom' },
  { id: 58, name: 'Hebreus' },
  { id: 59, name: 'Tiago' },
  { id: 60, name: '1 Pedro' },
  { id: 61, name: '2 Pedro' },
  { id: 62, name: '1 João' },
  { id: 63, name: '2 João' },
  { id: 64, name: '3 João' },
  { id: 65, name: 'Judas' },
  { id: 66, name: 'Apocalipse' },
];
