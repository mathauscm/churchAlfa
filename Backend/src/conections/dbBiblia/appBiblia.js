const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

function createConnection() {
    const databasePath = path.join(__dirname, 'database', 'ARA.sqlite');

    if (!fs.existsSync(databasePath)) {
        console.error(`Erro: Arquivo de banco de dados não encontrado em ${databasePath}`);
        return null;
    }

    try {
        const db = new sqlite3.Database(databasePath);
        console.log('Conexão com o banco de dados bem-sucedida');
        return db;
    } catch (error) {
        console.error(`Erro ao conectar ao banco de dados: ${error.message}`);
        return null;
    }
}

async function fetchVerses(db, bookName, chapter, verse = null) {
    return new Promise((resolve, reject) => {
        let query;
        let params;

        if (verse) {
            query = `
                SELECT verse.verse, verse.text
                FROM verse
                INNER JOIN book ON verse.book_id = book.id
                WHERE book.name = ? AND verse.chapter = ? AND verse.verse = ?
            `;
            params = [bookName, chapter, verse];
        } else {
            query = `
                SELECT verse.verse, verse.text
                FROM verse
                INNER JOIN book ON verse.book_id = book.id
                WHERE book.name = ? AND verse.chapter = ?
                ORDER BY verse.verse ASC
            `;
            params = [bookName, chapter];
        }

        db.all(query, params, (err, rows) => {
            if (err) {
                reject(`Erro ao consultar dados: ${err.message}`);
            } else {
                resolve(rows);
            }
        });
    });
}

module.exports = { createConnection, fetchVerses };
