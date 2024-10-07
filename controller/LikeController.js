const conn = require('../mariadb'); // db 모듈
const { StatusCodes } = require('http-status-codes');

// dotenv 모듈
const dotenv = require('dotenv');
dotenv.config();

const addLike = (req, res) => {
    // 좋아요 추가

    const { id } = req.params;
    const { user_id } = req.body;
    // liked_book_id = parseInt(liked_book_id);

    let sql = `INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)`;
    let values = [user_id, id];
    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        return res.status(StatusCodes.OK).json(results);
    });
};

const removeLike = (req, res) => {
    // 좋아요 취소

    const { id } = req.params;
    const { user_id } = req.body;

    let sql = `DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?;`;
    let values = [user_id, id];
    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        return res.status(StatusCodes.OK).json(results);
    });
};

module.exports = { addLike, removeLike };
