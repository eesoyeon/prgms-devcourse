const express = require('express');
const router = express.Router();

const { allCategory } = require('../controller/CategoryController');

// const { body, param, validationResult } = require('express-validator');

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

// 순서 중요 ***

router.get('/', allCategory); // 카테고리 전체 조회

module.exports = router;
