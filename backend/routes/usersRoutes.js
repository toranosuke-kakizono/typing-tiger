const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// ユーザーを新規作成
router.post('/createUser', usersController.createUser);

// 全ユーザーを取得
router.get('/', usersController.getAllUsers);

// 特定のユーザーを取得
router.get('/:id', usersController.getUserById);


module.exports = router;