const express = require('express');
const router = express.Router();

// const { body, validationResult } = require('express-validator');

const {
    join,
    login,
    passwordResetRequest,
    passwordRest,
} = require('../controller/UserController');

router.use(express.json());

// 모듈화 => 하나의 미들웨어 역할
// const validate = (req, res, next) => {
//     const err = validationResult(req);

//     // 밥 안드셨나요? 아니요 => 이중부정 = 긍정
//     // 밥 드셨나요? 네 => 긍정
//     if (err.isEmpty()) {
//         return next(); // 다음 할 일 (미들웨어, 함수) 찾아가
//     } else {
//         return res.status(400).json(err.array());
//     }
// };

router.post('/join', join);
router.post('/login', login);
router.post('/reset', passwordResetRequest);
router.put('/reset', passwordRest);

module.exports = router;
