const express = require('express');
const router = express.Router();
const typeKeyCountController = require('../controllers/typeKeyCountController')

// タイプキーカウントの新規作成
router.post('/create/:id', typeKeyCountController.createTypeKeyCount);

// 特定のユーザーの、全てのタイプキーカウントを取得
router.get('/:id', typeKeyCountController.getTypeKeyCountById);

module.exports = router;