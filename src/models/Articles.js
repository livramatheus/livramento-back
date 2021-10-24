const db = require('../config/db');

const getAllArticles = () => {
    const sql = `SELECT
                   *
                 FROM
                   article;`;

    return new Promise((resolve, reject) => {
        db.query(
            sql,
            (error, res) => {
                if (error) {
                    reject(error);
                }

                resolve(res);
            }
        )
    });
}

const getArticle = (id) => {
    const sql = `SELECT
                   *
                 FROM
                   article
                 WHERE
                   id = ?;`;

    return new Promise((resolve, reject) => {
        db.query({
            sql: sql,
            values: [id]
        }, (error, res) => {
            if (error) {
                reject(error.message);
            } else {
                if (res[0]) {
                    resolve(res[0]);
                }
                reject('Article not found')
            }
        })
    });
}

module.exports = {
    getAllArticles,
    getArticle
}