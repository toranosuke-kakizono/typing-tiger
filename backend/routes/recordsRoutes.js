const express = require('express');
const router = express.Router();
const recordsController = require('../controllers/recordsController')

// タイピング記録を新規作成
router.post('/createRecord', recordsController.createRecord);

// 特定のユーザーから全てのタイピング記録を取得
router.get('/:id', recordsController.getAllRecordsById);


module.exports = router;