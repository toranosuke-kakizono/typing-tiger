const express = require('express');
const router = express.Router();
const typoKeyCountController = require('../controllers/typoKeyCountController')

// タイプキーカウントの新規作成
router.post('/create/:id', typoKeyCountController.createTypoKeyCount);

// 特定のユーザーの、全てのタイプキーカウントを取得
router.get('/:id', typoKeyCountController.getTypoKeyCountById);

module.exports = router;