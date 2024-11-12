const express = require('express');
const router = express.Router();
const recordsController = require('../controllers/recordsController')

// タイピング記録を新規作成
router.post('/createRecord', recordsController.createRecord);

// 特定のユーザーから全てのタイピング記録を取得
router.get('/:id', recordsController.getAllRecordsById);

// 特定のユーザーから最新のレコードを取得
router.get('/first/:id', recordsController.getRecordById);

// 特定のユーザーの自己ベストを取得
router.get('/best/:id', recordsController.getBestRecordById);


module.exports = router;