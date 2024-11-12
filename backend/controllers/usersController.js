const knex = require('../knex');

// ユーザーの新規作成
exports.createUser = async (req, res, next) => {
    try {
        const [newUser] = await knex('users')
            .insert(req.body)
            .returning('*');
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

// 全ユーザーの取得
exports.getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await knex('users').select('*');
        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
}

// 特定のユーザーの取得
exports.getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await knex('users')
            .where('id', userId)
            .select('*');
        if (!user) {
            res.status(404).json({message: 'ユーザーが見つかりませんでした'})
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}