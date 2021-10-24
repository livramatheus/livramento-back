const db = require('../config/db');

const getAllProjects = () => {
    const sql = `SELECT
                   *
                 FROM
                   project;`;

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

const getProject = (id) => {
    const sql = `SELECT
                   *
                 FROM
                   project
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
                reject('Not found')
            }
        })
    });
}

module.exports = {
    getAllProjects,
    getProject
}