const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

// ユーザーを新規作成
router.post('/:id', userController.createUser);

// 全ユーザーを取得
router.get('/', userController.getAllUsers);

// 特定のユーザーを取得
router.get('/:id', userController.getUserById);


module.exports = router;